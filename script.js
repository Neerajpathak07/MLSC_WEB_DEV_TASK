// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or use default
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Auth Modal Functionality
const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const closeModal = document.getElementById('close-modal');
const toggleToSignup = document.getElementById('toggle-to-signup');
const toggleToLogin = document.getElementById('toggle-to-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const modalTitle = document.getElementById('modal-title');

// Open modal
authBtn.addEventListener('click', function() {
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close modal
closeModal.addEventListener('click', function() {
    authModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Toggle between login and signup forms
toggleToSignup.addEventListener('click', function() {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    modalTitle.textContent = 'Sign Up';
});

toggleToLogin.addEventListener('click', function() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    modalTitle.textContent = 'Login';
});

// Form Validation
// Login form validation
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Email validation
    const loginEmail = document.getElementById('login-email');
    const loginEmailError = document.getElementById('login-email-error');
    if (!validateEmail(loginEmail.value)) {
        loginEmailError.style.display = 'block';
        isValid = false;
    } else {
        loginEmailError.style.display = 'none';
    }

    // Password validation
    const loginPassword = document.getElementById('login-password');
    const loginPasswordError = document.getElementById('login-password-error');
    if (loginPassword.value.length < 6) {
        loginPasswordError.style.display = 'block';
        isValid = false;
    } else {
        loginPasswordError.style.display = 'none';
    }

    if (isValid) {
        alert('Login successful!');
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        loginForm.reset();
    }
});

// Signup form validation
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const signupName = document.getElementById('signup-name');
    const signupNameError = document.getElementById('signup-name-error');
    if (signupName.value.trim() === '') {
        signupNameError.style.display = 'block';
        isValid = false;
    } else {
        signupNameError.style.display = 'none';
    }

    // Email validation
    const signupEmail = document.getElementById('signup-email');
    const signupEmailError = document.getElementById('signup-email-error');
    if (!validateEmail(signupEmail.value)) {
        signupEmailError.style.display = 'block';
        isValid = false;
    } else {
        signupEmailError.style.display = 'none';
    }

    // Password validation
    const signupPassword = document.getElementById('signup-password');
    const signupPasswordError = document.getElementById('signup-password-error');
    if (signupPassword.value.length < 6) {
        signupPasswordError.style.display = 'block';
        isValid = false;
    } else {
        signupPasswordError.style.display = 'none';
    }

    // Confirm password validation
    const signupConfirmPassword = document.getElementById('signup-confirm-password');
    const signupConfirmPasswordError = document.getElementById('signup-confirm-password-error');
    if (signupPassword.value !== signupConfirmPassword.value) {
        signupConfirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        signupConfirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        alert('Account created successfully!');
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        signupForm.reset();
        // Switch back to login form
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        modalTitle.textContent = 'Login';
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === authModal) {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Debugging helper
console.log('Script loaded successfully!');