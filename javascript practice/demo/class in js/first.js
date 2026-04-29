// ==========================================
// Class in JavaScript
// ==========================================

// Class is a blueprint used to create objects.
// It was introduced in ES6 (ECMAScript 2015).

// Syntax of class

class User {

    // Constructor method
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log("Hello " + this.name);
    }
}



// ==========================================
// Creating Object from Class
// ==========================================

const user1 = new User("Pratik", 22);
const user2 = new User("Rahul", 24);

console.log(user1.name);
console.log(user2.age);

user1.greet();



// ==========================================
// Constructor
// ==========================================

// constructor() is a special method
// It runs automatically when object is created.

class Student {

    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
}

const s1 = new Student("Pratik", "BCA");
console.log(s1);



// ==========================================
// Adding Methods in Class
// ==========================================

class Car {

    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(this.brand + " car started");
    }
}

const car1 = new Car("Toyota");
car1.start();



// ==========================================
// Class Inheritance
// ==========================================

// Inheritance allows one class to use properties
// and methods of another class.

class Animal {

    speak() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Dog barks");
    }
}

const d1 = new Dog();

d1.speak();
d1.bark();



// ==========================================
// super Keyword
// ==========================================

// super() calls the constructor of parent class

class Person {

    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {

    constructor(name, job) {
        super(name);
        this.job = job;
    }
}

const emp1 = new Employee("Pratik", "Developer");
console.log(emp1);



// ==========================================
// Summary
// ==========================================

// Class -> Blueprint
// Object -> Instance of class
// constructor() -> Initializes object
// extends -> Inheritance
// super() -> Calls parent constructor  