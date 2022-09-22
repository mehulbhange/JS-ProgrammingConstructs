const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter first number : "));
let b = parseInt(prompt("Enter second number : "));
let c = parseInt(prompt("Enter third number : "));

let operation1 = a + b * c;
console.log(operation1)
let operation2 = a % b + c;
console.log(operation2)
let operation3 = c + a / b;
console.log(operation3)
let operation4 = a * b + c;
console.log(operation4)

let maximum = Math.max(operation1, operation2, operation3, operation4);
let minimum = Math.min(operation1, operation2, operation3, operation4);

console.log("Maximum is " + maximum);
console.log("Minimum is " + minimum);