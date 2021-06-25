// // //  second method
// // let body = document.body;
// // // div
// // let div = document.createElement("div");
// // div.innerText = "Hello world";
// // body.append(div);

// // // difference between innerText and innerHtml

// // let div2 = document.createElement("div");
// // // div2.innerText = "<strong>Our Products</strong>";
// // div2.innerHTML = "<strong>Our Products</strong>";
// // body.append(div2);

// // // difference between append and appendChild

// // let span = document.createElement("span");
// // span.innerText = "I am span tag";

// // body.appendChild(span);

// // body.append("JavaScript Trainings");
// // // body.appendChild("Angular Trainings");

// // let products = document.querySelector("#products");
// // console.log(products.getAttribute("title"));

// // let unorderList = document.querySelector("ul");
// // unorderList.setAttribute("id", "product-list-items");
// // unorderList.setAttribute("title", "our products are");

// // let listItem = document.querySelector("li");
// // listItem.className = "ui_training_items";

// let heading = document.querySelector("h1");

// // heading.style.color = "cyan";

// let myButton = document.getElementById("myButton");

// // when you pass your function as an argument to anthoner function --> call back function
// myButton.addEventListener("click", function () {
//   heading.style.color = "cyan";
// });

// function myFunc() {
//   let myName = "shiva";
//   function innerFunc() {
//     console.log(myName);
//   }
//   return innerFunc;
// }

// let innerFunction = outerFun();
// innerFunction();

// {
//   let myName = "shiva";
//   {
//     let myName = "Rama";
//     console.log(myName);
//   }
// }

let normalFunc = function(){
console.log("Hello")
}

normalFunc();

let string;
 for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
     string += "*";
  }
  string += "\n";
 } 
 console.log(string);