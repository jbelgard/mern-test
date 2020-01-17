const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput (data) {
  let errors = {};

//convert empty fields to an empty string so it gets caught by validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
}