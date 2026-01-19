//Equality (==) vs Strict Equality (===)

console.log(5 == "5");//true
console.log(5==="5");//false
console.log(null == undefined)//true
console.log(null === undefined)//false

//Not Equal (!=) vs Strict Not Equal (!==)

console.log(0 != false);//true --not check datatype itself
console.log(0 !== false);//false -- check datatype itself

//Relational Operators (> < >= <=)

console.log(10 > "5");//true --5 converted to number 
console.log("10" > "5")//false --Both strings → compare ASCII values of string

//Boolean comparisions

console.log(false == 0);//true -- not check datatype
console.log(false === 0);//false -- 

//NaN Comparisons

console.log(NaN == NaN);//false --NaN is never equal to anything, even itself.

//Objects Comparison

console.log({} == {});//false -- different memory references

let a = {};
let b = a;
console.log(a === b);//true -- same references

//Undefined Comparisons

console.log(undefined == 0);//false  --undefined only equal with null

console.log(undefined > 0);//false  --undefined only equal with null

/*
true     // "" == 0
false    // "" === 0 --type mismatch 
true     // " " == 0
true     // [] == 0
true     // [] == ""  --both empty
false    // {} == "[object Object]" -- object vs string 
 */
