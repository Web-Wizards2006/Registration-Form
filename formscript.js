document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission for validation
  
      // Get form values
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('new-password').value;
      const age = document.getElementById('age').value;
      const termsAccepted = document.getElementById('terms-and-conditions').checked;
  
      // Simple validation checks
      if (firstName === '' || lastName === '' || email === '' || password === '') {
        alert('Please fill out all the required fields.');
        return;
      }
  
      if (age < 13 || age > 120) {
        alert('Please enter a valid age between 13 and 120.');
        return;
      }
  
      if (!termsAccepted) {
        alert('You must accept the terms and conditions.');
        return;
      }
  
      // If everything is valid, submit the form
      alert('Registration Successful!');
  
      // Optionally, you can submit the form here if you want to proceed after validation.
      // form.submit(); // Uncomment this line to actually submit the form to the server.
    });
  });
  