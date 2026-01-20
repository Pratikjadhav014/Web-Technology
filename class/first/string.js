let str1 = "haris";
console.log(typeof(str1));

//string interpolation 
console.log(`hello my name ${"pratik"}`);

const gameCount = new String("neyoo");

//find length of string
console.log(gameCount.length);

//convert to lower case
console.log(gameCount.toLowerCase);

//convert to upper case
console.log(gameCount.toUpperCase);

//find character at index
console.log(gameCount.charAt(2));

//find index of character 
console.log(gameCount.indexOf('e'));

//task : perform next String important inbuild function 

//trim unwanted spaces
let t = " akshay ";
console.log(t.trim());

//slicing
let s = "ajitdada";
console.log(s.slice(0,4));
console.log(s.slice(-4));

//slicing but (not allowed to use negative index)
let n = "rajthakre";
console.log(n.substring(0,3));
console.log(n.substring(3,9));

//replace the word in line 
let r = "battleground mobile india";
let r1 = r.replace("mobile","mobiles");
console.log(r1);

//if one word and sign is in line multiple times ,use replaceAll.
let ra = "the top the dok the flash";
console.log(ra.replaceAll("the",","));

//check if string contains your value --return true or false
let i = "om is a hacker";
console.log(i.includes("hacker"));

//checking beggining or ending   --return true or false
let be = "jonathan";
console.log(be.startsWith("jo"));
console.log(be.endsWith("an"));

//convert string to array
let sp = "admino,scout,jonathan";
console.log(sp.split(","));//imp to give marks in to words to convert to array

//join word to string 
let w = "shriyash";
console.log(w.concat("jadhav"));
console.log(w.concat(" ","jadhav"));

//string print multiple time
let re  = "hi";
console.log(re.repeat(3));

