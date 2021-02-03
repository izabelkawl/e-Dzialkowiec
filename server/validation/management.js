import Validator from "validator";
import isEmpty from "is-empty";

const validateManagementInput = (data) => {
  let errors = {};

  data.description = !isEmpty(data.description) ? data.description : "";
  data.rodo = !isEmpty(data.rodo) ? data.rodo : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (Validator.isEmpty(data.description)) {
    errors.description = " *Podaj opis";
  }
  if (Validator.isEmpty(data.rodo)) {
    errors.rodo = " *Podaj treść rodo";
  }
  
  if (Validator.isEmpty(data.title)) {
    errors.title = " *Podaj tytuł";
  }
  
  if (Validator.isEmpty(data.name)) {
    errors.name = " *Podaj nazwę ogrodu";
  }
  
  if (Validator.isEmpty(data.city)) {
    errors.city = " *Podaj miasto";
  }
  
  if (Validator.isEmpty(data.address)) {
    errors.address = " *Podaj adres";
  }
  
  if (Validator.isEmpty(data.phone)) {
    errors.phone = " *Podaj telefon";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateManagementInput;
