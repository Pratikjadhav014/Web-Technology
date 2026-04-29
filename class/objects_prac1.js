// ==========================================
// JavaScript Object Important Points
// ==========================================



// ==========================================
// 1) What is an Object
// ==========================================

// Object is a collection of key-value pairs.

const student = {
    name: "Pratik",
    age: 22,
    course: "BCA"
};

console.log(student);



// ==========================================
// 2) Ways to Create Objects
// ==========================================

// 1) Object Literal
const obj1 = { name: "Rahul" };

// 2) Constructor Object
const obj2 = new Object();
obj2.name = "Amit";

// 3) Constructor Function
function User(name) {
    this.name = name;
}

const u1 = new User("Pratik");



// ==========================================
// 3) Accessing Object Properties
// ==========================================

// Dot notation
console.log(student.name);

// Bracket notation
console.log(student["age"]);



// ==========================================
// 4) Adding Properties
// ==========================================

student.city = "Mumbai";
console.log(student);



// ==========================================
// 5) Updating Properties
// ==========================================

student.age = 23;
console.log(student.age);



// ==========================================
// 6) Deleting Properties
// ==========================================

delete student.course;
console.log(student);



// ==========================================
// 7) Object Methods
// ==========================================

// Functions inside objects are called methods.

const user = {
    name: "Pratik",
    greet: function () {
        console.log("Hello JS");
    }
};

user.greet();



// ==========================================
// 8) this Keyword
// ==========================================

// 'this' refers to the current object.

const person = {
    name: "Rahul",
    sayHello: function () {
        console.log("Hello " + this.name);
    }
};

person.sayHello();



// ==========================================
// 9) Nested Objects
// ==========================================

// Object inside another object

const user2 = {
    name: "Pratik",
    address: {
        city: "Pune",
        pincode: 411001
    }
};

console.log(user2.address.city);



// ==========================================
// 10) Object Built-in Methods
// ==========================================

const obj = {
    name: "Pratik",
    age: 22
};

// Get keys
console.log(Object.keys(obj));

// Get values
console.log(Object.values(obj));

// Get entries
console.log(Object.entries(obj));



// ==========================================
// 11) Looping Through Objects
// ==========================================

for (let key in obj) {
    console.log(key, obj[key]);
}



// ==========================================
// 12) Copying Objects
// ==========================================

// Using spread operator

const original = { a: 1, b: 2 };

const copy = { ...original };

console.log(copy);



// ==========================================
// 13) Object Destructuring
// ==========================================

const student2 = {
    name: "Pratik",
    age: 22
};

const { name, age } = student2;

console.log(name);
console.log(age);



// ==========================================
// 14) Array vs Object
// ==========================================

// Array -> stores indexed values
const arr = ["apple", "banana", "mango"];
console.log(arr[0]);

// Object -> stores key-value pairs
const product = {
    name: "Laptop",
    price: 50000
};

console.log(product.name);

/* // ==========================================
// Advanced JavaScript Object Concepts
// ==========================================



// ==========================================
// Object.freeze()
// ==========================================

// Object.freeze() makes an object completely immutable.
// You cannot:
// 1) Add new properties
// 2) Delete properties
// 3) Modify existing properties

const userFreeze = {
    name: "pratik",
    age: 22
};

Object.freeze(userFreeze);

userFreeze.age = 30;     // ❌ will NOT change
userFreeze.city = "Pune"; // ❌ cannot add property

console.log(userFreeze);



// ==========================================
// Object.seal()
// ==========================================

// Object.seal() prevents:
// 1) Adding new properties
// 2) Deleting properties
// But allows modifying existing properties

const userSeal = {
    name: "pratik",
    age: 22
};

Object.seal(userSeal);

userSeal.age = 25;   // ✅ allowed
userSeal.city = "Mumbai"; // ❌ not allowed

console.log(userSeal);



// ==========================================
// Prototype
// ==========================================

// Prototype allows objects to inherit properties
// and methods from another object.

// Constructor function
function Person(name) {
    this.name = name;
}

// Adding method to prototype
Person.prototype.greet = function () {
    console.log("Hello " + this.name);
};

const p1 = new Person("Pratik");
const p2 = new Person("Rahul");

p1.greet();
p2.greet();



// ==========================================
// Class vs Object
// ==========================================

// Class -> blueprint/template
// Object -> instance created from class

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(this.name + " " + this.age);
    }
}

const s1 = new Student("Pratik", 22);
s1.showInfo();



// ==========================================
// Shallow Copy
// ==========================================

// Shallow copy copies only the top-level properties.
// Nested objects still reference the same memory.

const obj1 = {
    name: "Pratik",
    address: {
        city: "Pune"
    }
};

const shallowCopy = { ...obj1 };

shallowCopy.address.city = "Mumbai";

console.log(obj1.address.city); 
// Output: Mumbai (original object also changed)



// ==========================================
// Deep Copy
// ==========================================

// Deep copy creates a completely independent copy
// including nested objects.

const obj2 = {
    name: "Pratik",
    address: {
        city: "Pune"
    }
};

const deepCopy = JSON.parse(JSON.stringify(obj2));

deepCopy.address.city = "Delhi";

console.log(obj2.address.city); 
// Output: Pune (original object not changed)



// ==========================================
// Difference Between JS Objects and Other Language Objects
// ==========================================

// JavaScript Objects
// - Dynamic (properties can be added anytime)
// - Class not required
// - Prototype-based inheritance

const jsObject = {
    name: "Pratik"
};

jsObject.age = 22; // dynamically added



// Objects in Other Languages (Java / C++)

// In languages like Java you must define a class first

/*
class User {
    String name;
    int age;
}

User u1 = new User();
*/

// - Structure is fixed
// - Class required
// - Class-based inheritance */