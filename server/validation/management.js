import Validator from "validator";
import isEmpty from "is-empty";

const validateManagementInput = (data) => {
  let errors = {};

  data.description = !isEmpty(data.description) ? data.description : "";
  data.rodo = !isEmpty(data.rodo) ? data.rodo : "";

  if (Validator.isEmpty(data.description)) {
    errors.description = " *Podaj opis";
  }
  if (Validator.isEmpty(data.rodo)) {
    errors.rodo = " *Podaj treść rodo";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateManagementInput;
