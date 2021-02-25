import Validator from "validator";
import isEmpty from "is-empty";

const validateRegisterInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = " *Podaj adres email ";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = " *Nieprawidłowy adres email";
  }
  // Firstname checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = " *Podaj imię";
  }
  // Lastname checks
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = " *Podaj nazwisko";
  }
  // Address checks
  if (Validator.isEmpty(data.address)) {
    errors.address = " *Adres jest wymagany";
  }
  // Phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.phone = " *Telefon jest wymagany";
  }else if (!Validator.isLength(data.phone, { min: 9, max: 9 })) {
    errors.phone = " *Telefon musi mieć 9 cyfr";
  }else if (!Validator.isNumeric(data.phone)) {
    errors.phone = " *Zły format";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = " *Podaj hasło";
  } else if (!Validator.isStrongPassword(data.password, { 
        minLength: 8,
        minLowercase: 1, 
        minUppercase: 1, 
        minNumbers: 1, 
        minSymbols: 0 })) 
        {
    errors.password = " *Hasło minimum 8 znaków, wymagane duże i małe litery oraz cyfry";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = " *Potwierdź hasło";
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = " *Hasła różnią się";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateRegisterInput;
