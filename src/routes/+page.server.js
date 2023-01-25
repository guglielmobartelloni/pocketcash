import { redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from '$lib/utils'

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login');
    }

    const getTransactions = async () => {
        const transactions = serializeNonPOJOs(await locals.pb
            .collection('transactions')
            .getList(1, 50, { sort: '-created' }))
        console.log('Transactions: '+transactions)
        return transactions;
    }
    return { transactions: getTransactions() }
};

