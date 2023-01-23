<h2>Register an account</h2>
<form action="?/register" method="POST">

  <!-- Markup example 2: input is after label -->
  <label for="username">Username</label>
  <input type="text" id="username" name="username" required>

  <label for="email">Email address</label>
  <input type="email" id="email" name="email" required>

  <label for="password">Password</label>
  <input type="password" id="password" name="password" required>

  <label for="passwordConfirm">Confirm Password</label>
  <input type="password" id="passwordConfirm" name="passwordConfirm" required>

  <!-- Button -->
  <button type="submit">Submit</button>

</form>
