import { redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from '$lib/utils'

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getTransactions = async () => {
        const transactions = serializeNonPOJOs(await locals.pb.collection('transactions').getList())
        console.log(transactions)
        return transactions;
    }
    return { transactions: getTransactions() }
};

