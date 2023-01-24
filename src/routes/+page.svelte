<script>
export let data;

let totalAmount = data.transactions.items.map( (it) => it.amount).reduce( (a,b) => a+b, 0)
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
            <td>{new Date(trans.transaction_date).toLocaleDateString('en-US')}</td>
            <td>{trans.name}</td>
            <td>{trans.amount}$</td>
            <td>{trans.categories}</td>
        </tr>
    {/each}
    </tbody>
    <tfoot>
        <tr>
            <th></th>
            <td></td>
            <td>{totalAmount}$</td>
            <td></td>
        </tr>
    </tfoot>
</table>

