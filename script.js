// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Form Toggle and Validation
const authForm = document.getElementById('authForm');
const toggleFormBtn = document.getElementById('toggleForm');
const modalTitle = document.getElementById('modalTitle');
const nameGroup = document.getElementById('nameGroup');
const confirmGroup = document.getElementById('confirmGroup');

let isSignupMode = false;

// Toggle between sign in and sign up
toggleFormBtn.addEventListener('click', function() {
    isSignupMode = !isSignupMode;
    
    if (isSignupMode) {
        modalTitle.textContent = 'Create account';
        toggleFormBtn.textContent = 'Already have an account? Sign in';
        nameGroup.style.display = 'block';
        confirmGroup.style.display = 'block';
    } else {
        modalTitle.textContent = 'Sign In';
        toggleFormBtn.textContent = 'Create your account';
        nameGroup.style.display = 'none';
        confirmGroup.style.display = 'none';
    }
    
    resetFormValidation();
});

// Form submission with validation
authForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let isValid = true;
    
    // Validate name (only in signup mode)
    if (isSignupMode) {
        if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters');
            isValid = false;
        } else {
            clearError('name');
        }
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError('email');
    }
    
    // Validate password
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters');
        isValid = false;
    } else {
        clearError('password');
    }
    
    // Validate confirm password (only in signup mode)
    if (isSignupMode) {
        if (password !== confirmPassword) {
            showError('confirm', 'Passwords do not match');
            isValid = false;
        } else {
            clearError('confirm');
        }
    }
    
    // If all validations pass
    if (isValid) {
        const message = isSignupMode ? 'Account created successfully!' : 'Signed in successfully!';
        alert(message);
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        modal.hide();
        
        // Reset form
        authForm.reset();
        resetFormValidation();
    }
});

// Show error message
function showError(fieldName, message) {
    const input = document.getElementById(fieldName === 'confirm' ? 'confirmPassword' : fieldName);
    const errorDiv = document.getElementById(fieldName + 'Error');
    
    input.classList.add('is-invalid');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

// Clear error message
function clearError(fieldName) {
    const input = document.getElementById(fieldName === 'confirm' ? 'confirmPassword' : fieldName);
    const errorDiv = document.getElementById(fieldName + 'Error');
    
    input.classList.remove('is-invalid');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
}

// Reset all form validation states
function resetFormValidation() {
    authForm.reset();
    const inputs = authForm.querySelectorAll('.form-control');
    inputs.forEach(function(input) {
        input.classList.remove('is-invalid');
    });
    
    const errors = authForm.querySelectorAll('.invalid-feedback');
    errors.forEach(function(error) {
        error.textContent = '';
        error.style.display = 'none';
    });
}