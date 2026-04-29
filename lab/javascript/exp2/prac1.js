//1:declare array ,object and function with example
//2:find largest no in array
//3:fing reverse no in string
//4:check palindrome in string 
//5:fibonacci series 
//6:count vowel in string 
//7:remove duplicate no in array
//8:function to find even or odd
//9:write a code for sum of array
//10:use of spread operator

// activity no 1 
//array
console.log("Activity no 1");

let ar = [1,23,34,45];
console.log(ar);
document.writeln(ar,"<br>");
console.log(typeof(ar));
document.writeln(typeof(ar),"<br>");

//objects
let obj = 
{
    name : "thor",
    id : 265
}
console.log(obj);
document.writeln(JSON.stringify(obj),"<br>");
console.log(typeof(obj));
document.writeln(typeof(obj),"<br>");
console.log(obj.name);
document.writeln(obj.name,"<br>");
console.log(obj["name"]);
document.writeln(obj["name"],"<br>");

//function 
function greet(x)
{
    console.log(x);
    document.writeln(x,"<br>");
}

greet("pratik");

//Activity no 2:find largest no in array
let arr = [1,5,7,9,23,5];
let max = 0;
for(let a of arr)
{
    if(max<a)
    {
        max=a;
    }
}
console.log("max no of arr :"+max);
document.writeln("max no of arr :"+max,"<br>");

//IMP-console.log(typeof(undefined));-> undefined//

//Activity no 3:fing reverse no in string

//activity no 4:check palindrome in string

let pal = "121";
let count = 0;
console.log(pal.length);
document.writeln(pal.length,"<br>");
let n = pal.length-1;

for(let i=0;i<pal.length;i++)
{
    if(pal[i]==pal[n])
    {
        count++;
    }
   n--;
}
if(count ==pal.length)
{
    console.log("palindrome");
    document.writeln("palindrome","<br>");
}
else
{
    console.log("not palindrome");
    document.writeln("not palindrome","<br>");
}

//Activity no 5:fibonacci series

let fa = [];
fa[0] = 0;
fa[1] = 1;

for(let i=2;i<7;i++)
{
     fa[i] = fa[i-1]+fa[i-2];
}

for(let i=0;i<7;i++)
{
     console.log(fa[i]);
     document.writeln(fa[i],"<br>");
}

//Activity no 6:count vowel in string

let c = "pratik"
let count2 = 0;
for(let i=0;i<c.length;i++)
{
    if(c.charAt(i)=='a'||c.charAt(i)=='e'||c.charAt(i)=='i'||c.charAt(i)=='o'||c.charAt(i)=='u')
    {
        count2++;
    }
}
console.log(count2);
document.writeln(count2,"<br>");

//Activity no 7:remove duplicate no in array
console.log("Activity no 6");
document.writeln("Activity no 6","<br>");

//using set 
console.log("using set");
document.writeln("using set","<br>");

let s = [1,2,3,4,3,2,1];

let unique = [...new Set(s)];
console.log(unique);
document.writeln(unique,"<br>");

unique.forEach(num=>{
    console.log(num)
    document.writeln(num,"<br>");
})

//brute force approach
console.log("brute force approach");
document.writeln("brute force approach","<br>");

let uni = []

for(let i=0;i<s.length;i++)
{
    if(!uni.includes(s[i]))
    {
        uni.push(s[i]);
    }
}

console.log(uni);
document.writeln(uni,"<br>");

//Activity no 8:function to find even or odd
console.log("function to find even or odd");
document.writeln("function to find even or odd","<br>");

let ea = 7;

evenOrOdd(ea);

function evenOrOdd(a)
{
     console.log(a%2==0?"even":"odd");
     document.writeln(a%2==0?"even":"odd","<br>");
}

//Activity no 9:write a code for sum of array

let ss = [4,5,6,3,2];
let sum = 0;
ss.forEach(a=>{
    sum+=a;
})
console.log(sum);
document.writeln(sum,"<br>");

//Activity no 10:use of spread operator

console.log("Spread operator as function arguments");
document.writeln("Spread operator as function arguments","<br>");

function f(a,b,c)
{
   console.log(a+b+c);
   document.writeln(a+b+c,"<br>");
}

let sp =[1,3,5];
f(...sp);

//
console.log("Spread with Math.max()");
document.writeln("Spread with Math.max()","<br>");

let spr = [5,7,8,4,5];

let m = Math.max(...spr);
console.log(m);
document.writeln(m,"<br>");

//Spread inside function call
console.log("Spread inside function call");
document.writeln("Spread inside function call","<br>");

function show(a,b)
{
    console.log(a>b?"a is greater":"b is greater");
    document.writeln(a>b?"a is greater":"b is greater","<br>");
}

let xl = [2,3];
show(...xl);