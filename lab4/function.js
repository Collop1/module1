let fs = require("fs");

// Math operators
function add(a, b) {
    console.log("Adding numbers:", a, b);
    return a + b;
}

function subtract(a, b) {
    console.log("Subtracting numbers:", a, b);
    return a - b;
}

function multiply(a, b) {
    console.log("Multiplying numbers:", a, b);
    return a * b;
}

function divide(a, b) {
    console.log("Dividing numbers:", a, b);
    return a / b;
}

// Unique name
function name(personName) {
    console.log("hello", personName);
}

// Math examples
console.log("=", add(10, 10));
console.log("=", subtract(20, 5));
console.log("=", multiply(4, 5));
console.log("=", divide(100, 4));

// Greetings to unique name
name("John Doe");
