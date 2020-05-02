var css =document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("generator");
// console.log(css);
// console.log(color1);
// console.log(body);

function setinputcolor()
{
color1.value ="#ff0023";
color2.value ="#ffff00";
}
setinputcolor();

function getRandomColor(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i=0;i<6;i++){
		color+=letters[Math.floor(Math.random()*16)];
	}
	return color;
}


function randomColor(){
	color1.value=getRandomColor();
	color2.value=getRandomColor();
	setGradient();
}
css.textContent="linear-gradient(to right, "
								  +color1.value
								  +", "
								  +color2.value
								  +")";

function setGradient(){
	body.style.background =  "linear-gradient(to right, "
								  +color1.value
								  +", "
								  +color2.value
								  +")";

	css.textContent= body.style.background+":";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

btn.addEventListener("click",randomColor);