const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number : "));

for (let index = 1; index <= number; index++) {
    console.log(Math.pow(2, index));
}