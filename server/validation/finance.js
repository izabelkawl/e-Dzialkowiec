import Validator from "validator";
import isEmpty from "is-empty";

const validateFinanceInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
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
