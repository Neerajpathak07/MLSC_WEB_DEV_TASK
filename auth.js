// ===== Theme Toggle Functionality =====
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeSwitch.checked = true;
}

// Theme toggle event listener
themeSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});

// ===== Form Toggle Functionality =====
const loginFormContainer = document.getElementById('loginFormContainer');
const signupFormContainer = document.getElementById('signupFormContainer');
const showSignupBtn = document.getElementById('showSignup');
const showLoginBtn = document.getElementById('showLogin');

// Switch to signup form
showSignupBtn.addEventListener('click', () => {
    loginFormContainer.classList.remove('active');
    signupFormContainer.classList.add('active');
});

// Switch to login form
showLoginBtn.addEventListener('click', () => {
    signupFormContainer.classList.remove('active');
    loginFormContainer.classList.add('active');
});

// ===== Form Validation Functions =====

// Email/Phone validation
function validateEmailOrPhone(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
}

// Name validation
function validateName(name) {
    return name.trim().length >= 2;
}

// Password validation
function validatePassword(password) {
    return password.length >= 6;
}

// Show error message
function showError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add('invalid');
    error.textContent = message;
    error.classList.add('show');
}

// Hide error message
function hideError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove('invalid');
    error.classList.remove('show');
}

// ===== Login Form Validation =====
const loginForm = document.getElementById('loginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

// Real-time validation for login email
loginEmail.addEventListener('input', () => {
    if (loginEmail.value.trim() === '') {
        hideError('loginEmail', 'loginEmailError');
    } else if (!validateEmailOrPhone(loginEmail.value)) {
        showError('loginEmail', 'loginEmailError', 'Please enter a valid email or 10-digit phone number');
    } else {
        hideError('loginEmail', 'loginEmailError');
    }
});

// Real-time validation for login password
loginPassword.addEventListener('input', () => {
    if (loginPassword.value === '') {
        hideError('loginPassword', 'loginPasswordError');
    } else if (!validatePassword(loginPassword.value)) {
        showError('loginPassword', 'loginPasswordError', 'Password must be at least 6 characters');
    } else {
        hideError('loginPassword', 'loginPasswordError');
    }
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate email
    if (loginEmail.value.trim() === '') {
        showError('loginEmail', 'loginEmailError', 'Please enter your email or phone number');
        isValid = false;
    } else if (!validateEmailOrPhone(loginEmail.value)) {
        showError('loginEmail', 'loginEmailError', 'Please enter a valid email or 10-digit phone number');
        isValid = false;
    } else {
        hideError('loginEmail', 'loginEmailError');
    }

    // Validate password
    if (loginPassword.value === '') {
        showError('loginPassword', 'loginPasswordError', 'Please enter your password');
        isValid = false;
    } else if (!validatePassword(loginPassword.value)) {
        showError('loginPassword', 'loginPasswordError', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        hideError('loginPassword', 'loginPasswordError');
    }

    if (isValid) {
        // Store user info in session storage
        const userName = loginEmail.value.includes('@') 
            ? loginEmail.value.split('@')[0] 
            : loginEmail.value;
        
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userName', userName);
        
        // Redirect to main page
        window.location.href = 'index.html';
    }
});

// ===== Signup Form Validation =====
const signupForm = document.getElementById('signupForm');
const signupName = document.getElementById('signupName');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const signupConfirmPassword = document.getElementById('signupConfirmPassword');

// Real-time validation for signup name
signupName.addEventListener('input', () => {
    if (signupName.value.trim() === '') {
        hideError('signupName', 'signupNameError');
    } else if (!validateName(signupName.value)) {
        showError('signupName', 'signupNameError', 'Name must be at least 2 characters');
    } else {
        hideError('signupName', 'signupNameError');
    }
});

// Real-time validation for signup email
signupEmail.addEventListener('input', () => {
    if (signupEmail.value.trim() === '') {
        hideError('signupEmail', 'signupEmailError');
    } else if (!validateEmailOrPhone(signupEmail.value)) {
        showError('signupEmail', 'signupEmailError', 'Please enter a valid email or 10-digit phone number');
    } else {
        hideError('signupEmail', 'signupEmailError');
    }
});

// Real-time validation for signup password
signupPassword.addEventListener('input', () => {
    if (signupPassword.value === '') {
        hideError('signupPassword', 'signupPasswordError');
    } else if (!validatePassword(signupPassword.value)) {
        showError('signupPassword', 'signupPasswordError', 'Password must be at least 6 characters');
    } else {
        hideError('signupPassword', 'signupPasswordError');
    }
    
    // Also validate confirm password if it has a value
    if (signupConfirmPassword.value !== '') {
        if (signupPassword.value !== signupConfirmPassword.value) {
            showError('signupConfirmPassword', 'signupConfirmPasswordError', 'Passwords do not match');
        } else {
            hideError('signupConfirmPassword', 'signupConfirmPasswordError');
        }
    }
});

// Real-time validation for confirm password
signupConfirmPassword.addEventListener('input', () => {
    if (signupConfirmPassword.value === '') {
        hideError('signupConfirmPassword', 'signupConfirmPasswordError');
    } else if (signupPassword.value !== signupConfirmPassword.value) {
        showError('signupConfirmPassword', 'signupConfirmPasswordError', 'Passwords do not match');
    } else {
        hideError('signupConfirmPassword', 'signupConfirmPasswordError');
    }
});

// Signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate name
    if (signupName.value.trim() === '') {
        showError('signupName', 'signupNameError', 'Please enter your name');
        isValid = false;
    } else if (!validateName(signupName.value)) {
        showError('signupName', 'signupNameError', 'Name must be at least 2 characters');
        isValid = false;
    } else {
        hideError('signupName', 'signupNameError');
    }

    // Validate email
    if (signupEmail.value.trim() === '') {
        showError('signupEmail', 'signupEmailError', 'Please enter your email or phone number');
        isValid = false;
    } else if (!validateEmailOrPhone(signupEmail.value)) {
        showError('signupEmail', 'signupEmailError', 'Please enter a valid email or 10-digit phone number');
        isValid = false;
    } else {
        hideError('signupEmail', 'signupEmailError');
    }

    // Validate password
    if (signupPassword.value === '') {
        showError('signupPassword', 'signupPasswordError', 'Please enter a password');
        isValid = false;
    } else if (!validatePassword(signupPassword.value)) {
        showError('signupPassword', 'signupPasswordError', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        hideError('signupPassword', 'signupPasswordError');
    }

    // Validate confirm password
    if (signupConfirmPassword.value === '') {
        showError('signupConfirmPassword', 'signupConfirmPasswordError', 'Please re-enter your password');
        isValid = false;
    } else if (signupPassword.value !== signupConfirmPassword.value) {
        showError('signupConfirmPassword', 'signupConfirmPasswordError', 'Passwords do not match');
        isValid = false;
    } else {
        hideError('signupConfirmPassword', 'signupConfirmPasswordError');
    }

    if (isValid) {
        // Store user info in session storage
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userName', signupName.value);
        
        // Redirect to main page
        window.location.href = 'index.html';
    }
});

console.log('Amazon authentication page loaded successfully!');
