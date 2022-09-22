const prompt = require("prompt-sync")(); // added to use prompt in terminal

let year = parseInt(prompt("Enter year ( xxxx ) :"));
console.log(typeof year)
if ( year%4 == 0 && (year%100 != 0 || year%400 == 0) ){
    console.log("Leap year")
}else{
    console.log("Not leap year")
}