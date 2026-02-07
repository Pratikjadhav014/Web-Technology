
//for,while,do while same as like other languages (c,c++,java)

//for __ in loop
//-used to access value using key means used to access object values

const a = {
    name : "pratik",
    age : 22,
    email  : "abc@gmail.com"
}

for(let l in a)
{
    console.log(l);//return keys

    console.log(a[l]);//returns values
}

//for __ of loop
//-same as like forEach loop(not need of increment decrement
// operators and condition),used to access array

b = [1,2,3,4];

for(let i of b)
{
    console.log(i);
}
