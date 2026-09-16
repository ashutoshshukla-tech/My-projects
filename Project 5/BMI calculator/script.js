const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click", function () {

    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);

    if (weight <= 0 || height <= 0) {
        document.getElementById("result").textContent =
            "Please enter valid values.";
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // BMI formula
    const bmi = weight / (heightInMeters * heightInMeters);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    document.getElementById("result").textContent =
        `Your BMI is ${bmi.toFixed(2)} (${category})`;
});