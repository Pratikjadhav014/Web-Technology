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
document.writeln("normal function","<br>");

function normal(a)
{
     console.log(a);  
     document.writeln(a,"<br>");
}
normal(3);

//Arrow function 
console.log("Arrow function ");
document.writeln("Arrow function ","<br>");

let arrow = (a)=>{console.log(a); document.writeln(a,"<br>");}
arrow(4);

//Activity no 2:this keyword ,why we use this keyword on 
//arrow function and simple function and if use ,why

//normal function with "this keyword"
console.log("normal function with this keyword");
document.writeln("normal function with this keyword","<br>");

let c1 = {
    name :"pratik",
    greet :function()
    {
        console.log(this.name);
        document.writeln(this.name,"<br>");
    }
}
c1.greet();

//Arrow function with this keyword
console.log("Arrow function with this keyword");
document.writeln("Arrow function with this keyword","<br>");

const c2 ={
    name : "pratik",
    greet:function()
    {
        const inner = ()=>{
            console.log(this.name);
            document.writeln(this.name,"<br>");
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
        document.writeln(this.name+" got "+mark,"<br>");
        });
    }
};
Student.printMarks();

//example no 2:arrow function with map
console.log("arrow function with map");
document.writeln("arrow function with map","<br>");

let m = [1,2,3,4];
let sq = m.map((n)=>n*n);
console.log(sq);
document.writeln(sq,"<br>");

//Activity no 4:write code for switch case with ex
console.log("write code for switch case with ex");
document.writeln("write code for switch case with ex","<br>");

let experience = 2;
let salary;

switch(experience)
{
    case 1:salary = 15000;break;
    case 2:salary = 25000;break;
    case 3:salary =  35000;break;
    default:
        console.log("let me think first then i will tell you.");
        document.writeln("let me think first then i will tell you.","<br>");
}
console.log("salary"+salary);
document.writeln("salary"+salary,"<br>");

//activity no 5:what we use truty and falsy values in js
console.log("what we use truty and falsy values in js");
document.writeln("what we use truty and falsy values in js","<br>");

console.log("ex 1:");
document.writeln("ex 1:","<br>");

let data = "";

if (!data) {
  console.log("No data found");
  document.writeln("No data found","<br>");
}

console.log("ex 2:");
document.writeln("ex 2:","<br>");

let name = "";
let defaultName = name || "Guest";

console.log(defaultName);
document.writeln(defaultName,"<br>");

console.log("ex 3:");
document.writeln("ex 3:","<br>");

//activity no 6:how to use ternary operater in js
console.log("how to use ternary operater in js");
document.writeln("how to use ternary operater in js","<br>");

let a = -4;
let np = a>0?"positive":"negative";
console.log(np);
document.writeln(np,"<br>");

//Activity no 7:write a code for how to use loops in array
console.log("write a code for how to use loops in array");
document.writeln("write a code for how to use loops in array","<br>");

console.log("prefix sum example:");
document.writeln("prefix sum example:","<br>");

let arr = [1,2,3,4,5];

for(let i=1;i<arr.length;i++)
{
      arr[i] = arr[i-1]+arr[i];
}
console.log(arr);
document.writeln(arr,"<br>");

//activity no 8:diff between for in and for of 
console.log("diff between for in and for of ");
document.writeln("diff between for in and for of ","<br>");

console.log("for__in");
document.writeln("for__in","<br>");

const c3 = {
    name : "pratik",
    age : 21
}

for(let a in c3)
{
    console.log(c3[a]);
    document.writeln(c3[a],"<br>");
}

console.log("for__of");
document.writeln("for__of","<br>");

let aa = [1,2,3,4,5];

for(let a in aa)
{
    console.log(a);
    document.writeln(a,"<br>");
}

//Activity no 9:how to use forEach,filter and map function in js
 
console.log("forEach");
document.writeln("forEach","<br>");

let prices1 = [100,414,88,51,35];
let sum = 0;
prices1.forEach(function(n){
    sum+=n;
})
console.log(sum);
document.writeln(sum,"<br>");

console.log("map");
document.writeln("map","<br>");

let prices2 = [244,666,75,45,90];
prices2 = prices2.map(n=>n+(n*18/100));
console.log(prices2);
document.writeln(prices2,"<br>");

console.log("filter");
document.writeln("filter","<br>");

let prices3 = [34,56,788,999,10];
let g =[];
g = prices3.filter(price=>price>100);
console.log(g);
document.writeln(g,"<br>");

//Activity no 10:how to use reduce method and fun in js

console.log("maximum no.");
document.writeln("maximum no.","<br>");

let num = [45,6,3,25,78];

let max = num.reduce((m,n)=>
{
    return n>m?n:m;
},num[0])

console.log(max);
document.writeln(max,"<br>");