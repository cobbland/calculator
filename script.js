const calcButtons = document.querySelector('#calcButtons');
let calcDisplay = document.querySelector('#calcDisplay');

let num1;
let oper;
let num2;
let calcDisplayText = "";

function calcAdd(num1,num2) {
    return +num1 + +num2;
}

function calcSubtract(num1,num2) {
    return +num1 - +num2;
}

function calcMultiply(num1, num2) {
    return +num1 * +num2;
}

function calcDivide(num1,num2) {
    return +num1 / +num2;
}

function operate(num1,oper,num2) {
    if (oper === "+") {
        return calcAdd(num1,num2);
    } else if (oper === "-") {
        return calcSubtract(num1,num2);
    } else if (oper === "*") {
        return calcMultiply(num1,num2);
    } else if (oper === "/") {
        return calcDivide(num1,num2);
    } else {
        return "ERROR: Invalid operator"
    }
}



calcButtons.addEventListener("click", (button) => {
    calcDisplayText += button.target.textContent;
    calcDisplay.textContent += button.target.textContent;
    checkCalcInput(calcDisplayText);
});

function checkCalcInput(calcInput) {
    if (calcInput.substr(-1) === "+"
        || calcInput.substr(-1) === "-"
        || calcInput.substr(-1) === "*"
        || calcInput.substr(-1) === "/") {
        num1 = calcDisplayText.slice(0,-1);
        oper = calcDisplayText.substr(-1);
        calcDisplayText = '';
    } else if (calcInput.substr(-1) === "=") {
        num2 = calcDisplayText.slice(0,-1);
        calcDisplay.textContent = operate(num1,oper,num2);
        num1 = calcDisplay.textContent;
        calcDisplayText = calcDisplay.textContent;
    } else if (calcInput.slice(-2) === "ac") {
        num1 = '';
        num2 = '';
        oper = '';
        calcDisplay.textContent = '';
        calcDisplayText = '';
    }
}