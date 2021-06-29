// Events
// click
// what is event --> Triggering an action

// start --> engine
//

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
// moverLeave

// form Event
// blur() --> when you are leaving a particular input field
// focus()
// onchange()
// reset

// Page Events

// resize

let lastName = document.getElementById("lastName");

lastName.onfocus = function () {
  lastName.value = "Focus is here";
};

lastName.onblur = function () {
  lastName.value = "user left";
};
lastName.onchange = function () {
  console.log(lastName.value);
};
// Blocking code --> Synchronous 
// non blocking code --> asynchronous
// what code we need to make asynchronous


window.onresize = function () {
  let height = document.getElementById("height");
  let width = document.getElementById("width");

  height.innerText = window.innerHeight;
  width.innerText = window.innerWidth;
};

let firstName = document.getElementById("firstName");
firstName.addEventListener("keypress", function () {
  console.log("Keypressed");
});

// keyboard events
// keypress -> deprecated

// mouseEvent
//  mouseover
// mouseleave
// mousemove

let container = document.getElementById("container");

// container.addEventListener("mouseover", function () {
//   container.style.backgroundColor = "red";
// });

let colors = ["orange", "yello", "pink", "#ccc", "#00ff00", "#0000ff"];

let index = 0;
container.addEventListener("mousemove", function () {
  if (index < colors.length) {
    container.style.backgroundColor = colors[index];
    index++;
  } else {
    index = 0;
  }
});
