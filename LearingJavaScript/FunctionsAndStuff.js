// A function definition is a regular binding where the value of the binding is a function.
//Each binding has a scope, which is part of the program in which the bing is visible. For
//bindings defined outside of any function or block, the scope is the whole program. These are called **global**.

let x = 10;
if(true){
    let y = 10;
    var z = 30;
    console.log(x + y + z);
}
// y is not visible here
console.log(x + z);

//If you write an = operator after a parameter, followed by an expression the value of that expression will
// will replace the arguement when it is not give.
function power(base, exponent = 2){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result += base;
    }
    return result;
}

// function call
console.log(power(4));
console.log(power(2,6));

//This function asks for a function of two arguments- the number of cows and the number of chickens
function printFarmInventory(cows,chickens){
    let cowString = String(cows);
    while (cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`)
    let chickenString = String(chickens);
    while (chickenString.length < 3){
        chickenString = "0"+chickenString;
    }
    console.log(`${chickenString} Chickens`)
}

// call printFarmInventory
printFarmInventory(7,11)