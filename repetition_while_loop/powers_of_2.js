const prompt = require('prompt-sync')();

let number = prompt("Enter a number ");

let index = 0;

while (index <= number && Math.pow(2, index) <= 256) {
    console.log(Math.pow(2, index));
    index++;
}