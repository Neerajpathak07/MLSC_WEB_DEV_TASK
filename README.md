# MLSC Web Development Task - Solution# MLSC Web Development Task - Solution# MLSC_WEB_DEV_TASK



An Amazon-inspired e-commerce website with complete authentication flow and theme switching capabilities.



## 🎯 Project FlowAn Amazon-inspired e-commerce landing page with authentication features and theme switching capabilities.## Task Description



1. **Login Page (`login.html`)** - Entry point where users must sign in or sign up### 1) Recreate the given landing page:-

2. **Main Landing Page (`index.html`)** - Amazon-style shopping page (accessible only after login)

3. **Authentication Guard** - Automatic redirect to login if not authenticated## 🎯 Features Implemented<img width="1907" height="822" alt="image" src="https://github.com/user-attachments/assets/faea55e5-2971-4c8e-856c-718ae95ef90a" />

4. **Theme Toggle** - Available on both pages for light/dark mode switching



## ✨ Features Implemented

### ✅ Task 1: Landing Page RecreationNOTE:- you can create the UI in which ever techstack you wish

### ✅ Task 1: Landing Page Recreation

- **Responsive Header**: Logo, location selector, search bar, language selector, user account display, and shopping cart- **Responsive Header**: Includes logo, location selector, search bar, language selector, account menu, and shopping cart

- **Navigation Bar**: Horizontal scrollable navigation with multiple category links

- **Hero Section**: Featured product showcase with carousel navigation- **Navigation Bar**: Horizontal scrollable navigation with multiple category links### 2) Make a responsive login/signup form with proper alignment and validation.

- **Product Grid**: Four responsive product category cards with images and links

- **Footer**: Multi-column footer with links and back-to-top button- **Hero Section**: Featured product showcase with carousel navigation  - You can also use CSS Flexbox & form handling.

- **Protected Route**: Only accessible after successful login

- **Product Grid**: Four responsive product category cards with images and links

### ✅ Task 2: Login/Signup Forms with Validation

- **Dedicated Login Page**: Clean, centered authentication page as entry point- **Footer**: Multi-column footer with links and back-to-top button### 3) Add a toggle switch that changes between light and dark themes.

- **Form Switching**: Toggle between login and signup forms

- **Real-time Validation**:   - Utilize JavaScript DOM manipulation functionalities & CSS variables.

  - Email/Phone validation (accepts email format or 10-digit phone numbers)

  - Password strength validation (minimum 6 characters)### ✅ Task 2: Login/Signup Forms

  - Name validation (minimum 2 characters)

  - Password confirmation matching- **Modal-based Authentication**: Clean modal popup for login and signup

- **CSS Flexbox**: Proper form alignment and responsive layout

- **User Feedback**: Visual indicators for invalid inputs with error messages- **Form Validation**: Real-time validation with error messages## How to Submit your Solution?

- **Session Management**: Uses sessionStorage to maintain login state

- **Any Credentials Work**: Any valid format email/phone and password will work  - Email/Phone validation (accepts email format or 10-digit phone numbers)



### ✅ Task 3: Light/Dark Theme Toggle  - Password strength validation (minimum 6 characters)

- **Theme Switcher**: Toggle switch on both login and main pages with sun/moon icons

- **CSS Variables**: Dynamic theming using CSS custom properties  - Name validation (minimum 2 characters)### Step 1: Fork the Repository

- **DOM Manipulation**: JavaScript-based theme switching

- **Persistent Theme**: Saves user preference to localStorage across sessions  - Password confirmation matching

- **Smooth Transitions**: Animated theme changes across all elements

- **CSS Flexbox**: Proper form alignment and responsive layout

## 🛠️ Tech Stack

- **User Feedback**: Visual indicators for invalid inputs and success messages### Step 2: Clone Your Fork

- **HTML5** - Semantic markup structure

- **CSS3** - Modern styling with Flexbox, Grid, and CSS Variables

- **Vanilla JavaScript (ES6+)** - DOM manipulation, authentication, form validation

- **Font Awesome** - Icon library### ✅ Task 3: Light/Dark Theme Toggle```bash

- **LocalStorage API** - Theme persistence

- **SessionStorage API** - Authentication state management- **Theme Switcher**: Toggle switch in the navigation bar with sun/moon iconshttps://github.com/your_username/MLSC_WEB_DEV_TASK.git



## 📁 Project Structure- **CSS Variables**: Dynamic theming using CSS custom properties```



