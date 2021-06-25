// step-1 first we need to collect the data what users enters
//Step-2 check the data is it valid
// step-3 show the error if the data is not valid

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  // getElementsByName
  // getElemenentsByClass
  // getElementsByTagName
  // querySelectorAll()

  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let genderValue = document.getElementsByName("gender");
  // console.log(genderValue);
  getGenderValue(genderValue);
  // validateTheForm(username, email, password, confirmPassword);
  //   console.log(username.value,email.value,password.value,confirmPassword.value);
});
// isNaN
function getGenderValue(genderValue) {
  // console.log(typeof genderValue);
  // console.log(genderValue);
  for (let i = 0; i < genderValue.length; i++) {
    console.log(genderValue[i]);
    // we need to check the checked property : true || false
    if (genderValue[i].checked) {
      console.log(genderValue[i].value);
    } else {
      alert("Please enter your gender");
    }
  }
}

function validateTheForm(...params) {
  // console.log(params);
  let usernameErr = document.getElementById("usernameErr");
  let emailErr = document.getElementById("emailErr");
  let passwordErr = document.getElementById("passwordErr");
  let confirmPasswordErr = document.getElementById("confirmPasswordErr");

  if (username.value == "") {
    usernameErr.innerText = "Please enter  username";
    usernameErr.style.color = "red";
  }
  if (username.value !== "") {
    usernameErr.innerText = "";
  }
  if (email.value == "") {
    emailErr.innerText = "Please enter valid email";
    emailErr.style.color = "red";
  }
  if (email.value !== "") {
    emailErr.innerText = "";
  }
  if (password.value == "") {
    passwordErr.innerText = "Please enter password";
    passwordErr.style.color = "red";
  }
  if (password.value !== "") {
    passwordErr.innerText = "";
  }
  if (
    confirmPassword.value === "" ||
    confirmPassword.value !== password.value
  ) {
    confirmPasswordErr.innerText = "Password didnt match";
    confirmPasswordErr.style.color = "red";
  }
  //   if (confirmPassword.value !== "") {
  //     passwordErr.innerText = "";
  //   }
  else {
    let successMsg = document.getElementById("successMsg");
    successMsg.innerText = "Your data was submitted";
    successMsg.style.color = "green";
  }
}
