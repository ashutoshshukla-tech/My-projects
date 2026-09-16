const display = document.getElementById("display");


// Display par value add karna
function appendValue(value) {
    display.value += value;
}


// Pura display clear karna
function clearDisplay() {
    display.value = "";
}


// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// Calculation karna
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}