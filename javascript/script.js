//  what is difference between / and %

//  / give you the
//  % will give you the reminder

var someNumber = 10;

// console.log(10/2)

// console.log(10%2);  // reminder

//  2)10(5
//    10
//    0

// ternary opertor

//  condtion ? statement 1 : statement 2

//   10>20 ? console.log('Yes it is true') : console.log('Not it is false');

// let result = 30 > 20 ? true : false;
// console.log(result);

// condtional Statrements

let anyNumber = 10;

//  popus in javascript
// alert
// prompt will input from the user
// confirm

// let userNumber = prompt("Please enter a number");

// let finalNumber = parseInt(userNumber);

// if (finalNumber % 2 == 0) {
//   console.log("it is an even number");
// } else {
//   console, log("it is an odd number");
// }

// console.log(typeof finalNumber);

//  >70 A grade , < 70 to 60 B ,  < 60 to 65 c ,  < 65 to 40 d , fail

let totalMarks = 76;

if (totalMarks >= 75) {
  console.log("AGrade");
} else if (totalMarks < 70 || totalMarks > 60) {
  console.log("B grade");
} else if (totalMarks < 60 || totalMarks > 55) {
  console.log("C Grade");
} else if (totalMarks < 55 || totalMarks > 50) {
  console.log("C Grade");
} else {
  console.log("Failed");
}

// let var and const
//  var is used to declare a variables , ES5
//  let and const came in es6 ES2015
// var myName = "shiva";
// firstName = "My Name";

if (true) {
  var myNumbers = 8888888;
}
console.log(myNumbers);
// let and const are block scoped variable
// scope is nothing but accessiblity

let objj = {
  id: 1,
  name: "Akash",
  age: 19,
  address: {
    Street: "6th Main ",
    location: "BTM Layout",
    nearBy: "BTM Water tank",
    locations: {
      longitude: "xxxxxxxxx",
      latitude: "xxxxxxxxxx",
    },
  },
};

const {
  address: { locations },
} = objj;
console.log(locations);

function useState(intital) {
  let state = intital;
  const setState = (data) => {
    this.state = data;
    return this.state;
  }; 
  return [state, setState];
}

const [state, setState] = useState(0);
console.log(state, setState);

let updatedValue = setState(10);
console.log(updatedValue);
// console.log(state);
