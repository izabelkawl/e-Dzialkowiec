import Validator from "validator";
import isEmpty from "is-empty";

const validateFinanceInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.allotment_number = !isEmpty(data.allotment_number) ? data.allotment_number : "";
  data.owner = !isEmpty(data.owner) ? data.owner : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.area = !isEmpty(data.area) ? data.area : "";
  data.charge = !isEmpty(data.charge) ? data.charge : "";
  data.term = !isEmpty(data.term) ? data.term : "";
  data.account = !isEmpty(data.account) ? data.account : "";
  data.status = !isEmpty(data.status) ? data.status : "";

  if (Validator.isEmpty(data.allotment_number)) {
    errors.allotment_number = " *Podaj numer działki";
  }
  if (Validator.isEmpty(data.owner)) {
    errors.owner = " *Podaj użytkownika";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = " *Podaj tytuł";
  }
  if (Validator.isEmpty(data.area)) {
    errors.area = " *Podaj powierzchnię działki";
  }
  if (Validator.isEmpty(data.charge)) {
    errors.charge = " *Należność jest wymagana";
  }
  if (Validator.isEmpty(data.term)) {
    errors.term = " *Termin jest wymagany";
  }
  if (Validator.isEmpty(data.account)) {
    errors.account = " *Podaj numer konta";
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
