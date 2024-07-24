// Toggle password visibility for password field
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', passwordType);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

// Login form submission handling
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Hardcoded credentials for demonstration
    const email = 'yuvi14486@gmail.com';
    const password = '@yuvi123';
    
    // Retrieve input values
    const inputEmail = document.getElementById('email').value;
    const inputPassword = document.getElementById('password').value;
    
    // Check if credentials match
    if (inputEmail === email && inputPassword === password) {
        // Redirect to welcome page
        window.location.href = 'welcome.html';
    } else {
        // Show error message
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Incorrect email or password. Please try again.';
        errorMessage.style.display = 'block';
    }
});

// Toggle password visibility for confirm password field (in case of register.html)
document.getElementById('toggleConfirmPassword').addEventListener('click', function () {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordType = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInput.setAttribute('type', confirmPasswordType);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});
