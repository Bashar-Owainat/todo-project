'use strict';

var name = prompt("Enter your name");

var gender = prompt("Enter you gender. Please write male/female");
var prefix;
if (gender === "female") {
    prefix = "Mrs";
}
else if (gender === "male") {
    prefix = "Mr";
}
else {
    prefix = "";
}

var age = prompt("Enter you age");

if (age < 0) {
    alert("Your age is less than zero ");
}
else if (age > 0) {
    alert("Your age is greater than zero ");
}
else {
    alert("Your age is zero");
}

var skipConfirm = confirm("Do you want to skip welcoming messages");

console.log(skipConfirm);

if (skipConfirm === false) {
    alert(`Welcome ${prefix} ${name}  `);
}