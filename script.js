const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    document.getElementById("usernameError").style.visibility = "visible";
    document.getElementById("usernameError").innerHTML =
      "Username is requirerd";
    username.style.borderColor = "#e74c32";
  }
    else {
    username.style.borderColor = "#2ecc71";
    document.getElementById("usernameError").innerHTML = "";
  }
  if (email.value === "") {
    document.getElementById("emailError").style.visibility = "visible";
    document.getElementById("emailError").innerHTML = "Email is requirerd";
    email.style.borderColor = "#e74c32";
  } else {
    email.style.borderColor = "#2ecc71";
    document.getElementById("emailError").innerHTML = "";
  }
  if (password.value === "") {
    document.getElementById("passwordError").style.visibility = "visible";
    document.getElementById("passwordError").innerHTML =
      "Password is requirerd";
    password.style.borderColor = "#e74c32";
  } else {
    password.style.borderColor = "#2ecc71";
    document.getElementById("passwordError").innerHTML = "";
  }
  if (password2.value === "") {
    document.getElementById("password2Error").style.visibility = "visible";
    document.getElementById("password2Error").innerHTML =
      "Confirm Password is requirerd";
    password2.style.borderColor = "#e74c32";
  } else if (password.value == password2.value) {
    document.getElementById("password2Error").innerHTML = "";
    password2.style.borderColor = "#2ecc71";
  } else {
    document.getElementById("password2Error").style.visibility = "visible";
    document.getElementById("password2Error").innerHTML =
      "Password is not match";
    password2.style.borderColor = "#e74c32";
  }
});
