const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const message = document.getElementById("message");


// Character sets
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?";


// Show password length
lengthInput.addEventListener("input", function () {
    lengthValue.textContent = lengthInput.value;
});


// Generate password
generateBtn.addEventListener("click", function () {

    let characters = "";

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    // Check if at least one option is selected
    if (characters.length === 0) {
        message.textContent = "Please select at least one option.";
        return;
    }

    let password = "";

    for (let i = 0; i < lengthInput.value; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    passwordInput.value = password;

    message.textContent = "";
});


// Copy password
copyBtn.addEventListener("click", function () {

    if (passwordInput.value === "") {
        message.textContent = "Generate a password first.";
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);

    message.textContent = "Password copied!";
});