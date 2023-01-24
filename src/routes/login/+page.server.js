import { error, redirect } from '@sveltejs/kit'
export const actions = {
    login: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password)
        } catch (err) {
            console.log(err)
            throw error(err.status, err.data.message)
        }

        throw redirect(303, '/')
    }
}
