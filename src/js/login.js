let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confpassword");
let emailInput = document.getElementById("email");
let form = document.getElementById("form");
let submit = document.getElementById("submit");

const isEmpty = (value) => (value === "" ? true : false);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const showError = (input, message) => {
  input.classList.remove("success");
  input.classList.add("error");
  input.nextElementSibling.textContent = message;
};

const showSuccess = (input) => {
  input.classList.remove("error");
  input.classList.add("success");
  input.nextElementSibling.textContent = "";
};
const checkUsername = () => {
  let isValid = false;
  const min = 3,
    max = 25;
  const username = usernameInput.value.trim();
  if (isEmpty(username)) {
    showError(usernameInput, "Username cannot be blank.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameInput,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(usernameInput);
    isValid = true;
  }
  return isValid;
};
const checkEmail = () => {
  let isValid = false;
  const email = emailInput.value.trim();
  if (isEmpty(email)) {
    showError(emailInput, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailInput, "Email is not isValid.");
  } else {
    showSuccess(emailInput);
    isValid = true;
  }
  return isValid;
};

const checkPassword = () => {
  let isValid = false;

  const password = passwordInput.value.trim();

  if (isEmpty(password)) {
    showError(passwordInput, "Password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(passwordInput,`Password must has at least 8 characters that include 
                    at least 1 lowercase character, 1 uppercase characters, 
                    1 number, and 1 special character in (!@#$%^&*)`);
  } else {
    showSuccess(passwordInput);
    isValid = true;
  }

  return isValid;
};

const checkConfirmPassword = () => {
  let isValid = false;
  // check confirm password
  const confirmPassword = confirmPasswordInput.value.trim();
  const password = passwordInput.value.trim();

  if (isEmpty(confirmPassword)) {
    showError(confirmPasswordInput, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordInput, "The password does not match");
  } else {
    showSuccess(confirmPasswordInput);
    isValid = true;
  }

  return isValid;
};

const isEmailValid = (email) => {
  const re = /^([^<>()\[\]\\,;:\?\!\{\}\s@"]+)@(([a-zA-Z]+\.)+[a-zA-Z]{2,})$/;
  return re.test(email);
};

const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

let input = document.getElementsByClassName("input");
let typingTimer;

for (var i = 0; i < 4; i++) {
  input[i].addEventListener("keyup", (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      switch (e.target.id) {
        case "username":
          checkUsername();
          break;
        case "password":
          checkPassword();
          break;
        case "email":
          checkEmail();
          break;
        case "confpassword":
          checkConfirmPassword();
          break;
        default:
          break;
      }
    }, 300);
  });
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
    let usernameIsValid = checkUsername(),
        emailIsValid = checkEmail(),
        passwordIsValid = checkPassword(),
        confirmPasswordIsValid = checkConfirmPassword();
        
    let formIsValid = usernameIsValid && emailIsValid  && passwordIsValid && confirmPasswordIsValid;

  if (formIsValid) {
    location.replace("./index.html");
  }
});
