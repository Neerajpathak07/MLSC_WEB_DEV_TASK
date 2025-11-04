// ===== Check Authentication =====
// Redirect to login if not authenticated
if (!sessionStorage.getItem('isLoggedIn')) {
    window.location.href = 'login.html';
}

// Display user name
const userName = sessionStorage.getItem('userName') || 'User';
const userNameElement = document.getElementById('userName');
if (userNameElement) {
    userNameElement.textContent = userName;
}

// ===== Logout Functionality =====
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm('Are you sure you want to sign out?')) {
            sessionStorage.clear();
            window.location.href = 'login.html';
        }
    });
}

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

// ===== Hero Carousel Navigation =====
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');

heroPrev.addEventListener('click', () => {
    // Simulate carousel navigation
    console.log('Previous slide');
});

heroNext.addEventListener('click', () => {
    // Simulate carousel navigation
    console.log('Next slide');
});

// ===== Smooth scroll to top =====
document.querySelector('.footer-back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Shopping cart functionality =====
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

// Add to cart functionality (can be attached to product cards)
function addToCart() {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Add animation
    cartCountElement.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

// Example: Add click listeners to product cards (optional)
document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('click', () => {
        addToCart();
    });
});

// ===== Keyboard accessibility =====
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    console.log('Mobile menu toggle');
    // Can be expanded for mobile menu functionality
});

console.log('Amazon-style landing page loaded successfully!');
