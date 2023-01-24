<h2>Add expense</h2>
<form action="?/new" method="POST">

  <!-- Markup example 2: input is after label -->
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>

  <label for="date">Date</label>
  <input type="date" id="transaction_date" name="transaction_date" required>

  <label for="amount">Amount</label>
  <input type="number" step="0.01" id="amount" name="amount" required>

  <!-- Button -->
  <button type="submit">Submit</button>

</form>

