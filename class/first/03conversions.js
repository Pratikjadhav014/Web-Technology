// String to Number

let a = "123";
let b = "3.14";

console.log(Number(a));
console.log(parseInt(a));
console.log(parseFloat(b));
console.log(+a);// convert using unery operator '+'

// Number to String 

let p = 1414;

console.log(String(p));
console.log(p.toString());//toString() belongs to Object.prototype
console.log(p+"");

//Boolean to Number 

console.log(Number(true));//->1
console.log(Number(false));//->0

//Number to Boolean

console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean(-1));//true

// String to Boolean

console.log(Boolean("hello"));//true
console.log(Boolean(""));//false
console.log(Boolean(0));//true

//Boolean to String 

console.log(String(true));
console.log(String(false));

//// null and undefined conversions

//to Number

console.log(Number(null));//0
console.log(Number(undefined));//Nan

//to String 

console.log(String(null));//'null'
console.log(String(undefined));//'undefined'

//to Boolean

console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

//Implicit (Automatic) Type Conversion

console.log("5"+2);//"52" --String
console.log(5+"2")//"52"  --String

console.log("2"==2); // true -> because not check datatype
console.log("2"==2);//false -> check dataype

//BigInt
let lm = 10n;
console.log(lm);
console.log(typeof(lm));
