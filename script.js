// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    
    // ======== 1. THEME TOGGLE FUNCTIONALITY ========
    const themeToggle = document.getElementById("theme-toggle-checkbox");
    const body = document.body;

    // Function to apply the saved theme on load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark-mode");
            themeToggle.checked = true;
        } else {
            body.classList.remove("dark-mode");
            themeToggle.checked = false;
        }
    };

    // Event listener for the toggle switch
    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });

    // Apply theme on initial page load
    applySavedTheme();


    // ======== 2. LOGIN MODAL FUNCTIONALITY ========
    const modal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginModalBtn");
    const closeBtn = document.querySelector(".close-btn");

    // Show the modal when the "Login" button is clicked
    loginBtn.onclick = () => {
        modal.style.display = "block";
    };

    // Hide the modal when the "X" (close) button is clicked
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // Hide the modal if the user clicks anywhere outside of the modal content
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    // ======== 3. FORM VALIDATION FUNCTIONALITY ========
    const loginForm = document.getElementById("loginForm");
    const formError = document.getElementById("formError");
    
    loginForm.addEventListener("submit", (event) => {
        // Prevent the form from submitting the traditional way
        event.preventDefault();

        // Clear any previous errors
        formError.textContent = "";

        // Get form values
        const email = loginForm.email.value.trim();
        const password = loginForm.password.value.trim();
        
        // Custom Validation Logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "" || password === "") {
            formError.textContent = "Please fill in all fields.";
            return; // Stop execution
        }
        
        if (!emailRegex.test(email)) {
            formError.textContent = "Please enter a valid email address.";
            return;
        }

        if (password.length < 8) {
            formError.textContent = "Password must be at least 8 characters long.";
            return;
        }

        // If all validation passes:
        console.log("Form submitted successfully!");
        console.log("Email:", email, "Password:", password);
        
        alert("Login successful! (Check the console for details)");
        
        // Hide the modal and reset the form
        modal.style.display = "none";
        loginForm.reset();
    });

});