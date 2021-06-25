// break, continue,
// alert, confirm, prompt
// strings and string methods
// peak of a number

// to break  the loop or exit of the loop or some condtions

// for (let i = 1; i <= 10; i++) {
//   if (i % 5 == 0) {
//     break;
//   } else {
//     console.log(i);
//   }
// }
// console.log("Loop Exited Succesfully using Break");

// continue skip the current iteration
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// let myName = "My Name  is Shiva";
// alert(myName);

// let userResult = confirm("Are you sure you want to delete the particular item");
// if (userResult) {
//   alert("Your item was deleted succesfully");
// } else {
//   alert("Not deleted");
// }
// crud
// create
// read
// updating
// deleting

// String and String Methods

// char  'a', 'b'
// string
let firstName = "Mr"; //literal way
// String : Group of Characters / Sequence of characters is called string
// console.log(typeof "a");

// How to declare a string as
//  Two ways to declare a string
// literal
// constructor

let lastName = String("Varma");
// let newArray = Array(10)
// console.log(lastName);

// ['A','C','i']

// console.log(institutionName[0]);
// for (let i = 0; i < institutionName.length; i++) {
//   console.log(institutionName[i]);
// }

// string Methods

// length ==> length of the string
// console.log(institutionName.length);
// charAt()
// concat()
// includes()
// indexOf()
// lasIndexOf()
// replace()
// replaceAll()
// search()
// toUpperCase()
// toLowerCase()
// trim()
// let emailId = "  achieversit@gmail.com  "

let institutionName = "AchieversIT";
// console.log(institutionName.charAt(3))
let lastTitle = " Trainings";

let finalString = institutionName.concat(lastTitle);
// console.log(finalString);

// let myEmailId = "achieversit";
// console.log(myEmailId.includes("@"));

// console.log(institutionName.indexOf('A')); //first
// console.log(institutionName.lastIndexOf("A"));

// let lastStr = finalString.replace("Trainings", "Training");
// console.log(lastStr);

// toUpperCase

// ''
// let capsString = myEmailId.toUpperCase();
// console.log(capsString);
// console.log(capsString.toLowerCase());

// trim
// trimStar
// " Sharma "
// let userName = " sharma ";
// console.log(userName.trim());
// split

let fileName = "lastphoto.doc";
let afterSplitOfFileName = fileName.split(".");
console.log(afterSplitOfFileName);
if (afterSplitOfFileName[1] === ("jpeg" || "png" || "pdf")) {
  console.log("File name is correct");
} else {
  console.log("Enter the files with the jpeg,png,pdf");
}

// BODMAS Rules

// peak
// let arr = [23,56,78,90,60,58]
// // for
// // condtion
// for(let i=1;i<arr.length-1;i++ ){
//   if(arr[i-1]<arr[i] && arr[i]> arr[i+1]){
//     console.log(arr[i]);
//   }
// }

// functions
// how to declare a function
// different types of functions

// display a welcome message to the user using javascript

// what is a function:
// function is block of code which will execute a one specific task

// function welcomeUser(userName) {
//   document.write("<h1> Welcome user  " + userName + "</h1>");
// }

// // function calling
// // invoking a function
// welcomeUser("user1");
// welcomeUser("user2");
// welcomeUser("user3");
// welcomeUser("user4");

let userId = "ait";
let password = "123456";
// parameters
// function declaration

// function login(user, password) {
//   if (user === "ait" && password === "123456") {
//     alert("Welcome to AchieversIT");
//   } else {
//     alert("Please enter a valid details");
//   }
// }
// login(userId, password);
// login("9globes", "123456");
// call by value
// arguments and parameters

// different types of functions
// 1 function with parameters
// 2 function without parameters
// 3 function with default parameters
// 4 function with return statement
// function without a name (ananomous function)
// variable function or function expression
// call back function
// Nested Function
// recurice function --> The function calling itself
// immediate invoking function

// 10%  ==> 10/100
let calculateDiscount = function (courseFee, discount = 10) {
  let finalResult = courseFee - (courseFee * discount) / 100;
  // console.log(finalResult);
};
calculateDiscount(20000, 20);

// what is different between function declare and function expression

// function without parameters

// function welcome(){

//   console.log('Function without parameters')
// }
// welcome()

// function with return statement

// let calculateSum = function (first, second, third) {
//   let sumOfNumbers = first + second + third;
//   return sumOfNumbers;
// };
// let finalResult = calculateSum(23, 46, 78);
// console.log(finalResult);

// self invoking function
// (function () {
//   alert("Pop up message");
// })();
let count = 0;
let totalEqualToTen = function (someArr, target) {
  for (let i = 0; i < someArr.length; i++) {
    for (let j = 0; j < someArr.length; j++) {
      // if (someArr[i] + someArr[j] == target) {
      //   console.log(someArr[i], someArr[j]);
      // }
      count++;
    }
  }

  // n2 ==> 6
};
let someArr = [12, 3, 6, 7, 11, 23];
let target = 10;
totalEqualToTen(someArr, target);
console.log(count);
