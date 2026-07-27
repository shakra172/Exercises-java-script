function operate (a,b, callback) {
    return callback(a,b)
}

function add (a,b) {
    return a+b;
}


function subtract (a,b) {
    return a-b;
}


function multiply (a,b) {
    return a*b;
}


function divide (a,b) {
    return a/b;
}

console.log("Addition", operate(50,50, add));
console.log("Substraction", operate(200,100, subtract));
console.log("Multiplication", operate(2,50, multiply));
console.log("Divinition", operate(200,2, divide));