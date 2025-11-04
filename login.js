const form = document.getElementById('auth-form');
const formTitle = document.getElementById('form-title');
const toggleLink = document.getElementById('toggle-link');
const submitBtn = document.getElementById('submit-btn');
const nameGroup = document.getElementById('name-group');
const confirmGroup = document.getElementById('confirm-group');

let isLogin = true;

// 🟦 Toggle between Login and Signup
toggleLink.addEventListener('click', (e) => {
  e.preventDefault();
  isLogin = !isLogin;

  if (!isLogin) {
    formTitle.textContent = "Sign Up";
    submitBtn.textContent = "Create Account";
    toggleLink.textContent = "Login";
    nameGroup.style.display = "block";
    confirmGroup.style.display = "block";
  } else {
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleLink.textContent = "Sign up";
    nameGroup.style.display = "none";
    confirmGroup.style.display = "none";
  }
});

// 🟩 Form validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Please fill all required fields!");
    return;
  }

  if (!isLogin) {
    const name = document.getElementById('name').value.trim();
    const confirm = document.getElementById('confirm').value.trim();

    if (!name || !confirm) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Account created for ${name}!`);
  } else {
    alert(`Welcome back! Logged in successfully.`);
  }

  // Redirect after successful form validation
  window.location.href = "index.html";
});


const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme", themeSwitch.checked);
  localStorage.setItem("theme", themeSwitch.checked ? "dark" : "light");
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }
});
