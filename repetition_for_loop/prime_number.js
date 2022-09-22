const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number : "));

let isPrime = true;

for (let index = 2; index <= number / 2; index++) {
    if (number % index == 0) {
        isPrime = false;
        break;
    }
}

if (isPrime)
    console.log("Prime number");
else
    console.log("Not a prime number");