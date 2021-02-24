import Validator from "validator";
import isEmpty from "is-empty";

const validateUpdateAllotment= (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.allotment_width = !isEmpty(data.allotment_width) ? data.allotment_width : "";
  data.allotment_length = !isEmpty(data.allotment_length) ? data.allotment_length : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";

  // Width checks
  if (isEmpty(data.allotment_width)) {
    errors.allotment_width = " *Podaj szerokość";
  }else if (!Validator.isNumeric(data.allotment_width)) {
    errors.allotment_width = " *Zły format";
  }
  // length checks
  if (isEmpty(data.allotment_length)) {
    errors.allotment_length = " *Długość jest wymagana";
  }else if (!Validator.isNumeric(data.allotment_length)) {
    errors.allotment_length = " *Zły format";
  }
  // Price checks
  if (isEmpty(data.price)) {
    errors.price = " *Cena jest wymagana";
  }else if (!Validator.isNumeric(data.price)) {
    errors.price = " *Zły format";
  }
  //Status + UserId
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateUpdateAllotment;
