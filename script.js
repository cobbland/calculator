let num1;
let oper;
let num2;

function calcAdd(num1,num2) {
    return num1 + num2;
}

function calcSubtract(num1,num2) {
    return num1 - num2;
}

function calcMultiply(num1, num2) {
    return num1 * num2;
}

function calcDivide(num1,num2) {
    return num1 / num2;
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