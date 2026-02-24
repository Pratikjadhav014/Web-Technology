// ==========================================
// Object Creation in JavaScript
// ==========================================

// There are mainly two ways to create objects in JavaScript:
// 1) Object Literal
// 2) Constructor (using new keyword)

// Object Literal -> key-value pairs

let my_obj = {
    name: "pratik",
    age: 22,
    "full name": "pratik jadhav", // key with space
    location: "ichalkaranji",
    email: "abc@gmail.com",
    login: true,
    last_login_days: ["mon", "sun", "sat"]
};

// ------------------------------------------
// Accessing Object Properties
// ------------------------------------------

// For keys with space, use bracket notation
console.log(my_obj["full name"]);

// ------------------------------------------
// Symbol Example
// ------------------------------------------

const mysymbol = Symbol("js");

// Adding symbol as object key (correct way)
my_obj[mysymbol] = "symbol value";

console.log(mysymbol);
console.log(typeof mysymbol);
console.log(typeof my_obj[mysymbol]);

// ------------------------------------------
// Modifying Object Values
// ------------------------------------------

console.log(my_obj);

my_obj.email = "xyz@gmail.com";
console.log(my_obj.email);

// Freeze object (uncomment to test)
// Object.freeze(my_obj);

my_obj.email = "pqr@gmail.com"; // will not change if frozen
console.log(my_obj.email);

// ------------------------------------------
// Adding Method to Object
// ------------------------------------------

my_obj.greeting = function () {
    console.log("Hello JS");
};

// Call the function
my_obj.greeting();

// ------------------------------------------
// Constructor Object
// ------------------------------------------

const user = new Object(); // Constructor method
user.name = "pratik";
console.log(user);

// ------------------------------------------
// Another Object Literal
// ------------------------------------------

const user1 = {}; // Object literal
user1.id = 36;
user1.name = "pratik";
user1.is_login = true;

console.log(user1);

// ------------------------------------------
// Nested Objects
// ------------------------------------------

const user3 = {
    email: "dsa@gmail.com",
    username: {
        fullname: {
            fname: "pratik",
            lname: "jadhav"
        }
    }
};

// Accessing nested object value
console.log(user3.username.fullname.fname);