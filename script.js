// Get form and input elements
const form = document.getElementById('validationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

// Regular Expressions for validation
const nameRegex = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Valid email format
const phoneRegex = /^\d{10,15}$/; // Only digits, 10-15 characters
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // At least 8 chars, one uppercase, one lowercase, one number

// Function to validate full name
function validateFullName() {
    if (!nameRegex.test(fullNameInput.value)) {
        fullNameInput.classList.add('error');
        document.getElementById('fullNameError').textContent = 'Invalid name (only letters and spaces allowed).';
        return false;
    } else {
        fullNameInput.classList.remove('error');
        document.getElementById('fullNameError').textContent = '';
        return true;
    }
}

// Function to validate email
function validateEmail() {
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        document.getElementById('emailError').textContent = 'Invalid email format.';
        return false;
    } else {
        emailInput.classList.remove('error');
        document.getElementById('emailError').textContent = '';
        return true;
    }
}

// Function to validate phone number
function validatePhone() {
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.classList.add('error');
        document.getElementById('phoneError').textContent = 'Invalid phone number (10-15 digits only).';
        return false;
    } else {
        phoneInput.classList.remove('error');
        document.getElementById('phoneError').textContent = '';
        return true;
    }
}

// Function to validate password
function validatePassword() {
    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add('error');
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters, including one uppercase, one lowercase, and one number.';
        return false;
    } else {
        passwordInput.classList.remove('error');
        document.getElementById('passwordError').textContent = '';
        return true;
    }
}

// Real-time validation as the user types
fullNameInput.addEventListener('input', validateFullName);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
passwordInput.addEventListener('input', validatePassword);

// Form submission handler
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        successMessage.style.display = 'block';
    } else {
        successMessage.style.display = 'none';
    }
});
