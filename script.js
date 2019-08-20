var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	h3.textContent = body.style.background + ";";
}

function getRandom() {
  return '#' + (function co(ran) {
		return (ran +=
			[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
			&& (ran.length == 6) ? ran : co(ran);
	})('');
};

function randomize() {
  color1.value = getRandom();
  color2.value = getRandom();
  setGradient();
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
window.addEventListener("load", randomize);
btn.addEventListener("click", randomize);