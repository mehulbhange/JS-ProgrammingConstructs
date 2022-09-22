const prompt = require('prompt-sync')();
function isPalindrome(number1, number2) {

    let reverseNumber = 0;

    while (number1 > 0) {
        let remainder = number1 % 10;
        reverseNumber = reverseNumber * 10 + remainder;
        number1 = Math.floor(number1 / 10);
    }
    if (reverseNumber == number2)
        return true;
    else
        return false;
}

let numberOne = Number(prompt("Enter first number : "));
let numberTwo = Number(prompt("Enter second number : "));

if (isPalindrome(numberOne, numberTwo))
    console.log("Palindromes");
else
    console.log("Not Palindromes");