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

// Helper function to show/hide error messages
const show_error = (input, message) => {
    const error_element = document.getElementById(`${input.id}-error`);
    error_element.textContent = message;
    error_element.style.display = 'block';
};

const hide_error = (input) => {
    const error_element = document.getElementById(`${input.id}-error`);
    error_element.style.display = 'none';
};

// Form Validation
// Login form validation
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const loginEmail = document.getElementById('login-email');
    if (loginEmail.value.trim() === '') {
        show_error(loginEmail, 'Email is required.');
        isValid = false;
    } else if (!validateEmail(loginEmail.value)) {
        show_error(loginEmail, 'Please enter a valid email.');
        isValid = false;
    } else {
        hide_error(loginEmail);
    }

    const loginPassword = document.getElementById('login-password');
    if (loginPassword.value.length < 6) {
        show_error(loginPassword, 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        hide_error(loginPassword);
    }

    if (isValid) {
        // Replace alert with a success message in the UI
        const formFooter = loginForm.querySelector('.form-footer');
        formFooter.innerHTML = '<p style="color: green;">Login successful!</p>';
        setTimeout(() => {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            loginForm.reset();
            formFooter.innerHTML = `<p>Don't have an account? <span class="toggle-form" id="toggle-to-signup">Sign Up</span></p>`;
        }, 2000);
    }
});

// Signup form validation
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    const signupName = document.getElementById('signup-name');
    if (signupName.value.trim() === '') {
        show_error(signupName, 'Full Name is required.');
        isValid = false;
    } else {
        hide_error(signupName);
    }

    const signupEmail = document.getElementById('signup-email');
    if (signupEmail.value.trim() === '') {
        show_error(signupEmail, 'Email is required.');
        isValid = false;
    } else if (!validateEmail(signupEmail.value)) {
        show_error(signupEmail, 'Please enter a valid email.');
        isValid = false;
    } else {
        hide_error(signupEmail);
    }

    const signupPassword = document.getElementById('signup-password');
    if (signupPassword.value.length < 6) {
        show_error(signupPassword, 'Password must be at least 6 characters.');
        isValid = false;
    } else {
        hide_error(signupPassword);
    }

    const signupConfirmPassword = document.getElementById('signup-confirm-password');
    if (signupPassword.value !== signupConfirmPassword.value) {
        show_error(signupConfirmPassword, 'Passwords do not match.');
        isValid = false;
    } else {
        hide_error(signupConfirmPassword);
    }

    if (isValid) {
        const formFooter = signupForm.querySelector('.form-footer');
        formFooter.innerHTML = '<p style="color: green;">Account created successfully!</p>';
        setTimeout(() => {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            signupForm.reset();
            formFooter.innerHTML = `<p>Already have an account? <span class="toggle-form" id="toggle-to-login">Login</span></p>`;
            // Switch back to login form
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
            modalTitle.textContent = 'Login';
        }, 2000);
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^S@]+@[^S@]+\.[^S@]+$/;
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
