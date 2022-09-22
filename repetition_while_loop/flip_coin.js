
const HEAD = 0;
let headCount = 0;
let tailCount = 0;

while (headCount != 11 && tailCount != 11) {
    let toss = Math.floor(Math.random() * 10) % 2;
    if (toss == HEAD)
        headCount++;
    else
        tailCount++;
}

if (headCount == 11){
    console.log("Head won");
}else{
    console.log("Tail won");
}