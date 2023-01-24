<script>
export let data;
</script>
<table>
    <thead>
        <tr>
            <th scope="col">Created</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Categories</th>
        </tr>
    </thead>
    <tbody>
    {#each data.transactions.items as trans }
        <tr>
            <td>{trans.name}</td>
            <td>{trans.transaction_date}</td>
            <td>{trans.amount}$</td>
            <td>Banana</td>
        </tr>
    {/each}
    </tbody>
    <tfoot>
        <tr>
            <th scope="col">#</th>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
            <td scope="col">Total</td>
        </tr>
    </tfoot>
</table>

