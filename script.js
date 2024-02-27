function getNumber1() {
  let input = document.getElementById("result");
  input.value += "1";
}
function getNumber2() {
  let input = document.getElementById("result");
  input.value += "2";
}
function getNumber3() {
  let input = document.getElementById("result");
  input.value += "3";
}
function getNumber4() {
  let input = document.getElementById("result");
  input.value += "4";
}
function getNumber5() {
  let input = document.getElementById("result");
  input.value += "5";
}
function getNumber6() {
  let input = document.getElementById("result");
  input.value += "6";
}
function getNumber7() {
  let input = document.getElementById("result");
  input.value += "7";
}
function getNumber8() {
  let input = document.getElementById("result");
  input.value += "8";
}
function getNumber9() {
  let input = document.getElementById("result");
  input.value += "9";
}
function getNumber0() {
  let input = document.getElementById("result");
  input.value += "0";
}
function elart() {
  alert("Try somthing else, if you do not mind! :D");
}
function plus() {
  let input = document.getElementById("result");
  var firstNum = Number(input.value);
  input.value = firstNum + "+";
}
function minus() {
  let input = document.getElementById("result");
  var firstNum = Number(input.value);
  input.value = firstNum + "-";
}
function multiply() {
  let input = document.getElementById("result");
  var firstNum = Number(input.value);
  input.value = firstNum + "*";
}
function division() {
  let input = document.getElementById("result");
  var firstNum = Number(input.value);
  input.value = firstNum + "/";
}
function clearInput() {
  let input = document.getElementById("result");
  input.value = null;
}
function equal() {
  let input = document.getElementById("result");
  let expression = input.value;

  let operatorIndex = expression.search(/[\+\-\*\/]/);
  if (expression.includes("+")) {
    if (operatorIndex !== -1) {
      let firstNum = parseFloat(expression.slice(0, operatorIndex));
      let secondNum = parseFloat(expression.slice(operatorIndex + 1));

      let result = firstNum + secondNum;

      input.value = result;
    }
  }
  if (expression.includes("-")) {
    if (operatorIndex !== -1) {
      let firstNum = parseFloat(expression.slice(0, operatorIndex));
      let secondNum = parseFloat(expression.slice(operatorIndex + 1));

      let result = firstNum - secondNum;

      input.value = result;
    }
  }
  if (expression.includes("*")) {
    if (operatorIndex !== -1) {
      let firstNum = parseFloat(expression.slice(0, operatorIndex));
      let secondNum = parseFloat(expression.slice(operatorIndex + 1));

      let result = firstNum * secondNum;

      input.value = result;
    }
  }
  if (expression.includes("/")) {
    if (operatorIndex !== -1) {
      let firstNum = parseFloat(expression.slice(0, operatorIndex));
      let secondNum = parseFloat(expression.slice(operatorIndex + 1));

      let result = firstNum / secondNum;

      input.value = result;
    }
  }

  console.log(input.value);
}
// const value1 = Number(prompt("give me number"));
// const value2 = Number(prompt("give me second number"));
// const operator = prompt("give me operator");

// switch (operator) {
//   case "+":
//     let sum = value1 + value2;
//     console.log("your number is " + sum);
//     break;
//   case "-":
//     let sum2 = value1 - value2;
//     console.log("your number is " + sum2);
//     break;
//   case "*":
//     let sum3 = value1 * value2;
//     console.log("your number is " + sum3);
//     break;
//   case "/":
//     let sum4 = value1 / value2;
//     console.log("your number is " + sum4);
//     break;
//   default:
//     console.log("you entered wrong operator");
// }
