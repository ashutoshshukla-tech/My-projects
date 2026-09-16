const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateBtn = document.getElementById("generateBtn");


// Generate random color
function generateColor() {

    const letters = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        const randomNumber = Math.floor(Math.random() * 16);

        color = color + letters[randomNumber];
    }

    // Change box color
    colorBox.style.backgroundColor = color;

    // Show color code
    colorCode.textContent = color;
}


// Button click
generateBtn.addEventListener("click", generateColor);
generateColor();