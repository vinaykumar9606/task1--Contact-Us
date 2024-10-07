// Get form elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

// Error messages
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

// Event listener for form submission
submitBtn.addEventListener("click", function() {
    // Clear previous error messages
    clearErrors();

    // Validate form inputs
    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    // If all fields are valid, display success message and log data
    if (isValid) {
        successMessage.textContent = "Thank you! Your message has been submitted.";
        logInputData();
    }
});

// Function to validate email format using regex
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to clear all error messages
function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
}

// Function to log form data to the console
function logInputData() {
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    console.log("Form Data:", formData);
}

