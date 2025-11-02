// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.dataset.theme =
      document.body.dataset.theme === "dark" ? "light" : "dark";
    toggleBtn.textContent =
      document.body.dataset.theme === "dark" ? "☀️" : "🌙";
  });
}

// ✅ LOGIN FORM HANDLER
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Simulate successful login
    alert("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "index.html"; // Redirect to landing page
    }, 800);
  });
}

// ✅ SIGNUP FORM HANDLER
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Simulate successful signup
    alert("Signup successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "index.html"; // Redirect to landing page
    }, 800);
  });
}
// ✅ CONTACT FORM HANDLER
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    // Simulate successful contact form submission
    alert("Message sent successfully! Redirecting...");
    setTimeout(() => {
      window.location.href = "index.html"; // Redirect to landing page
    }, 800);
  });
}