document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    
    // Get error message elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\d{10,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    // Validation functions
    function validateFullName() {
        if (!nameRegex.test(fullName.value.trim())) {
            fullName.classList.add('error');
            fullNameError.textContent = 'Name should contain only alphabets and spaces';
            return false;
        } else {
            fullName.classList.remove('error');
            fullNameError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        if (!emailRegex.test(email.value.trim())) {
            email.classList.add('error');
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            email.classList.remove('error');
            emailError.textContent = '';
            return true;
        }
    }
    
    function validatePhone() {
        if (!phoneRegex.test(phone.value.trim())) {
            phone.classList.add('error');
            phoneError.textContent = 'Phone number should contain 10-15 digits only';
            return false;
        } else {
            phone.classList.remove('error');
            phoneError.textContent = '';
            return true;
        }
    }
    
    function validatePassword() {
        if (!passwordRegex.test(password.value)) {
            password.classList.add('error');
            passwordError.textContent = 'Password must be at least 8 characters with at least one uppercase letter, one lowercase letter, and one number';
            return false;
        } else {
            password.classList.remove('error');
            passwordError.textContent = '';
            return true;
        }
    }
    
    // Add event listeners for real-time validation
    fullName.addEventListener('input', validateFullName);
    email.addEventListener('input', validateEmail);
    phone.addEventListener('input', validatePhone);
    password.addEventListener('input', validatePassword);
    
    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate all fields
        const isNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        
        // Check if all validations passed
        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            // Show success message
            successMessage.style.display = 'block';
            
            // Optionally, reset form after successful submission
            // form.reset();
        } else {
            // Hide success message if validation fails
            successMessage.style.display = 'none';
        }
    });
});
           
