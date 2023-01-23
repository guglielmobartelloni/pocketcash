import { redirect } from "@sveltejs/kit"

export const GET = ({ locals }) => {
    locals.pb.authStore.clear()
    locals.pb.user = undefined
    throw redirect(303, "/login")
}
