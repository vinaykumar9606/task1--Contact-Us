
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");


const nameError = document.getElementById("nameError");          // Error messages
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");


submitBtn.addEventListener("click", function() {      // Event listener for form submission
    // Clear previous error messages
    clearErrors();

    // Validateing form inputs
    let isValid = true;

    // Validateing  name
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Validateing  email
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    // Validateing message
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

   
    if (isValid) {
        successMessage.textContent = "Thank you! Your message has been submitted.";
        logInputData();
    }
});


function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function clearErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
}


function logInputData() {
    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };
    console.log("Form Data:", formData);
}

