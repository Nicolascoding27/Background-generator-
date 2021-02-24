var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body=document.getElementById("gradient");
var button=document.getElementById("random");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
function setGradient2() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ "red" 
	+ ", " 
	+ "yellow" 
	+ ")";

	css.textContent = body.style.background + ";";
}
function randomNumbers(){ //Generate 2 random numbers to change the value of the colors
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var m = Math.floor(Math.random() * 256);
    var q = Math.floor(Math.random() * 256);
    var p = Math.floor(Math.random() * 256);
    var bgColor2 = "rgb(" + m + "," + q + "," + p + ")";
    body.style.background = 
	"linear-gradient(to right, " 
	+ bgColor
	+ ", " 
	+ bgColor2
	+ ")";
	css.textContent = body.style.background + ";";
}
 setGradient2()
    // document.body.style.background = bgColor;
button.addEventListener("click",randomNumbers)
// color1.addEventListener("input",setGradient)
color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)
// color1.addEventListener("input",function(){
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// })