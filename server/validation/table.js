import Validator from "validator";
import isEmpty from "is-empty";

const validateTableInput = (data) => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.content = !isEmpty(data.content) ? data.content : "";
  data.image = !isEmpty(data.image) ? data.image : "";


  if (Validator.isEmpty(data.user_id)) {
    errors.user_id = " *Podaj numer działki";
  }
  
  if (Validator.isEmpty(data.image)) {
    errors.image = " *Podaj numer działki";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = " *Podaj szerokość";
  }
  if (Validator.isEmpty(data.content)) {
    errors.content = " *Długość jest wymagana";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateTableInput;
