// validate.js

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('myForm').addEventListener('submit', function (e) {
    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validate Name
    if (name.trim() === '') {
      isValid = false;
      document.getElementById('nameError').textContent = 'Name is required';
    }

    // Validate Email
    if (!isValidEmail(email)) {
      isValid = false;
      document.getElementById('emailError').textContent = 'Invalid email format';
    }

    // Validate Password
    if (password.length < 8) {
      isValid = false;
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
    }

    // Prevent form submission if validation fails
    if (!isValid) {
      e.preventDefault();
    }
  });

  function isValidEmail(email) {
    // A basic email validation regex
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }
});
