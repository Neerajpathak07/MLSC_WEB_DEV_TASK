// ==================== Theme Toggle (Immediate) ====================
// This part runs immediately to set the theme and prevent a "flash"
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);


// ==================== Main App (On DOM Load) ====================
// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {

    // ==================== Theme Toggle Listener ====================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ==================== Modal Functions ====================
    const authModal = document.getElementById('authModal');
    const authBtn = document.getElementById('authBtn');
    const closeModal = document.getElementById('closeModal');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    function closeModalAction() {
        authModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (authBtn) {
        authBtn.addEventListener('click', () => {
            authModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalAction);
    }
    
    if (authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                closeModalAction();
            }
        });
    }

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === targetTab + 'Form') {
                    form.classList.add('active');
                }
            });
        });
    });

    // ==================== Password Toggle ====================
    const passwordToggles = document.querySelectorAll('.password-toggle');

    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetId = toggle.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            
            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                toggle.textContent = '👁️‍🗨️';
            } else {
                targetInput.type = 'password';
                toggle.textContent = '👁️';
            }
        });
    });

    // ==================== Form Validation ====================
    const validators = {
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address',
        phone: (value) => /^[6-9]\d{9}$/.test(value) ? '' : 'Please enter a valid 10-digit phone number',
        password: (value) => {
            if (value.length < 8) return 'Password must be at least 8 characters';
            if (!/[A-Z]/.test(value)) return 'Password must contain an uppercase letter';
            if (!/[a-z]/.test(value)) return 'Password must contain a lowercase letter';
            if (!/[0-9]/.test(value)) return 'Password must contain a number';
            return '';
        },
        name: (value) => value.trim().length >= 2 ? '' : 'Name must be at least 2 characters',
        required: (value) => value.trim() !== '' ? '' : 'This field is required'
    };

    function setupValidation(form) {
        if (!form) return;
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) validateField(input);
            });
        });
    }

    function validateField(input) {
        const value = input.value;
        const name = input.name;
        const errorElement = input.parentElement.querySelector('.error-message') || 
                                input.parentElement.parentElement.querySelector('.error-message');
        let errorMessage = '';

        if (name === 'email') errorMessage = validators.required(value) || (value && validators.email(value));
        else if (name === 'phone') errorMessage = validators.required(value) || (value && validators.phone(value));
        else if (name === 'password' && input.id === 'signupPassword') errorMessage = validators.required(value) || (value && validators.password(value));
        else if (name === 'name') errorMessage = validators.required(value) || (value && validators.name(value));
        else if (input.required && !value) errorMessage = validators.required(value);
        
        if (name === 'confirmPassword') {
            const passwordInput = document.getElementById('signupPassword');
            if (passwordInput && value !== passwordInput.value) errorMessage = 'Passwords do not match';
        }
        
        if (errorMessage) {
            input.classList.add('error');
            input.classList.remove('success');
            if (errorElement) errorElement.textContent = errorMessage;
            return false;
        } else {
            input.classList.remove('error');
            if (value) input.classList.add('success');
            if (errorElement) errorElement.textContent = '';
            return true;
        }
    }

    function validateForm(form) {
        const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) isValid = false;
        });
        
        const termsCheckbox = form.querySelector('input[name="terms"]');
        if (termsCheckbox && !termsCheckbox.checked) {
            alert('Please accept the Terms & Conditions');
            isValid = false;
        }
        return isValid;
    }

    setupValidation(document.getElementById('loginForm'));
    setupValidation(document.getElementById('signupForm'));

    // ==================== Form Submission ====================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(e.target)) return;
            console.log('Login data:', Object.fromEntries(new FormData(e.target)));
            showNotification('Login successful! Welcome back.', 'success');
            setTimeout(() => {
                closeModalAction();
                e.target.reset();
            }, 1500);
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(e.target)) return;
            const data = Object.fromEntries(new FormData(e.target));
            delete data.confirmPassword;
            console.log('Signup data:', data);
            showNotification('Account created successfully! Please check your email.', 'success');
            setTimeout(() => {
                closeModalAction();
                e.target.reset();
            }, 2000);
        });
    }

    // ==================== Notification System ====================
    function showNotification(message, type = 'info') {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '12px',
            background: type === 'success' ? 'var(--success)' : 'var(--primary-color)',
            color: type === 'success' ? 'white' : 'var(--secondary-color)',
            fontWeight: '600',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            animation: 'slideInRight 0.4s ease',
            maxWidth: '300px'
        });
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.4s ease';
            setTimeout(() => notification.remove(), 400);
        }, 3000);
    }

    if (!document.getElementById('notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = `
            @keyframes slideInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
            @keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(100px); } }
        `;
        document.head.appendChild(styleSheet);
    }

    // ==================== Hero Slider (NEW) ====================
    const sliderTrack = document.querySelector('.hero-slider-track');
    const nextButton = document.getElementById('heroNextBtn');
    const prevButton = document.getElementById('heroPrevBtn');

    if (sliderTrack && nextButton && prevButton) {
        const slides = Array.from(sliderTrack.children);
        const slideCount = slides.length;
        let currentSlide = 0;

        const updateSliderPosition = (targetSlide) => {
            // Calculate the percentage to move the track
            // e.g., slide 1 (index 1) = 1 * (100 / 3) = 33.333%
            const movePercentage = targetSlide * (100 / slideCount);
            sliderTrack.style.transform = `translateX(-${movePercentage}%)`;
            currentSlide = targetSlide;

            // Update button states
            prevButton.disabled = (targetSlide === 0);
            nextButton.disabled = (targetSlide === slideCount - 1);
        };

        // Initialize slider state
        updateSliderPosition(0);

        // Next button click
        nextButton.addEventListener('click', () => {
            if (currentSlide < slideCount - 1) {
                updateSliderPosition(currentSlide + 1);
            }
        });

        // Previous button click
        prevButton.addEventListener('click', () => {
            if (currentSlide > 0) {
                updateSliderPosition(currentSlide - 1);
            }
        });
    }

    // ==================== Cart Functionality ====================
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');

    function updateCart(change) {
        if (!cartCountElement) return;
        cartCount += change;
        cartCountElement.textContent = cartCount;
        
        if (change > 0) {
            cartCountElement.style.animation = 'none';
            setTimeout(() => {
                cartCountElement.style.animation = 'bounce 0.5s ease';
            }, 10);
        }
    }

    if (!document.getElementById('bounce-style')) {
        const bounceStyle = document.createElement('style');
        bounceStyle.id = 'bounce-style';
        bounceStyle.textContent = `@keyframes bounce { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.3); } }`;
        document.head.appendChild(bounceStyle);
    }

    // This selector now works for both category items AND the new hero CTA buttons
    document.querySelectorAll('.category-item, .hero-cta').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); 
            updateCart(1);
            showNotification('Item added to cart!', 'success');
        });
    });

    // ==================== Back to Top ====================
    const backToTopBtn = document.querySelector('.footer-top-link');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==================== Lazy Loading Animation ====================
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });

    console.log('🛍️ ShopHub initialized successfully!');

}); // End of DOMContentLoaded