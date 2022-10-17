//business logic
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
  return number1 / number2;
}


// user interface logic
const number1 = parseInt(prompt("Enter a number"));
const number2 = parseInt(prompt("Enter another number"));

window.alert("The sum equals " + add(number1, number2));
window.alert("The difference equals " + subtract(number1, number2));
window.alert("The product equals " + multiply(number1, number2));
window.alert("The quotient equals " + divide(number1, number2));

window.alert(number1, " + ",number2, " = "+ add(number1, number2))