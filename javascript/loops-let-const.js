// create an application with following rules
// admin get full access
// subadmin get access to add or delete courses
// testprep gets access to create tests or delete tests
// user     who consumes the content of the website

// let userPart = "admin";
// switch (userPart) {
//   case "admin":
//     console.log(" admin get full access ");
//     break;

//   // break is nothing but it terminate and exit of the block of code
//   case "subadmin":
//     console.log("get access to add or delete courses ");
//     break;

//   case "testprep":
//     console.log("gets access to create tests or delete tests");
//     break;

//   case "user":
//     console.log("who consumes the content of the website ");
//     break;

//   default:
//     console.log("random user for a website ");
//     break;
// }

// let, var, const

// var es5
// let and const in es6 or 2015
// they are block scoped variable

// var someNumber = 234;
// var someNumber = 3456;

let phoneNumber;
phoneNumber = 99999;
phoneNumber = 7659999;

// const is nothing but you change the value or re assign the value;
const pi = 3.14;

// var
// we can redeclare the variable and reassign

// let
// we cannot redeclare but we can reassign

// const
// we cannot redeclare and we cannot reassign the values

// for(intitalize;condtion;increment/decrement){}
// i want to print 1-10 numbers

// for (let i = 0; i >= 1; i--) {
//   console.log(i);
// }

//  10 * 1 = 10
// let tableNumber = 5;
// for (let i = 1; i <= 20; i++) {
// //   console.log(tableNumber + " * " + +i + " = " + tableNumber * i);
// }
// all the even numbers from 1 -100

let someNumber = 1;

// while(someNumber<10){
//     console.log(someNumber);
//     someNumber++;

// }

// for, while loop
// for , while  is entry controled loop
// do while is exit controled loop

do {
  console.log(someNumber);
  someNumber++;
} while (false);

// do while will execute atleast once if your condtion is wrong
