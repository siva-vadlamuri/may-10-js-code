// es6 OOP
class Book {
  constructor(nameOfTheBook, author, yearOfRealse, priceOfTheBook) {
    this.nameOfTheBook = nameOfTheBook;
    this.author = author;
    this.yearOfRealse = yearOfRealse;
    this.priceOfTheBook = priceOfTheBook;
  }

  getCompleteDetails() {
    return `The Name Of The book is ${this.nameOfTheBook} and author ${this.author} and book was released on ${this.yearOfRealse}, price of the book is ${this.priceOfTheBook}`;
  }
}

// Properties and Methods

// intization
let book1 = new Book("5 AM Club", "some Author", 2009, 300);
let book2 = new Book("Rich Dad, Poor Dad", "some Author", 2010, 400);
// console.log(book1.getCompleteDetails());
// console.log(book2.getCompleteDetails());

// this keyword will point to currect object

// When you creating an Object created, constructor will invoke,
// It will inject the values to the object

// A blueprint of an Object

// Inheritance
// magazine

// Month
// Single leve inheritance
class Magazine extends Book {
  constructor(
    magazineName,
    author,
    realaseYear,
    priceOfTheMagazine,
    monthOfMagazine
  ) {
    super(magazineName, author, realaseYear, priceOfTheMagazine);
    this.monthOfMagazine = monthOfMagazine;
  }
  // Method Overriding
  getTheMonthOfTheMagazine() {
    return `the month of the magazine is ${this.monthOfMagazine}`;
  }
}

// super will call parent class constructor
let magazine1 = new Magazine("GM Magazine", "Some Author", 2020, 100, "june");
// console.log(magazine1.getCompleteDetails());
// console.log(magazine1.getTheMonthOfTheMagazine());

// expection handling
// running the code you will error
// syntax error, logical errors

try {
  let divisionOfNumber;
  divisionOfNumber = 10 / 0;
  console.log(divisionOfNumber);
} catch (e) {
  console.log("Error Occured");
}

getData = async () => {
  try {
    let data = await fetch("https://type.");
  } catch {
    console.log("Error");
  }
};