```- **DOM Manipulation**: JavaScript-based theme switching  - Move into the project directory:

MLSC_WEB_DEV_TASK/

│- **Persistent Theme**: Saves user preference to localStorage    ```bash

├── login.html          # Entry point - Login/Signup page

├── index.html          # Main landing page (protected)- **Smooth Transitions**: Animated theme changes across all elements    cd MLSC_WEB_DEV_TASK

├── auth.css            # Styles for authentication page

├── styles.css          # Styles for main landing page    ```

├── auth.js             # Authentication and validation logic

├── script.js           # Main page functionality## 🛠️ Tech Stack

└── README.md           # Project documentation

```    



## 🚀 Getting Started- **HTML5** - Semantic markup structure### Step 3: Create a New Branch



### Quick Start- **CSS3** - Modern styling with Flexbox, Grid, and CSS Variables```bash



1. **Clone the repository**:- **Vanilla JavaScript (ES6+)** - DOM manipulation, event handling, and form validationgit checkout -b "your-branch-name"

```bash

git clone https://github.com/your_username/MLSC_WEB_DEV_TASK.git- **Font Awesome** - Icon library```

cd MLSC_WEB_DEV_TASK

```- **LocalStorage API** - Theme persistence



2. **Open in browser**:

   - Simply open `login.html` in your browser, or

   - Use a local server (recommended):## 📁 Project Structure### Step 4: Make Your Changes

   ```bash

   # Using Python- Open the project in your preferred code editor (e.g., VS Code).

   python -m http.server 8000

   ```

   # Using Node.js

   npx http-serverMLSC_WEB_DEV_TASK/- Add, edit, or improve the files as needed.

   ```

│

3. **Navigate to** `http://localhost:8000/login.html`

├── index.html          # Main HTML file with header, hero, products, forms, footer- Save your changes and check that everything works.

### No Dependencies Required!

This project uses vanilla HTML, CSS, and JavaScript - no build tools or npm packages needed.├── styles.css          # CSS styles with theme variables and responsive design



## 💡 Usage Guide├── script.js           # JavaScript for theme toggle, validation, and interactions



### 🔐 Authentication Flow└── README.md           # Project documentation### Step 5: Commit your changes



1. **Start at Login Page** (`login.html`)``````bash

   - The application always starts at the login page

   - You'll see the Amazon logo with login formgit add .



2. **Login**:## 🚀 Getting Startedgit commit -m "commit_message"

   - Enter any valid email (e.g., `user@example.com`) or 10-digit phone number

   - Enter any password with at least 6 characters```

   - Click "Continue"

   - You'll be redirected to the main Amazon landing page### Quick Start



3. **Sign Up**:### Step 6: Push your changes to the upstream branch

   - Click "Create your Amazon account"

   - Fill in:1. **Clone the repository**:```bash

     - Name (minimum 2 characters)

     - Email or phone number```bashgit push origin <your-branch-name>

     - Password (minimum 6 characters)

     - Re-enter password (must match)git clone https://github.com/your_username/MLSC_WEB_DEV_TASK.git```

   - Click "Create your Amazon account"

   - You'll be redirected to the main landing pagecd MLSC_WEB_DEV_TASK



4. **Logout**:```

   - On the main page, hover over "Account & Lists"

   - Click the logout icon (appears on hover)### Step 7: Navigate to the repository and Create a Pull Request

   - Confirm logout

   - You'll be redirected back to login page2. **Open in browser**:  - Click “Compare & pull request”.



### 🎨 Theme Switching   - Simply double-click `index.html`, or  - Make sure the base repostitory is:-

1. Locate the theme toggle switch (☀️/🌙 icons)

   - On login page: Top-right corner   - Use a local server (recommended):    ```bash

   - On main page: In the navigation bar

2. Click the toggle to switch between light and dark modes   ```bash    base repository: <original-repo-owner>/<repository-name>

3. Your preference is automatically saved across sessions

   # Using Python    base branch: main

### 🛍️ Shopping Features (Main Page)

- Browse product categories in the grid layout   python -m http.server 8000    compare branch: <your-branch-name>

- Click product items to add to cart (counter updates)

- Use hero carousel navigation arrows       ```

- Click "Back to top" in footer for smooth scroll

   # Using Node.js

## ✨ Key Features

   npx http-server

### Authentication Features

