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
    errors.email = "*Podaj adres email ";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "*Nieprawidłowy adres email";
  }
  // Firstname checks
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "*Imię jest wymagane";
  }

  // Lastname checks
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "*Nazwisko jest wymagane";
  }
  // Address checks
  if (Validator.isEmpty(data.address)) {
    errors.address = "*Adres jest wymagany";
  }
  // Phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "*Telefon jest wymagany";
  }
  if (!Validator.isLength(data.phone, { min: 9, max: 9 })) {
    errors.phone = "*Telefon musi mieć 9 cyfr";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "*Podaj hasło";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "*Potwierdź hasło";
  }
  if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "*Hasło minimum 8 znaków";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "*Hasła różnią się";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateRegisterInput;
