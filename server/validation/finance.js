import Validator from "validator";
import isEmpty from "is-empty";

const validateFinanceInput = (data) => {
  let errors = {};
  
  data.status = !isEmpty(data.status) ? data.status : "";

  if (Validator.isEmpty(data.status)) {
    errors.status = " *Wybierz status";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateFinanceInput;
