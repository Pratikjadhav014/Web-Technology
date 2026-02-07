let my_obj = {
     name : "pratik",
     age : 22,
     "full name":"pratik jadhav",
     //"mysymbol":"pwqihd",
     // symbol ex :,
     location :"ichalkaranji",
     email:"abc@gmail.com",
     login:true,
     last_login_days:["mon","sun","sat"]
}
//two types of in js 
//1st literals
//2st constructor
//3rd single turn
//when you create constructor its create constructor it means itself obj.
//when we create obj literal ,this time not create single turn.
//when we create obj literal ,this time create constructor.
//bj literal -> key ,value pair.

console.log(my_obj.full_name);

console.log(typeof my_obj.mysymbol);
const mysymbol = Symbol("js")
console.log(mysymbol);
console.log(typeof(mysymbol));
//const  myobj2 = (mysymbol2:Symbol("top"));
//console.log(myobj2);

//-------------------------------------------------------//
console.log(my_obj);
my_obj.email = "xyz@gmail.com";
console.log(my_obj.email);
//Object.freeze(my_obj);
my_obj.email = "pqr@gmail.com";
console.log(my_obj.email);

my_obj.greeting = function(){
    console.log("Hello js");
}

console.log(my_obj.greeting);

 
const user = new Object();
console.log(user);
//non single turn object
const user1 = {};
user1.id = 36;
user1.name = "pratik";
user1.is_login = true;
console.log(user1);

//nested objects
const user3 = {
    email:"dsa@gmail.com",
    username:{
        fullname :{fname:"pratik",lname:"jadhav"}
    }
}

console.log(user3.username.fullname.fname);


