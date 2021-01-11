import Validator from "validator";
import isEmpty from "is-empty";

const validateAllotmentInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.number = !isEmpty(data.number) ? data.number : "";
  data.allotment_width = !isEmpty(data.allotment_width) ? data.allotment_width : "";
  data.allotment_length = !isEmpty(data.allotment_length) ? data.allotment_length : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";

  // Number checks
  if (Validator.isEmpty(data.number)) {
    errors.number = " *Podaj numer działki";
  }
  // Width checks
  if (Validator.isEmpty(data.allotment_width)) {
    errors.allotment_width = " *Podaj szerokość";
  }
  // length checks
  if (Validator.isEmpty(data.allotment_length)) {
    errors.allotment_length = " *Długość jest wymagana";
  }
  // Price checks
  if (Validator.isEmpty(data.price)) {
    errors.price = " *Cena jest wymagana";
  }
  // Status checks
  if (Validator.isEmpty(data.status)) {
    errors.status = " *Podaj status";
  } 
  // Status checks
  if (Validator.isEmpty(data.user_id)) {
    errors.user_id = " *Wybierz działkowicza";
  } 
  // User_id empty or someone

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateAllotmentInput;
