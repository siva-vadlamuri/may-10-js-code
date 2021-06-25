// Storage Techniques
// variable
// Arrays ['name1','Apple','Microsoft']

// Objects
// ecomerce Application

// let productList = [];
let userData = {
  firstName: "Mr",
  lastName: "Sharma",
  phoneNumber: 9999999999,
  address: "Bangalore",
  isLoggedInWithGoogle: false,
  productList: [],
  addToCart: function (product) {
    this.productList.push(product);
  },
  productPurchased : function(){
      return this.productList.length;

  }
};

userData.addToCart('iphone-x');
userData.addToCart("Lenovo-A7000");
userData.addToCart("t-shirts");

console.table(userData);

// console.log(userData);
console.log(userData.productPurchased())
// Array [2,4,6,7];

// arr[0]
// console.log(userData.firstName);



// What is DOM?
// Document Object Model
// How to Access Elements In DOM?
