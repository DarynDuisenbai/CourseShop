const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const usernameError = document.getElementById('usernameError');
      const passwordError = document.getElementById('passwordError');
      const submitButton = document.getElementById('submitButton');

      submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;

        if (usernameInput.value.trim() === '') {
          usernameError.textContent = 'Username is required';
          usernameError.style.color = 'white';
          isValid = false;
        } else {
          usernameError.textContent = 'OK';
        }

        if (passwordInput.value.trim() === '') {
          passwordError.textContent = 'Password is required';
          passwordError.style.color = 'white';
          isValid = false;
        } else {
          passwordError.textContent = 'OK';
        }

        if (isValid) {
          // Submit the form
          alert('Form submitted successfully');
        }
      });