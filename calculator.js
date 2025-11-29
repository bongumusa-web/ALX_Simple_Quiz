// Select elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const result = document.getElementById('calculation-result');
// Calculator functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Event listeners for buttons
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;

    const answer = add(number1, number2);
    result.textContent = answer;
});

document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;

    const answer = subtract(number1, number2);
    result.textContent = answer;
});

document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;

    const answer = multiply(number1, number2);
    result.textContent = answer;
});

document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;

    const answer = divide(number1, number2);
    result.textContent = answer;
});
