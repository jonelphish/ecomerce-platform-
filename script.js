document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // to Check if username and password are not empty
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return;
      }
  
      // Save user data to local storage
      localStorage.setItem(username, JSON.stringify({ username, password }));
      alert('User data saved to local storage.');
  
      // Redirect to homepage or any other page
      window.location.href = 'homepage.html';
    });
  });
  