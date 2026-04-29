let URL = "https://jsonplaceholder.typicode.com/posts";

//fetch method by post request
//our url is demo url so it is dont store data in thier data when we send post request.
const postData = async () => {
     const response = await fetch(URL, {
          method: "POST",
          headers: {
               "Content-Type": "application/json"//tells server data format
          },
          body: JSON.stringify({
               userId: 11,
               id: 1,
               title: "This is my post"
               
          })
     });
     const data = await response.json();
     console.log(data);
}
postData();


//get data by fetch method
let d = document.querySelector("#title")

let btn = document.querySelector("#btn");



const getData = async () => {
     let response = await fetch(URL);
     console.log(response);//json format

     let data = await response.json();
     console.log(data);
     

}

document.addEventListener("click", getData);