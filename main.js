
/*Exercise1 */
let animal1 = "Cat";
let animal2 = "Dog";
let animal3 = "Turtle";
let animal4 = "Tiger";
let animal5 = "dolphin";

document.getElementById("exercises").innerHTML += `<h2>Animals</h2>${animal1} <br> ${animal2}<br> ${animal3}<br> ${animal4}<br> ${animal5}`;


/*Exercise2 */
let operator = 49 + 20 - 19;


document.getElementById("exercises").innerHTML += `<h2>Operator</h2>
result(49+20-19) = ${operator}`;

/*Exercise3 */
let x=30;
let y=20;
let z=10;
let result = x+y*z;

document.getElementById("exercises").innerHTML += `<h2>Using Variables</h2>
result(30+20*10) = ${result}`;

/*Exercise4 */

document.getElementById("exercises").innerHTML += `<h2>Function</h2>
result(40+20-10) = ${myFunction()}`;

function myFunction() {
	return 40+20-10;
}


/*Exercise5 */
document.getElementById("buttonClick").onclick = function() {
	document.getElementById("exercise5").innerHTML = `<h4>Call It</h4>`;
};
