const form = document.getElementById("form");

const firstNameInput = document.getElementById("first-name");
const firstNameIcon = document.getElementById("fn-warning-icon");
const firstNameText = document.getElementById("fn-warning-text");

const lastNameInput = document.getElementById("last-name");
const lastNameIcon = document.getElementById("ln-warning-icon");
const lastNameText = document.getElementById("ln-warning-text");

const emailInput = document.getElementById("email");
const emailIcon = document.getElementById("em-warning-icon");
const emailText = document.getElementById("em-warning-text");

const passwordInput = document.getElementById("password");
const passwordIcon = document.getElementById("pw-warning-icon");
const passwordText = document.getElementById("pw-warning-text");

// Name Validation
function validateName(e) {
  e.preventDefault();

  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;

  if (firstNameValue === "") {
    firstNameInput.classList.remove("border-focus");
    firstNameInput.classList.add("border-error");
    firstNameIcon.classList.remove("hide-warning");
    firstNameIcon.classList.add("show-warning");
    firstNameText.classList.remove("hide-warning");
    firstNameText.classList.add("show-warning");
  } else {
    firstNameInput.classList.remove("border-error");
    firstNameInput.classList.add("border-focus");
    firstNameIcon.classList.remove("show-warning");
    firstNameIcon.classList.add("hide-warning");
    firstNameText.classList.remove("show-warning");
    firstNameText.classList.add("hide-warning");
  }

  if (lastNameValue === "") {
    lastNameInput.classList.remove("border-focus");
    lastNameInput.classList.add("border-error");
    lastNameIcon.classList.remove("hide-warning");
    lastNameIcon.classList.add("show-warning");
    lastNameText.classList.remove("hide-warning");
    lastNameText.classList.add("show-warning");
  } else {
    lastNameInput.classList.remove("border-error");
    lastNameInput.classList.add("border-focus");
    lastNameIcon.classList.remove("show-warning");
    lastNameIcon.classList.add("hide-warning");
    lastNameText.classList.remove("show-warning");
    lastNameText.classList.add("hide-warning");
  }

  if (firstNameValue === "" || lastNameValue === "") {
    return false;
  }
}

// Email Validation
function validateEmail(e) {
  e.preventDefault();

  const emailValue = emailInput.value;

  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regExp.test(emailValue)) {
    emailInput.classList.remove("border-error");
    emailInput.classList.add("border-focus");
    emailIcon.classList.remove("show-warning");
    emailIcon.classList.add("hide-warning");
    emailText.classList.remove("show-warning");
    emailText.classList.add("hide-warning");
    return true;
  } else if (!regExp.test(emailValue)) {
    emailInput.classList.remove("border-focus");
    emailInput.classList.add("border-error");
    emailIcon.classList.remove("hide-warning");
    emailIcon.classList.add("show-warning");
    emailText.classList.remove("hide-warning");
    emailText.classList.add("show-warning");
    return false;
  }

  if (emailValue === "") {
    emailInput.classList.add("border-error");
    emailInput.classList.remove("border-focus");
    emailIcon.classList.add("show-warning");
    emailIcon.classList.remove("hide-warning");
    emailText.classList.add("show-warning");
    emailText.classList.remove("hide-warning");
    return false;
  }
}

// Password Validation
function validatePassword(e) {
  e.preventDefault();

  const passwordValue = passwordInput.value;

  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (regExp.test(passwordValue)) {
    passwordInput.classList.remove("border-error");
    passwordInput.classList.add("border-focus");
    passwordIcon.classList.remove("show-warning");
    passwordIcon.classList.add("hide-warning");
    passwordText.classList.remove("show-warning");
    passwordText.classList.add("hide-warning");
    return true;
  } else if (!regExp.test(passwordValue)) {
    passwordInput.classList.remove("border-focus");
    passwordInput.classList.add("border-error");
    passwordIcon.classList.remove("hide-warning");
    passwordIcon.classList.add("show-warning");
    passwordText.classList.remove("hide-warning");
    passwordText.classList.add("show-warning");
    return false;
  }

  if (passwordValue === "") {
    passwordInput.classList.add("border-error");
    passwordInput.classList.remove("border-focus");
    passwordIcon.classList.add("show-warning");
    passwordIcon.classList.remove("hide-warning");
    passwordText.classList.add("show-warning");
    passwordText.classList.remove("hide-warning");
    return false;
  }
}

function validateForm(e) {
  e.preventDefault();

  if (validateName(e) && validateEmail(e) && validatePassword(e)) {
    return true;
  } else {
    return false;
  }
}

firstNameInput.addEventListener("keyup", validateName);
lastNameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);
passwordInput.addEventListener("keyup", validatePassword);
form.addEventListener("submit", validateForm);
