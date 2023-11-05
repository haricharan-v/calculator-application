let operatorUsed;
let num1;
let num2;

function display(number) {
  document.getElementById("display").value += number;
}

function operator(displayOperator) {
  document.getElementById("display").value += displayOperator;
  num1 = parseInt(document.getElementById("display").value);
  document.getElementById("display").value = " ";
  operatorUsed = displayOperator;
  console.log(num1);
}
 
function clearDisplay() {
  document.getElementById("display").value = " ";
  console.log("clear");
}

function displayEquals() {
  let answer = 0;
  num2 = parseInt(document.getElementById("display").value);
  document.getElementById("display").value = " ";
  switch (operatorUsed) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
      console.log("default");
      break;
  }
  document.getElementById("display").value = num1 + operatorUsed + num2 + "=" + answer;
  console.log(answer);
}
