// let fruits = [];

// const displayFruit = function (fruits) {
//   let output = `<div><ul>`;
//   for (let fruit of fruits) {
//     output += `<li> ${fruit} </li> `;
//   }
//   output += `</ul></div>`;
//   document.getElementById("result").innerHTML = output;
// };

// const addFruit = function (fruit) {
//   if (fruit.length > 2) {
//     fruits.push(fruit);
//     displayFruit(fruits);
//   }
// };

// document.getElementById("addFruit").addEventListener("click", () => {
//   let fruit = document.getElementById("fruit").value;
//   addFruit(fruit);
// });

// Defination: An array is a collection of items which stores the data in contiginous memory location
// array is datastructure
let firstNumber = 234;

let courses = [
  "Ui Training",
  "React Js Training",
  "Angular Training",
  "AWS",
  "DevOps",
  "Full stack",
  "Mern Stack",
];

// array indexs starts from 0

// how retrive the data from an array
// console.log(courses.length);

// for (let index = 0; index < courses.length; index++) {

//   console.log(courses[index]);
// }
// arr.length

let numbers = [23, 45, 67, 78];
// console.log(numbers.sort());

// 45 is there not

// console.log(numbers.indexOf(67));

// indexOf
// include

// console.log(numbers.includes(99));



// console.log(studentNames.sort());

// push or pop
// stack
// principle of stack  is Last in first out
// or first in last out

// studentNames.push("sujith");

// // console.log(studentNames);

// studentNames.pop();
// console.log(studentNames);

// studentNames.unshift("sujith");

// console.log(studentNames);

// studentNames.shift("sujith");
// console.log(studentNames);

// slice and splice

let newArray = [34, 56, 78, 90, 99, 89, 76, 56];

// let finalArr = newArray.slice(1, 5);
// console.log(finalArr);

// newArray.splice(2, 0, 999,888,777);
// newArray.splice(2,1);
// console.log(newArray);

// concat
// fill
// join

let firstArr = [12,45,67];
let secondArr = [34,89,99];

let finalArr = firstArr.concat(secondArr);
console.log(finalArr);

let studentNames = ["Lohit", "shiva", "Rani", "Adharsh", "Pavani"];

console.log(studentNames);
let finalStr = studentNames.join('-');
// console.log(typeof finalStr)

let arr = [];
let nemoArr = Array(10);
// console.log(nemoArr.length)
nemoArr.fill('nemo');
console.log(nemoArr);
