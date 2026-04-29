

//task 1:
const ele = document.getElementById("title");
//const ele = document.getElementsByClassName("main");
//const ele = document.getElementsByTagName("h1");
//const ele = document.querySelector("title/main/tagname(h1,p,div)");any one 
//const ele = document.querySelector("#title");

// task 2:
console.log(ele.id);
console.log(ele.className);
console.log(ele.textContent);
console.log(ele.tagName);

//task 3:PROPERTIES

//task 3a:tagName
console.log(ele.tagName);//find tag name of element

//task 3b:innerHTML
console.log(ele.innerHTML);

//task 3c:innerHTML & innerText
const para = document.querySelector("p");
para.innerHTML += `<br>DOM stands for <b>Document object model</b>`;
console.log(para.innerText);

//task 3d:innertext & innerContent
const para1 = document.querySelector("p");
para1.innerHTML += `<span style="display:none;">Hidden</span>`;
console.log(para1.textContent);//o/p:hidden -> not you can see directly on webpage.
console.log(para1.innerHTML);//o/p:<span style="display:none;">Hidden</span>

//firstChild - lastChild - children[i]

//firstChild
const parent1 = document.getElementById("node1");
console.log(parent1.firstChild);//return text node 

const parent2 = document.getElementById("node2");
console.log(parent2.firstChild);//return element node

//last child
const parent3 = document.getElementById("node2");
console.log(parent3.lastChild);//return element node

//children[i] - only return element node
const parent4 = document.getElementById("childs");
console.log(parent4.children[0]);
console.log(parent4.children[1]);
console.log(parent4.children[2]);//undefined :third not in this childs.

//DOM part 2

// Attributes

//getAttribute(attr);
const para2 = document.querySelector("div");//return first div in html code
console.log(para2.getAttribute("id"));//return childs

//setAttribute(attr);
para2.setAttribute("id","childNodes");
console.log(para2.getAttribute("id"));//return childNodes
console.log(para2.innerHTML);

//Style

//insert new element (four types to add or insert element)

//Create an element that needs to be inserted into the selected node.
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

//select node that you fit your element
const para3 = document.querySelector("#childNodes");

//node.append(element)
para3.append(newBtn);
console.log(para3.innerHTML);

//node.prepend(element)
para3.prepend(newBtn);
console.log(para3.innerHTML);

//node.before(element)
const body = document.querySelector("body");
para3.before(newBtn);
console.log(body.innerHTML);

//node.after(element)
para3.after(newBtn);
console.log(body.innerHTML);

//delete node
const para4 = document.querySelector("p");
para4.remove();
console.log(body.innerHTML);

//delete & add child node

//delete child node
const parent = document.querySelector("#childNodes");
const child = document.querySelector("#node1");
parent.removeChild(child);
console.log(para3.innerHTML);

//add child node
let a = document.createElement("div");
a.textContent = "childNodes";
a.setAttribute("class","node3");

parent.appendChild(a);
console.log(para3.innerHTML);





















