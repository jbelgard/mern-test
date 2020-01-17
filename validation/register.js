const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput (data) {
  let errors = {};

//convert empty fields to an empty string so it gets caught by validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

//checking name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

//checking email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

//checking passwords
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is REQUIRED!!!";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is also REQUIRED!!!";
  }

  if (!Validator.isLength(data.password, { min: 8, max: 15 })) {
    errors.password = "Password must be between 8 and 15 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Please have passwords match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};