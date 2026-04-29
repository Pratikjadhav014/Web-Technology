function myfunction() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

document.getElementById("nameError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
document.getElementById("passwordError").innerHTML = "";


let isValid = true;

if (name === "") {
document.getElementById("nameError").innerHTML = "Please enter a name";
isValid = false;
}

if (email === "") {
document.getElementById("emailError").innerHTML = "Please enter an email";
isValid = false;
}       
 if (password === "") {
document.getElementById("passwordError").innerHTML = "Please enter a password";
isValid = false;
}
}

