
//datatypes

//primitive datatypes
let a = 10;
console.log(a);
console.log(typeof(a))

let b = "rosemary";
console.log(b);
console.log(typeof(b))

let c = true;
console.log(c);
console.log(typeof(c));

let d = 2.3;
console.log(d);
console.log(typeof(d));

let e;
console.log(e);
console.log(typeof(e));

let f = null ;
console.log(f);
console.log(typeof(f));

let g = 212345678900987654n;
console.log(d);
console.log(typeof(d));

let h = Symbol("x");
console.log(d);
console.log(typeof(d));

//const
//const a = 12;// if you redclare the const varible return the error,because const varible value initilize only once.

//scope (diff bet var and let)
// var : take all variable as a same scope 
// let : take local and global scope variable different.
let x = 14;
var y = 24;

{
    let x = 10;
    var y = 20;
    console.log(x);
    console.log(y);
}

console.log(x);
console.log(y);

//difference between null and undefined

let l = null;//means null value is present 
let m;//undefined -> means 'm' not contain any value 

console.log(l,m);

console.log(typeof(l));//Indicates absence of a value // type -> object

console.log(typeof(m));//Explicitly assigned by the programmer.
                      // Used to mean no value / empty / nothing