- ✅ Session-based authentication   ```### Step 8: label the PR with the tech stack you have used to Solve the challenge

- ✅ Protected routes (auto-redirect if not logged in)

- ✅ User name display after login  - For Ex:-

- ✅ Logout functionality with confirmation

- ✅ Any valid credentials accepted (demo mode)3. **Navigate to** `http://localhost:8000`    ```javascript



### Responsive Design Breakpoints    React

- **Desktop** (>1024px): Full layout with all elements

- **Tablet** (768px-1024px): Adjusted spacing and layout### No Dependencies Required!    ```

- **Mobile** (<768px): Stacked layout, condensed navigation

This project uses vanilla HTML, CSS, and JavaScript - no build tools or npm packages needed.    or

### Form Validation

- ✅ Required field checking    ```javascript

- ✅ Email format validation (`user@domain.com`)

- ✅ Phone validation (10-digit numbers)## 💡 Usage Guide    HTML

- ✅ Password strength (min 6 characters)

- ✅ Password confirmation matching    ```

- ✅ Real-time error messages

- ✅ Visual feedback (red borders on invalid)### 🎨 Theme Switching

- ✅ Successful login/signup redirects

1. Locate the theme toggle switch in the navigation bar (☀️/🌙 icons)### Step 9: Wait for Review

### Accessibility

- Semantic HTML5 elements2. Click the toggle to switch between light and dark modes

- Keyboard navigation (Tab, Shift+Tab)

- Focus states on all interactive elements3. Your preference is automatically saved to localStorage

- Color contrast compliance in both themes

- Responsive design for all screen sizes### Step 10: Keep Your Fork Updated



## 🎨 Theme Customization### 🔐 Authentication  - To avoid merge conflicts, regularly sync your fork:



### CSS Variables (Light Theme)1. Click **"Hello, sign in - Account & Lists"** in the header  ```bash

```css

:root {2. **To Login**:  git remote add upstream https://github.com/<original-repo-owner>/<repository-name>.git

    --primary-color: #232F3E;

    --accent-color: #FF9900;   - Enter email or 10-digit phone number  git fetch upstream

    --bg-color: #EAEDED;

    --text-color: #0F1111;   - Enter password (minimum 6 characters)  git checkout main

}

```   - Click "Continue"  git merge upstream/main



### Dark Theme Override3. **To Sign Up**:  git push origin main

```css

[data-theme="dark"] {   - Click "Create your Amazon account"  ```

    --primary-color: #1a1a1a;

    --bg-color: #121212;   - Fill in all required fields with real-time validation

    --text-color: #E8E8E8;

}   - Passwords must match

```

   - Click "Create your Amazon account"

## 📱 Browser Compatibility



Tested and working on:

- ✅ Chrome (latest)### 🛍️ Shopping Features

- ✅ Firefox (latest)

- ✅ Safari (latest)- Browse product categories in the grid layout

- ✅ Edge (latest)- Click product items to add to cart (counter updates)

- ✅ Mobile browsers (iOS Safari, Chrome Mobile)- Use hero carousel navigation arrows

- Click "Back to top" in footer for smooth scroll

## 🔄 How It Works

## ✨ Key Features

### Authentication Flow

1. User visits `login.html` (entry point)### Responsive Design Breakpoints

2. After successful login/signup, user data is stored in `sessionStorage`- **Desktop** (>1024px): Full layout with all elements

3. User is redirected to `index.html` (main page)- **Tablet** (768px-1024px): Adjusted spacing and layout

4. `index.html` checks for authentication on load- **Mobile** (<768px): Stacked layout, condensed navigation

5. If not authenticated, user is redirected back to `login.html`

6. Logout clears `sessionStorage` and redirects to `login.html`### Form Validation

- ✅ Required field checking

### Session Management- ✅ Email format validation (`user@domain.com`)

```javascript- ✅ Phone validation (10-digit numbers)

// Storing login state- ✅ Password strength (min 6 characters)

sessionStorage.setItem('isLoggedIn', 'true');- ✅ Password confirmation matching

sessionStorage.setItem('userName', userName);- ✅ Real-time error messages

- ✅ Visual feedback (red borders on invalid)

// Checking authentication- ✅ Success alerts on submission

if (!sessionStorage.getItem('isLoggedIn')) {

    window.location.href = 'login.html';### Accessibility

}- Semantic HTML5 elements

- Keyboard navigation (Tab, Shift+Tab)

// Logout- ESC key closes modal

sessionStorage.clear();- Focus trap in modal

