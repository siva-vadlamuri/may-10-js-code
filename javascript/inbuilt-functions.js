// // Global Execution context
// // 1) it will collect all the variables it will assign undefined
// // 2) it will store all the function declaration code

// // Execution context

// // Hoisting
// // setInterval()
// // setTimeout()
// // Date()

// // Hoisting : It is mechanism in JavaScript which we can access the variable or
// // function before declaration

// // Context --> Every Code in JavaScript will run on this context

// startTheCar();
// console.log(myCarName);
// console.log(myNumber);
// var myCarName = "tesla";

// var carModel = "Model x";

// function startTheCar() {
//   let startButton = false;
//   console.log("Car is started");
// }

// let stopTheCar = function () {
//   let stopButton = false;
//   console.log("car has been stopped");
// };
// stopTheCar();

// difference between function declartion and function expression
// hoisting

// setTimeOut()
// setInterval()

// setTimeout(function () {
//   alert("2 seconds finished");
// }, 2000);
// let i = 0;
// clearTimeout()
// setInterval(function myFunc() {
//     console.log(i);
//     i++;
//     if(i==10){

//     }
// },2000)

// step-1 collect images of tesla car
// step-2 we store all the images in an array
// step-3 we select a particular item in DOM
// step-4 we will setInterval of 2sec in

// const cars = document.getElementById("cars");

// let teslaCars = [
//   "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
//   "https://images.unsplash.com/photo-1619845146106-38abf07e9c99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=851&q=80",
//   "https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
//   "https://images.unsplash.com/photo-1541446654331-def41325e92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
// ];
// let i = 0;
// 1 -1 = 0
// let left = document.getElementById('left')
// left.addEventListner('click',function(){

// })

// setInterval(function () {
//   if (i < teslaCars.length) {
//     cars.src = teslaCars[i];
//     i++;
//   } else {
//     i = 0;
//   }
// }, 2000);

// Date
// Math
// Event

let d = new Date();
// day
// date
// year
// time

// console.log(d);
// how to get the day
// year
// month

// console.log();
let dateNum = d.getDay();
function convertToDay(dateNum) {
  if (dateNum == 1) {
    return "Monday";
  } else if (dateNum == 2) {
    return "Tuesday";
  } else if (dateNum == 3) {
    return "Wednesday";
  } else if (dateNum == 4) {
    return "Thursday";
  }
}

let completeDay = convertToDay(dateNum);
// console.log(completeDay);

// console.log(` ${d.getDate()}/ ${d.getMonth() + 1}/ ${d.getFullYear()} `);
// 1-12
// 0-11
// 6--> june it will 5+1

// Math Object

let arr = [23, 45, 67, 89, 90, 12, 76];
let highestValue = Math.max(23, 45, 67, 89, 90, 12, 76);
console.log(highestValue);

let lowestValue = Math.min(23, 45, 67, 89, 90, 12, 76);
console.log(lowestValue);

let randomNumber = Math.random() * 100000;
let floorRandomNumber = Math.floor(randomNumber);

// floor and ceil
125.7;
// 125
// 126
// console.log(Math.floor(125.7));
// console.log(Math.ceil(125.7));

// 0-1
// console.log(floorRandomNumber);

// create input field
// button --> generate an OTP
// click on the button it has call the function
// which will generate the 5 digit number
// the generate otp has to be placed in input filed

// Max
// Min
// random

// console.log(Math.sqrt(139));

// console.log(Math.pow(20, 10));

// Events
// click
// what is event --> Triggering an action

// Page Specific Events
// onload
// scroll
// resize

// Keyword event
// --keypress
// keydown
// keyup

// Mouse Events
// click
// dbclick
// mouseHover
// moverLever

// form Event
// blur() --> when you are leaving a particular input field
// focus()
// onchange()
// reset

// Page Events

// window.onload = function () {
//   alert("My Page is load");
// };

document.addEventListener("scroll", function () {
  rotateTheElement(window.scrollY);
});

function rotateTheElement(scrollY) {
  let pRotate = document.getElementById("rotate");
  pRotate.style.transform = `rotate(-${scrollY}deg)`;
}

document.onkeyup = function () {
  console.log("You pressed on keyup button");
};
