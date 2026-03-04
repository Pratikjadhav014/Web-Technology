
const sentence = document.getElementById("sentence").innerText.trim();

const inputBox = document.getElementById("inputBox");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

let startTime = null;
let endTime = null;

inputBox.addEventListener("input", function () {

    if (!startTime) {
        startTime = new Date().getTime();
    }

    const typedText = inputBox.value.trim();

    
    if (typedText.toLowerCase() === sentence.toLowerCase()) {

        endTime = new Date().getTime();

        let timeTaken = (endTime - startTime) / 1000; 
        let words = sentence.split(" ").length;
        let speed = Math.round((words / timeTaken) * 60); 

        result.innerHTML = `
            Time Taken: ${timeTaken.toFixed(2)} seconds <br>
            Typing Speed: ${speed} words per minute
        `;
    }
});

resetBtn.addEventListener("click", function () {
    inputBox.value = "";
    result.innerHTML = "";
    startTime = null;
    endTime = null;
});