//Parent class
function Person(name){
    this.name = name;
}

Person.prototype.sayHello = function (){
    console.log("Hello. My name is " + this.name);
};
Person.prototype.sayGoodbye = function (){
    console.log("Goodbye!");
};

// Child Class
function Student( name, gpa){
    Person.call(this, name);
    this.gpa = gpa;
}

//Duplicate functionality of parent
Student.prototype = Object.create(Person.prototype);
Student.constructor = Student;

//Replace the parent's sayHello with a new method
Student.prototype.sayHello = function (){
    console.log("Hi I'm " + this.name + " with a "+this.gpa +" GPA!");
}

let bob = new Student("Bob",3.5);
bob.sayHello();
bob.sayGoodbye();
