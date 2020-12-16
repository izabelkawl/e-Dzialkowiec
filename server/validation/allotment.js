import Validator from "validator";
import isEmpty from "is-empty";

const validateAllotmentInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.image = !isEmpty(data.email) ? data.email : "";
  data.number = !isEmpty(data.firstname) ? data.firstname : "";
  data.width = !isEmpty(data.width) ? data.width : "";
  data.height = !isEmpty(data.height) ? data.height : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";

  // Image checks
  if (Validator.isEmpty(data.image)) {
    errors.image = " *Podaj adres image ";
  } 
  // Number checks
  if (Validator.isEmpty(data.number)) {
    errors.number = " *Podaj numer działki";
  }
  // Width checks
  if (Validator.isEmpty(data.width)) {
    errors.width = " *Podaj szerokość";
  }
  // Height checks
  if (Validator.isEmpty(data.height)) {
    errors.height = " *Wysokość jest wymagana";
  }
  // Price checks
  if (Validator.isEmpty(data.price)) {
    errors.price = " *Telefon jest wymagany";
  }
  // Status checks
  if (Validator.isEmpty(data.status)) {
    errors.status = " *Podaj hasło";
  } 
  // User_id empty or someone

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateAllotmentInput;
