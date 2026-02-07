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
let ar = [1,23,34,45];
console.log(ar);
console.log(typeof(ar));

//objects
let obj = 
{
    name : "thor",
    id : 265
}
console.log(obj);
console.log(typeof(obj));
console.log(obj.name);
console.log(obj["name"]);

//function 
function greet(x)
{
    console.log(x);
    
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

//IMP-console.log(typeof(undefined));-> undefined//

//Activity no 3:fing reverse no in string

//activity no 4:check palindrome in string

let pal = "121";
let count = 0;
console.log(pal.length);
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
}
else
{
    console.log("not palindrome");
    
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

//Activity no 7:remove duplicate no in array
console.log("Activity no 6");

//using set 
console.log("using set");

let s = [1,2,3,4,3,2,1];

let unique = [...new Set(s)];//...->spread operator:takes value from arr 
console.log(unique);

unique.forEach(num=>{
    console.log(num)

})

//brute force approach
console.log("brute force approach");

let uni = []

for(let i=0;i<s.length;i++)
{
    if(!uni.includes(s[i]))
    {
        uni.push(s[i]);
    }
}

console.log(uni);

//Activity no 8:function to find even or odd
console.log("function to find even or odd");

let ea = 7;

evenOrOdd(ea);

function evenOrOdd(a)
{
     console.log(a%2==0?"even":"odd");
}

//Activity no 9:write a code for sum of array

let ss = [4,5,6,3,2];
let sum = 0;
ss.forEach(a=>{
    sum+=a;
})
console.log(sum);

//Activity no 10:use of spraed operator

console.log("Spread operator as function arguments");

function f(a,b,c)
{
   console.log(a+b+c);
   
}

let sp =[1,3,5];
f(...sp);

//
console.log("Spread with Math.max()");

let spr = [5,7,8,4,5];

let m = Math.max(...spr);
console.log(m);

//Spread inside function call
console.log("Spread inside function call");

function show(a,b)
{
    console.log(a>b?"a is greater":"b is greater");
}

let xl = [2,3];
show(...xl);
















