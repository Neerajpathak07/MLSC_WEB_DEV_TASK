// DOM Elements
const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.querySelector('.theme-label');
const loginBtn = document.getElementById('loginBtn');
const authModal = document.getElementById('authModal');
const closeModal = document.querySelector('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const switchLinks = document.querySelectorAll('.switch-link');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        themeSwitch.checked = this.currentTheme === 'dark';
        themeSwitch.addEventListener('change', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeLabel.textContent = theme === 'light' ? '🌙' : '☀️';
        
        // Smooth transition for theme change
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}

// Form Validation
class FormValidator {
    constructor() {
        this.patterns = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
            name: /^[a-zA-Z\s]{2,50}$/
        };
    }

    validateEmail(email) {
        if (!email) return 'Email is required';
        if (!this.patterns.email.test(email)) return 'Please enter a valid email';
        return '';
    }

    validatePassword(password) {
        if (!password) return 'Password is required';
        if (password.length < 8) return 'Password must be at least 8 characters';
        if (!this.patterns.password.test(password)) {
            return 'Password must contain uppercase, lowercase, and number';
        }
        return '';
    }

    validateName(name) {
        if (!name) return 'Name is required';
        if (!this.patterns.name.test(name)) return 'Please enter a valid name';
        return '';
    }

    validateConfirmPassword(password, confirmPassword) {
        if (!confirmPassword) return 'Please confirm your password';
        if (password !== confirmPassword) return 'Passwords do not match';
        return '';
    }

    showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        const inputElement = errorElement.previousElementSibling.previousElementSibling;
        
        errorElement.textContent = message;
        if (message) {
            inputElement.style.borderColor = '#e74c3c';
        } else {
            inputElement.style.borderColor = '#28a745';
        }
    }

    clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        const inputElements = document.querySelectorAll('.form-group input');
        
        errorElements.forEach(el => el.textContent = '');
        inputElements.forEach(el => el.style.borderColor = 'var(--border-color)');
    }
}

// Modal Management
class ModalManager {
    constructor() {
        this.init();
    }

    init() {
        loginBtn.addEventListener('click', () => this.openModal());
        closeModal.addEventListener('click', () => this.closeModal());
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) this.closeModal();
        });

        // Tab switching
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Switch links
        switchLinks.forEach(link => {
            link.addEventListener('click', () => this.switchTab(link.dataset.tab));
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && authModal.style.display === 'block') {
                this.closeModal();
            }
        });
    }

    openModal() {
        authModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        setTimeout(() => {
            const activeForm = document.querySelector('.auth-form.active');
            const firstInput = activeForm.querySelector('input');
            firstInput.focus();
        }, 100);
    }

    closeModal() {
        authModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        validator.clearErrors();
    }

    switchTab(tabName) {
        // Update tab buttons
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Update forms
        authForms.forEach(form => {
            form.classList.toggle('active', form.id === `${tabName}Form`);
        });

        validator.clearErrors();
    }
}

// Authentication Management
class AuthManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.init();
    }

    init() {
        this.updateUI();
        
        // Form submissions
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignup();
        });

        // Real-time validation
        this.setupRealTimeValidation();
    }

    setupRealTimeValidation() {
        const inputs = document.querySelectorAll('.form-group input');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(input) {
        const fieldName = input.id.replace('login', '').replace('signup', '').toLowerCase();
        let errorMessage = '';

        switch (fieldName) {
            case 'email':
                errorMessage = validator.validateEmail(input.value);
                break;
            case 'password':
                errorMessage = validator.validatePassword(input.value);
                break;
            case 'name':
                errorMessage = validator.validateName(input.value);
                break;
            case 'confirmpassword':
                const password = document.getElementById('signupPassword').value;
                errorMessage = validator.validateConfirmPassword(password, input.value);
                break;
        }

        const errorElementId = input.id + 'Error';
        validator.showError(errorElementId, errorMessage);
        input.classList.toggle('error', !!errorMessage);
        
        return !errorMessage;
    }

    handleLogin() {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Validate fields
        const emailValid = this.validateField(document.getElementById('loginEmail'));
        const passwordValid = this.validateField(document.getElementById('loginPassword'));

        if (!emailValid || !passwordValid) return;

        // Check credentials
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.updateUI();
            modalManager.closeModal();
            this.showNotification('Login successful!', 'success');
        } else {
            validator.showError('loginPasswordError', 'Invalid email or password');
        }
    }

    handleSignup() {
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validate all fields
        const nameValid = this.validateField(document.getElementById('signupName'));
        const emailValid = this.validateField(document.getElementById('signupEmail'));
        const passwordValid = this.validateField(document.getElementById('signupPassword'));
        const confirmValid = this.validateField(document.getElementById('confirmPassword'));

        if (!nameValid || !emailValid || !passwordValid || !confirmValid) return;

        // Check if user already exists
        if (this.users.find(u => u.email === email)) {
            validator.showError('signupEmailError', 'Email already registered');
            return;
        }

        // Create new user
        const newUser = { name, email, password, id: Date.now() };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        this.updateUI();
        modalManager.closeModal();
        this.showNotification('Account created successfully!', 'success');
    }

    updateUI() {
        if (this.currentUser) {
            loginBtn.textContent = `Hi, ${this.currentUser.name.split(' ')[0]}`;
            loginBtn.onclick = () => this.logout();
        } else {
            loginBtn.textContent = 'Sign In';
            loginBtn.onclick = () => modalManager.openModal();
        }
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateUI();
        this.showNotification('Logged out successfully!', 'info');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
            zIndex: '3000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'success' ? '#28a745' : 
                           type === 'error' ? '#dc3545' : '#17a2b8'
        });

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Shopping Cart Management
class CartManager {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.updateCartUI();
    }

    addItem(item) {
        this.items.push(item);
        localStorage.setItem('cartItems', JSON.stringify(this.items));
        this.updateCartUI();
    }

    updateCartUI() {
        const cartCount = document.querySelector('.cart-count');
        cartCount.textContent = this.items.length;
        
        if (this.items.length > 0) {
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }
}

// Search Functionality
class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search-bar input');
        this.searchBtn = document.querySelector('.search-btn');
        this.init();
    }

    init() {
        this.searchBtn.addEventListener('click', () => this.performSearch());
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });

        // Search suggestions (mock data)
        this.searchInput.addEventListener('input', (e) => {
            this.showSuggestions(e.target.value);
        });
    }

    performSearch() {
        const query = this.searchInput.value.trim();
        if (query) {
            authManager.showNotification(`Searching for: ${query}`, 'info');
            // Here you would typically make an API call
            console.log('Searching for:', query);
        }
    }

    showSuggestions(query) {
        // Mock search suggestions
        if (query.length > 2) {
            console.log('Showing suggestions for:', query);
            // Implementation for search suggestions dropdown
        }
    }
}

// Initialize all managers
const themeManager = new ThemeManager();
const validator = new FormValidator();
const modalManager = new ModalManager();
const authManager = new AuthManager();
const cartManager = new CartManager();
const searchManager = new SearchManager();

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            if (target.startsWith('#')) {
                const element = document.querySelector(target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Add hover effects to category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click handlers to CTA buttons
    document.querySelectorAll('.cta-btn, .explore-link').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            authManager.showNotification('Feature coming soon!', 'info');
        });
    });

    // Add loading animation
    const addLoadingAnimation = () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    };

    addLoadingAnimation();
});

// Performance optimization: Lazy loading for images
const observeImages = () => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
};

// Initialize lazy loading if images are present
if (document.querySelectorAll('img[data-src]').length > 0) {
    observeImages();
}