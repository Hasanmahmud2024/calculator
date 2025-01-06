let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

function displayNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function resetDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);  // Removes the last character
  display.value = currentInput || '0';  // If empty, show 0
}

function operate(op) {
  if (currentInput === '') return; // Do nothing if there's no current input
  if (previousInput !== '') {
    calculate(); // If there’s a previous input, calculate first before applying new operation
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '') return; // Do nothing if there’s no input to calculate

  let result;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        display.value = 'Error';
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }

  display.value = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}
