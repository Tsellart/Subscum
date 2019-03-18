const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.passWord = !isEmpty(data.passWord) ? data.passWord : "";
// Email checks
  if (Validator.isEmpty(data.userName)) {
    errors.userName = "User field is required";
  } else if (!Validator.isEmail(data.userName)) {
    errors.userName = "Username is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.passWord)) {
    errors.passWord = "Password field is required";
  }
if (!Validator.isLength(data.passWord, { min: 6, max: 30 })) {
    errors.passWord = "Password must be at least 6 characters";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};