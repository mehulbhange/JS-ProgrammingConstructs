const prompt = require('prompt-sync')();

let start = Number(prompt("Enter starting number "));
let end = Number(prompt("Enter ending number "));

if (start >= 2 && start < end) {
    for (let number = start; number <= end; number++) {
        let isPrime= true;
        for (let index = 2; index <= number / 2; index++) {
            if (number % index == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            console.log(number);
    }
}
else
    console.log("Invalid!!");
