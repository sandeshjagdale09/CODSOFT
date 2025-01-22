let displayElement = document.getElementById("display");
let currentInput = "";
let operator = null;

/* Append a number to the display */
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

/* Append an operator to the display */
function appendOperator(op) {
    if (currentInput === "") return;
    currentInput += ` ${op} `;
    updateDisplay();
}

/* Update the display content */
function updateDisplay() {
    displayElement.textContent = currentInput || "0";
}

/* Clear the display */
function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

/* Remove the last character */
function backspace() {
    currentInput = currentInput.trim().slice(0, -1);
    updateDisplay();
}

/* Calculate the result */
function calculate() {
    try {
        currentInput = eval(currentInput.replace('×', '*').replace('−', '-')).toString();
        updateDisplay();
    } catch (error) {
        displayElement.textContent = "Error";
        currentInput = "";
    }
}
