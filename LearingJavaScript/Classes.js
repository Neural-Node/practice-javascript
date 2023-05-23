// Creating a person class with a constructor function
function  Person (name, age){
    this.name = name;
    this.age = age;

    this.sayHello = function (){
        console.log("Hello, " + this.name);
    };

    this.showAge = function (){
        console.log("I am " + this.age + " years old.");
    };

};

//instatiate the Person class
let bob = new Person("Bob",21);
let sue = new Person("Sue",40);

bob.sayHello();
sue.sayHello();

let  student = new  Person("Vail",30);
console.log(student.name);

bob.showAge();


