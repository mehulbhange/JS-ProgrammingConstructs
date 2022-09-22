let val1 = Math.floor(Math.random()*(999-100+1)+100);
let val2 = Math.floor(Math.random()*(999-100+1)+100);
let val3 = Math.floor(Math.random()*(999-100+1)+100);

if (val1 > val2 && val1 > val3){
    console.log("Max : ",val1)
}else if (val2 > val1 && val2 > val3){
    console.log("Max : ",val2)
}else{
    console.log("Max :",val3)
}

if (val1 < val2 && val1 < val3){
    console.log("Min : ",val1)
}else if (val2 < val1 && val2 < val3){
    console.log("Min : ",val2)
}else{
    console.log("Min :",val3)
}