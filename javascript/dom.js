// getElementById() id is unique
// getElementsByClassName()
// getElementsByName()
// getElementsByTagName()
// querySelector('#title')
// querySelectorAll()

// step-1
// we need to select particular element
// write your html
// append back to html
// difference between innerText and innerHtml
// difference between append and appendChild
// createElement
// remove()
// removeChild()
// getAttribute()
// setAttribute()
// removeAttribute()
// className
// style.color
// style.backgroundColor
// addEventListner()

// let result = document.getElementById("result");

// document.write('<h1>Hello world</h1')

// result.innerHTML = dynamicHtml;
// appendChild;

let body = document.body;

let div = document.createElement("div");
let strong = document.createElement("strong");
strong.innerText = "Hello world";
div.appendChild(strong);
body.appendChild(div);

let span = document.createElement("span");
span.innerText = "Hello";

body.appendChild(span);

let title = document.querySelector("div");
console.log(title.getAttribute("title"));
title.setAttribute("id", "myTitle");
title.className = "ourTitle";
