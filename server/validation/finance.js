import Validator from "validator";
import isEmpty from "is-empty";

const validateFinanceInput = (data) => {
  let errors = {};
  
  data.title = !isEmpty(data.title) ? data.title : "";
  data.charge = !isEmpty(data.charge) ? data.charge : "";
  data.term = !isEmpty(data.term) ? data.term : "";
  data.status = !isEmpty(data.status) ? data.status : "";

  data.status = !isEmpty(data.status) ? data.status : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = " *Podaj tytuł";
  }
  if (Validator.isEmpty(data.charge)) {
    errors.charge = " *Pokaj kwotę";
  }else if (!Validator.isNumeric(data.charge)) {
    errors.charge = " *Zły format";
  }
  if (Validator.isEmpty(data.term)) {
    errors.term = " *Wybierz termin płatności";
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = " *Wybierz status";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateFinanceInput;
