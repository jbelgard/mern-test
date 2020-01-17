const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //empty fields checked through validator as strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //checking email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please input an E-Mail";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Please input a VALID E-Mail";
  }

  //checking password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please input a password";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};