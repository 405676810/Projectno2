// This file contains the JavaScript functionality for the sign-up form. 
// It validates the password requirements and changes the color of the instructions 
// based on whether the user meets the criteria. It also handles the transition 
// to the login page when the user clicks on the "Already have an account?" link.

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const instructions = document.getElementById('instructions');
    const signupForm = document.getElementById('signup-form');
    const loginLink = document.getElementById('login-link');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        if (password.length < 8) {
            instructions.textContent = 'Password must be at least 8 characters long.';
            instructions.style.color = 'red';
        } else if (!/[A-Z]/.test(password)) {
            instructions.textContent = 'Password must contain at least one uppercase letter.';
            instructions.style.color = 'red';
        } else if (!/[0-9]/.test(password)) {
            instructions.textContent = 'Password must contain at least one number.';
            instructions.style.color = 'red';
        } else {
            instructions.textContent = 'Password is strong.';
            instructions.style.color = 'green';
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add sign-up logic here
        alert('Sign-up successful!');
    });

    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'login.html'; // Change to the actual login page URL
    });
});