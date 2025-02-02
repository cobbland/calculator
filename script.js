const calcButtons = document.querySelector('#calcButtons');
let calcDisplay = document.querySelector('#calcDisplay');

let num1 = '';
let oper= '';
let num2 = '';

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

function clearCalc() {
    num1 = '';
    oper= '';
    num2 = '';
    calcDisplay.textContent = '';
}

function checkCalcInput(calcInput) {
    if (!isNaN(+calcInput)) {
        console.log("number check")
        if (oper === '') {
            console.log("oper check")
            num1 += calcInput;
            calcDisplay.textContent += num1;
        } else {
            console.log("oper else");
            num2 += calcInput;
            calcDisplay.textContent += num2;
        }
    } else if (calcInput === '+'
                || calcInput === '-'
                || calcInput === '*'
                || calcInput === '/') {
        if (oper === '' && num1 !== '' && num2 === '') {
            oper = calcInput;
            calcDisplay.textContent += oper;
        } else if (oper !== '' && num2 !== '') {
            num1 = operate(num1,oper,num2);
            oper = calcInput;
            num2 = ''
            calcDisplay.textContent = num1 + oper;
        }
    } else if (calcInput === '=') {
        if (oper !== '' && num1 !== '' && num2 !== '') {
            num1 = operate(num1,oper,num2);
            oper = ''
            num2 = ''
            calcDisplay.textContent = num1;
        }
    } else if (calcInput === "ac") {
        clearCalc();
    }
}

calcButtons.addEventListener("click", (button) => {
    checkCalcInput(button.target.textContent);
    console.log(button.target.textContent);
});