```- Color contrast compliance



## 🎯 Test Credentials## 🎨 Theme Customization



Since this is a demo, **any valid format credentials will work**:### CSS Variables (Light Theme)

```css

### Login Examples::root {

- Email: `user@example.com` | Password: `password123`    --primary-color: #232F3E;

- Email: `test@test.com` | Password: `123456`    --accent-color: #FF9900;

- Phone: `9876543210` | Password: `mypass`    --bg-color: #EAEDED;

    --text-color: #0F1111;

### Signup:    /* ... more variables */

- Just ensure:}

  - Name: At least 2 characters```

  - Email: Valid format or 10-digit number

  - Password: At least 6 characters### Dark Theme Override

  - Confirm Password: Matches password field```css

[data-theme="dark"] {

## 🐛 Future Enhancements    --primary-color: #1a1a1a;

    --bg-color: #121212;

- [ ] Backend API integration    --text-color: #E8E8E8;

- [ ] Real authentication with database    /* ... more variables */

- [ ] Password encryption}

- [ ] Remember me functionality```

- [ ] Social login (Google, Facebook)

- [ ] Email verification## 📱 Browser Compatibility

- [ ] Password reset functionality

- [ ] Product search implementationTested and working on:

- [ ] Working shopping cart with checkout- ✅ Chrome (latest)

- [ ] Order history- ✅ Firefox (latest)

- [ ] User profile management- ✅ Safari (latest)

- ✅ Edge (latest)

## 📄 License- ✅ Mobile browsers (iOS Safari, Chrome Mobile)



This project is created for educational purposes as part of the MLSC Web Development Task.## 🔧 Customization Guide



## 🙏 Acknowledgments### Add Products

Edit product cards in `index.html`:

- Design inspired by Amazon.in```html

- Font Awesome for icons<div class="product-item">

- Microsoft Learn Student Club for the opportunity    <img src="your-image-url" alt="Product">

    <p>Product description</p>

---</div>

```

## 📝 Submission Checklist

### Change Theme Colors

- ✅ Landing page recreated with all sectionsModify CSS variables in `styles.css`:

- ✅ Responsive design (mobile, tablet, desktop)```css

- ✅ Dedicated login/signup page as entry point:root {

- ✅ Form validation with real-time feedback    --accent-color: #YOUR_COLOR;

- ✅ CSS Flexbox for form alignment}

- ✅ Session-based authentication flow```

- ✅ Protected routes implementation

- ✅ Light/Dark theme toggle### Adjust Validation Rules

- ✅ CSS Variables for themingEdit functions in `script.js`:

- ✅ JavaScript DOM manipulation```javascript

- ✅ LocalStorage for theme persistencefunction validatePassword(password) {

- ✅ SessionStorage for auth state    return password.length >= YOUR_MIN_LENGTH;

- ✅ Clean, commented code}

- ✅ Comprehensive README documentation```



**Tech Stack Label**: `HTML` `CSS` `JavaScript`## 🐛 Future Enhancements



---- [ ] Backend API integration

- [ ] Real authentication system

## 🎬 Getting Started Video- [ ] Product search functionality

- [ ] Working shopping cart

1. Open `login.html` in your browser- [ ] Payment gateway integration

2. Enter any email (e.g., `test@example.com`) and password (min 6 chars)- [ ] User profile pages

3. Click "Continue" to login- [ ] Product detail pages

4. You'll see the Amazon landing page with your name displayed- [ ] Review and rating system

5. Toggle between light/dark theme using the switch

6. Click the logout icon next to your name to sign out## 📄 License

7. Try creating a new account using the "Create your Amazon account" button

This project is created for educational purposes as part of the MLSC Web Development Task.

**Note**: This is a front-end demonstration project. Authentication accepts any valid format credentials for demo purposes. No actual backend, database, or payment processing is implemented.

## 🙏 Acknowledgments

- Design inspired by Amazon.in
- Font Awesome for icons
- Microsoft Learn Student Club for the opportunity

---

## 📝 Submission Checklist

- ✅ Landing page recreated with all sections
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Login/Signup forms with validation
- ✅ CSS Flexbox for form alignment
- ✅ Light/Dark theme toggle
- ✅ CSS Variables for theming
- ✅ JavaScript DOM manipulation
- ✅ LocalStorage for theme persistence
- ✅ Clean, commented code
- ✅ README documentation

**Tech Stack Label**: `HTML` `CSS` `JavaScript`

---

**Note**: This is a front-end demonstration project. No actual backend, database, or payment processing is implemented.
