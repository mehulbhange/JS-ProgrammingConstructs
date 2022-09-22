const WIN = 1;
let balance = 100;
let winCount = 0;
let bets = 0;

while (balance > 0 && balance < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    if (bet == WIN){
        balance++;
        winCount++;
    }else {
        balance--;    
    }
    bets++;
}

console.log("bets = " + bets);
console.log("Total wins = " + winCount);
console.log("Final balance = " + balance);