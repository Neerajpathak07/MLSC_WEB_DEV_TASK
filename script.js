// ======== THEME TOGGLE ========
// ======== THEME TOGGLE WITH ICON SWITCH ========
const toggleBtn = document.getElementById("theme-toggle");

// Function to set theme and icon
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// Check saved theme on page load
const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

// Add toggle event
toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});


// ======== SLIDER ========
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const totalSlides = slides.length;

document.querySelector(".arrow.left").addEventListener("click", () => {
  currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
  updateSlide();
});

document.querySelector(".arrow.right").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
});

function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// ======== CART COUNTER MOCK ========
let count = 0;
const cartCount = document.getElementById("cart-count");

document.getElementById("login-btn").addEventListener("click", () => {
  count++;
  cartCount.textContent = count;
});
