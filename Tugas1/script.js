let display = document.getElementById("result");
let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === "") return;
    previousInput = currentInput;
    operator = op;
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || previousInput === "") return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result;
    previousInput = "";
    operator = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    display.value = "";
}
