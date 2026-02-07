//1:diff between arrow function and simple function 
//2:this keyword ,why we use this keyword on arrow function and simple function and if use ,why
//3:two arrow fun with two example 
//4:write code for switch case with ex
//5:what we use truty and falsy values in js
//6:how to use ternary operater in js
//7:write a code for how to use loops in array
//8:diff between for in and for of 
//9:how to use filter and map function in js
//10:how to use reduce method and fun in js

//Activity no 1:diff between arrow function and simple function 
//Arrow function : compact way to write a function 

//normal function 
console.log("normal function");

function normal(a)
{
     console.log(a);  
}
normal(3);

//Arrow function 
console.log("Arrow function ");

let arrow = (a)=>{console.log(a)}
arrow(4);

//Activity no 2:this keyword ,why we use this keyword on 
//arrow function and simple function and if use ,why

//normal function with "this keyword"
console.log("normal function with this keyword");

let c1 = {
    name :"pratik",
    greet :function()
    {
        console.log(this.name);
    }
}
c1.greet();

//Arrow function with this keyword
console.log("Arrow function with this keyword");
//you cannot use directly with arrow function (need to use nested fun.)
/*greet is an arrow function
Arrow function does not use person as this
It takes this from its parent scope*/
const c2 ={
    name : "pratik",
    greet:function()
    {
        const inner = ()=>{
            console.log(this.name);
            
        }
        inner();
    }
} 
c2.greet();

//Activity no 3:two arrow fun with two example 

//Example no 1:
const Student ={
    name:"shri",
    marks:[60,70,90],
    printMarks:function()
    {
        this.marks.forEach((mark)=>{
        console.log(this.name+" got "+mark);
        });
    }
};
Student.printMarks();

//example no 2:arrow function with map
console.log("arrow function with map");

let m = [1,2,3,4];
let sq = m.map((n)=>n*n);
//same do :let sq = m.map((n)=>{return n*n});
console.log(sq);

//Activity no 4:write code for switch case with ex
console.log("write code for switch case with ex");
//example :salary based on experience

let experience = 2;
switch(experience)
{
    case 1:salary = 15000;break;

    case 2:salary = 25000;break;

    case 3:salary =  35000;break;

    default:console.log("let me think first then i will tell you.");
    
}
console.log("salary"+salary);



//activity no 5:what we use truty and falsy values in js
console.log("what we use truty and falsy values in js");

console.log("ex 1:");
let data = "";

if (!data) {
  console.log("No data found");
}

console.log("ex 2:");
let name = "";
let defaultName = name || "Guest";

console.log(defaultName); // Guest

console.log("ex 3:");
/*while () {
  // runs until count becomes 0
}*/

//activity no 6:how to use ternary operater in js
console.log("how to use ternary operater in js");

let a = -4;
let np = a>0?"positive":"negative";
console.log(np);

//Activity no 7:write a code for how to use loops in array
console.log("write a code for how to use loops in array");

//prefix sum example
console.log("prefix sum example:");

let arr = [1,2,3,4,5];

for(let i=1;i<arr.length;i++)
{
      arr[i] = arr[i-1]+arr[i];
}
console.log(arr);

//activity no 8:diff between for in and for of 
console.log("diff between for in and for of ");

//for__in(most of time use work on key value pair)[return keys]
console.log("for__in");

const c3 = {
    name : "pratik",
    age : 21
}

for(let a in c3) //a = keys 
{
    console.log(c3[a]);//using keys access values
    
}

console.log("for__of");
//for__of (same as to foreach) 
let aa = [1,2,3,4,5];

for(let a in aa)
{
    console.log(a);
    
}

//Activity no 9:how to use forEach,filter and map function in js
 
//forEach 
//forEach not return any value ,used to print upadate
//store data somwhere
//ex:sum of array
console.log("forEach");

let prices1 = [100,414,88,51,35];
let sum = 0;
prices1.forEach(function(n){
    sum+=n;
})
console.log(sum);

//map:return values and used to update array
//syntax:.map((value.index,array)=>{....});
//ex:add tax on prices
console.log("map");

let prices2 = [244,666,75,45,90];

prices2 = prices2.map(n=>n+(n*18/100));
console.log(prices2);

//filter :when check condition and create new array use this
//syntax:.filter((value.index,array)=>{....});
//ex:Filter prices greater than 100
console.log("filter");

let prices3 = [34,56,788,999,10];
let g =[];
g = prices3.filter(price=>price>100);
console.log(g);

//Activity no 10:how to use reduce method and fun in js
//reduce method:
/*array.reduce(function (accumulator, currentValue) {
  return updatedAccumulator;
}, initialValue);
--accumulator → stores the result
--currentValue → current array element
--initialValue → starting value of accumulator*/

//ex:maximum no.
console.log("maximum no.");

let num = [45,6,3,25,78];

let max = num.reduce((m,n)=>
{
    return n>m?n:m;
},num[0])

console.log(max);

























 