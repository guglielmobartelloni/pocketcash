import { error, invalid, redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }
};

export const actions = {
    new: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData())
        try {
            await locals.pb.collection('transactions').create({ user: locals.user.id, ...body })
        } catch (err) {
            console.log(err)
            throw error(500, 'Something went wrong')
        }

        throw redirect(303, '/');
    }
};

