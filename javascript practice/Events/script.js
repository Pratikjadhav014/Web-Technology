//add button inside the body
const para = document.querySelector("body");
const btn = document.createElement("button");
btn.innerText = "click me!";
para.append(btn);

//basic way to create event.
// btn.onclick=()=>{
//     console.log("button clicked");
// }

// btn.onclick = () =>{
//     btn.style.color = "blue";
//      console.log("button clicked");
// }

//classlist use to handle DOM needed css in css file 
// btn.onclick = () =>{
//     btn.classList.add("c");
//     console.log("button clicked");
// }

//Event object

btn.onclick = (evt) =>{
    
    console.log(evt);//return all about event like DOM
    console.log(evt.type);//click
    console.log(evt.target);//return element
      
}

//event listeners

//click event
 const btn1 = document.querySelector(".btn1");
     btn1.addEventListener("click",()=>{
      console.log("button 1 clicked.");
    
 })

//enter event
btn1.addEventListener("keydown",(evt)=>{
    if(evt.key == "Enter")
    {
        console.log("button 1 clicked.");
    }
    
})

// add event or remove

//add with easy way 
const btn2 = document.querySelector("#btn2");
const handler = () =>{
    console.log("button 2 clicked.");
    
}

btn2.addEventListener("click",handler);

//remove event
btn2.removeEventListener("click",handler);//not delete button only delete event 
