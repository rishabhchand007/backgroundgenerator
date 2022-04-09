var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("bod");
var textbox = document.getElementById("generated");

function colorChanger(){
    body.style.background = "linear-gradient(to right, " + color1.value
    +", "+color2.value+")";
    textbox.innerHTML="background: " + body.style.background
}
function toRight(){
    body.style.background = "linear-gradient(to right, " + color1.value
    +", "+color2.value+")";
    textbox.innerHTML="background: " + body.style.background
}
function toLeft(){
    body.style.background = "linear-gradient(to left, " + color1.value
    +", "+color2.value+")";
    textbox.innerHTML="background: " + body.style.background
}



color1.addEventListener("input", colorChanger);
color2.addEventListener("input", colorChanger);