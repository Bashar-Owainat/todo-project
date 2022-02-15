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

if (skipConfirm === true) {
    alert(`Welcome ${prefix} ${name}  `);
}
else{

    function askUser1() {
        let answer = prompt("Do you love programming?");
        return answer;
    }
    function askUser2() {
        let answer = prompt("Are you a student?");
        return answer;
    }
    function askUser3() {
        let answer = prompt("Do you love reading books?");
        return answer;
    }
    
    function checkIfValid(response){
        if(response ===""){
            alert("Invalid!");
        }
    }
    let arrResponses = [];
    
    let response1 = askUser1();
    arrResponses.push(response1);
    checkIfValid(response1);
    
    let response2 = askUser2();
    arrResponses.push(response2);
    checkIfValid(response2);
    
    let response3 = askUser3();
    arrResponses.push(response3);
    checkIfValid(response3);
    
    function printArr(arr){
        for(let i = 0; i < arr.length; i++){
            console.log(`response ${i}: ${arr[i]}`);
        }
    }
    
    printArr(arrResponses);
    
}
