var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function changeBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}
''
function reSet() {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	changeBackground();
}

reSet();

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);