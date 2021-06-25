let myName = "Mr Sharma";
var address = "Hyderbad";
// +=, -=, *=, /= %=
//  myName
// myName+= "Varma";
// myName = myName + "Varma"
// comparasion Operators

// ==, ===, <=,>=,<,>,!=

// for all the varibale which you declared javascript will assign undefined

// debugger;
// let a = 10;

// if(a===10){

// }

// logical
// &&, || , !

// ternary Operators
// (condtion)? statement1 : statement2

// condtional statement

// a,b,c the higgest number

// if(true) {

// }
// else{

// }

let i = 10;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// function is nothing but set of statements which will execute a specfic task.

// function calculateSum(a, b, mulitply) {
//   if (a + b == 30) {
//     mulitply(a, b);
//   } else {
//     console.log("The result is not 30");
//   }
// }

// function multiplyTwoNumber(a, b) {
//   console.log(a * b);
// }
// calculateSum(10, 40, multiplyTwoNumber);

// if you pass an function to another function as an argument is called call backfunction

// different types of functions
// --> function with parameters
// function without parameters
// function with return statement
// anonomous function
// self execution function
// call back  function
// higher order function

function myFunc() {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result += i;
  }
  return result;
}
myFunc();

let finalResult = myFunc();
console.log(finalResult);

// let myButton = document.getElementById("myButton");

// myButton.addEventListener("click", function () {
//   alert("Button was clicked");
// });

// myButton.addEventListener("dbclick", function () {
//   alert("Double Clicked");
// });

// function which does not have the name is called anonomous function

// self execution function
// function which invoking itself

// (function(){
// alert('I am an self invoking function')
// })()

// var is a global scope or function scope
// let, const are blocked scope

// if (true) {
//   let result = 10;
// }
// console.log(result);

var phoneNumber = 99999999;
// var --> 2014
// let, const --> 2015

// function ourFunc() {
//   var address = "Bangalore";
//   email = "achieversitsol@gmail.com";
//   if (true) {
//     console.log(address);
//   }
// }
// console.log(email);
(function () {
  var a = (b = 3);
})();
console.log(typeof b !== "undefined");
console.log(typeof a !== "undefined");
// document.getElementById("submit").addEventListener("click", function (e) {
//   e.preventDefault();
//   let username = document.getElementById("username");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//   validateTheForm(username, email, password);
// });

// function validateTheForm(username, email, password) {
//   if (username.value == "") {
//     // alert("Error Occured");
//     let usernameErr = document.getElementById("usernameErr");
//     usernameErr.innerText = "username cannot be less than 4";
//     usernameErr.style.color = "red";
//   }
//   if (email.value == "" || !email.value.includes("@")) {
//     let emailErr = document.getElementById("emailErr");
//     emailErr.innerText = "username cannot be less than 4";
//     emailErr.style.color = "red";
//   }
//   if (password.value == "") {
//     // alert("Error Occured");
//     let passwordErr = document.getElementById("passwordErr");
//     passwordErr.innerText = "username cannot be less than 4";
//     passwordErr.style.color = "red";
//   }
//   if (username.value == "") {
//     // alert("Error Occured");
//     let usernameErr = document.getElementById("usernameErr");
//     usernameErr.innerText = "username cannot be less than 4";
//     usernameErr.style.color = "red";
//   }
// }
