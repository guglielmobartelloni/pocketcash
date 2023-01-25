<script>
    import { formatter } from "$lib/utils";
    import Chart from "$lib/components/Chart.svelte";
    export let data;

    let amountItems = data.transactions.items.map((it) => ({
        amount: it.amount,
        type: it.type,
    }));

    let getTotalAmount = () => {
        let totalIncome = amountItems
            .filter((item) => item.type == "income")
            .map((i) => i.amount)
            .reduce((a, b) => a + b, 0);
        let totalExpense = amountItems
            .filter((item) => item.type == "expense")
            .map((i) => i.amount)
            .reduce((a, b) => a + b, 0);

        return totalIncome - totalExpense;
    };

let chartData = data.transactions.items.sort((a,b) => new Date(a) <= new Date(b));


    let options = {
        chart: {
            type: "line",
        },
        series: [
            {
                name: "sales",
                data: chartData.map((e) => e.amount),
            },
        ],
        xaxis: {
            categories: chartData.map((e) =>
                new Date(e.transaction_date).toLocaleDateString("en-US")
            ),
        },
    };
</script>

<h3>Transactions</h3>

<Chart {options} />

<table role="grid">
    <thead>
        <tr>
            <th scope="col" />
            <th scope="col">Amount</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Categories</th>
        </tr>
    </thead>
    <tbody>
        {#each data.transactions.items as trans}
            <tr>
                <td>{trans.type == "expense" ? "💸" : "💰"}</td>
                <td
                    >{trans.type == "expense" ? "-" : "+"}{formatter.format(
                        trans.amount
                    )}</td
                >
                <td>{trans.name}</td>
                <td
                    >{new Date(trans.transaction_date).toLocaleDateString(
                        "en-US"
                    )}</td
                >
                <td>{trans.categories}</td>
            </tr>
        {/each}
    </tbody>
    <tfoot>
        <tr>
            <th />
            <td><strong>{formatter.format(getTotalAmount())}</strong></td>
            <td />
            <td />
        </tr>
    </tfoot>
</table>

