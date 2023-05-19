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