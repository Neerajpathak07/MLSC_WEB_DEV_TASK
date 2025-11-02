// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
  toggleBtn.textContent =
    document.body.dataset.theme === "dark" ? "☀️" : "🌙";
});

// Image slider
const slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide() {
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
  index = (index + 1) % slides.length;
}
showSlide();
setInterval(showSlide, 3000);
// Smooth scroll for navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});