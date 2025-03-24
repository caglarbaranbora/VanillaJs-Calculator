let currentInput = "";

function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function appendOperator(operator) {
  if (currentInput !== "") {
    currentInput += " " + operator + " ";
    updateDisplay();
  }
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}

function clearInput() {
  currentInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("no").value = currentInput;
}
