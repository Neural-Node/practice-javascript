console.log("This is a beginning practice program.");
const prompt = require('prompt-sync') ();

let theNumber =Number(prompt("Pick a number: "));
console.log("Your number is the square root of"+ theNumber * theNumber);


//conditionals
let aNumber = Number(prompt("Pick a number: "));
if(!Number.isNaN(aNumber)){
    console.log("Your number is the square root of " + aNumber * aNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}

//chained conditionals
let num = Number(prompt(" Pick a number: "));
if(num < 10){
    console.log("small number");
}else  if(num < 100){
    console.log("medium number");
}else {
    console.log("large");
}