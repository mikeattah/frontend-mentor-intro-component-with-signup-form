// Name Validation
function validateName() {
  const $firstNameInput = $("#first-name");
  const firstNameValue = $("#first-name").val();
  const $firstNameIcon = $("#fn-warning-icon");
  const $firstNameText = $("#fn-warning-text");

  const $lastNameInput = $("#last-name");
  const lastNameValue = $("#last-name").val();
  const $lastNameIcon = $("#ln-warning-icon");
  const $lastNameText = $("#ln-warning-text");

  if (firstNameValue === "") {
    // $firstNameInput.removeClass("border-error");
    $firstNameInput.addClass("border-error");
    // $firstNameIcon.removeClass("show-warning");
    $firstNameIcon.addClass("show-warning");
    // $firstNameText.removeClass("show-warning");
    $firstNameText.addClass("show-warning");
  }

  if (lastNameValue === "") {
    // $lastNameInput.removeClass("border-error");
    $lastNameInput.addClass("border-error");
    // $lastNameIcon.removeClass("show-warning");
    $lastNameIcon.addClass("show-warning");
    // $lastNameText.removeClass("show-warning");
    $lastNameText.addClass("show-warning");
  }

  if (firstNameValue === "" || lastNameValue === "") {
    return false;
  }
}

// Email Validation
function validateEmail() {
  const $emailInput = $("#email");
  const emailValue = $("#email").val();
  const $emailIcon = $("#em-warning-icon");
  const $emailText = $("#em-warning-text");

  const regExp =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regExp.test(emailValue)) {
    $emailInput.removeClass("border-error");
    $emailInput.addClass("border-focus");
    $emailIcon.removeClass("show-warning");
    $emailIcon.addClass("hide-warning");
    $emailText.removeClass("show-warning");
    $emailText.addClass("hide-warning");
    return true;
  } else if (!regExp.test(emailValue)) {
    $emailInput.removeClass("border-focus");
    $emailInput.addClass("border-error");
    $emailIcon.removeClass("hide-warning");
    $emailIcon.addClass("show-warning");
    $emailText.removeClass("hide-warning");
    $emailText.addClass("show-warning");
    return false;
  }

  if (emailValue === "") {
    $emailInput.removeClass("border-error");
    $emailInput.addClass("border-focus");
    $emailIcon.removeClass("show-warning");
    $emailIcon.addClass("hide-warning");
    $emailText.removeClass("show-warning");
    $emailText.addClass("hide-warning");
    return false;
  }
}

// Password Validation
function validatePassword() {
  const $passwordInput = $("#password");
  const passwordValue = $("#password").val();
  const $passwordIcon = $("#pw-warning-icon");
  const $passwordText = $("#pw-warning-text");

  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (regExp.test(passwordValue)) {
    $passwordInput.removeClass("border-error");
    $passwordInput.addClass("border-focus");
    $passwordIcon.removeClass("show-warning");
    $passwordIcon.addClass("hide-warning");
    $passwordText.removeClass("show-warning");
    $passwordText.addClass("hide-warning");
    return true;
  } else if (!regExp.test(passwordValue)) {
    $passwordInput.removeClass("border-focus");
    $passwordInput.addClass("border-error");
    $passwordIcon.removeClass("hide-warning");
    $passwordIcon.addClass("show-warning");
    $passwordText.removeClass("hide-warning");
    $passwordText.addClass("show-warning");
    return false;
  }

  if (passwordValue === "") {
    $passwordInput.removeClass("border-error");
    $passwordInput.addClass("border-focus");
    $passwordIcon.removeClass("show-warning");
    $passwordIcon.addClass("hide-warning");
    $passwordText.removeClass("show-warning");
    $passwordText.addClass("hide-warning");
    return false;
  }
}

$("#email").on("input", validateEmail);
$("#password").on("input", validatePassword);
function validateForm() {
  validateName();
  validateEmail();
  validatePassword();

  if (validateName() && validateEmail() && validatePassword()) {
    return true;
  } else {
    return false;
  }
}
