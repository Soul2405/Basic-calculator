const display = document.getElementById("display");
const cal = document.getElementById("cal");

function appendtodisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = ""; // Clear the display
}

// Calculate function to evaluate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
       
    } catch (error) {
        display.value = "error"; // Show "error" in the display
        shakeCalculator(); // Shake the calculator on error
        setTimeout(cleardisplay, 500); // Clear the display after shaking
    }
}

// Function to shake the calculator
function shakeCalculator() {
    cal.classList.add("shake"); // Add shake class for animation

    setTimeout(() => {
        cal.classList.remove("shake"); // Remove shake class after animation
    }, 500); // Duration of shake animation
}

