import Validator from "validator";
import isEmpty from "is-empty";

const validateUpdateUser = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  const isEmailEmpty = isEmpty(data.email);
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  // Email checks
  if (isEmpty(data.email)) errors.email = " *Podaj adres email";
  else if (!Validator.isEmail(data.email)) {
    errors.email = " *Nieprawidłowy adres email";
  }

  // Firstname checks
  if (isEmpty(data.firstname)) {
    errors.firstname = " *Pole nie może być puste";
  }

  // Lastname checks
  if (isEmpty(data.lastname)) {
    errors.lastname = " *Pole nie może być puste";
  }

  // Address checks
  if (isEmpty(data.address)) {
    errors.address = " *Pole nie może być puste";
  }

  // Phone checks
  if (isEmpty(data.phone)) {
    errors.phone = " *Pole nie może być puste";
  }else if (!Validator.isLength(data.phone, { min: 9, max: 9 })) {
    errors.phone = " *Telefon musi mieć 9 cyfr";
  }else if (!Validator.isNumeric(data.phone)) {
    errors.phone = " *Zły format";
  }

  if (!isEmpty(data.phone)) {
    if (!Validator.isLength(data.phone, { min: 9, max: 9 })) {
      errors.phone = " *Telefon musi mieć 9 cyfr";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateUpdateUser;
