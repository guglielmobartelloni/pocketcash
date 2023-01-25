<h2>Add a transaction</h2>
<form action="?/new" method="POST">
    <!-- Markup example 2: input is after label -->
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />

    <div class="grid">
        <label for="amount"
            >Amount
            <input
                type="number"
                step="0.01"
                id="amount"
                name="amount"
                required
            />
        </label>
        <label for="date"
            >Date
            <input
                type="date"
                id="transaction_date"
                name="transaction_date"
                required
            />
        </label>
    </div>
    <fieldset>
        <legend>Type</legend>
        <label for="expense">
            <input
                type="radio"
                id="expense"
                name="type"
                value="expense"
                checked
            />
            Expense
        </label>
        <label for="income">
            <input type="radio" id="income" name="type" value="income" />
            Income
        </label>
    </fieldset>

    <!-- Button -->
    <button type="submit">Submit</button>
</form>
