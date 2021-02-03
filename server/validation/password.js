import Validator from "validator";
import isEmpty from "is-empty";

const validatePassword = (data) => {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : "";
  data.password1 = !isEmpty(data.password1) ? data.password1 : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = " *Podaj hasło";
  }
  if (Validator.isEmpty(data.password1)) {
    errors.password1 = " *Podaj nowe hasło";
  } else if (!Validator.isLength(data.password1, { min: 8, max: 30 })) {
    errors.password1 = " *Hasło minimum 8 znaków";
  }
  if (Validator.isEmpty(data.password2)) {
      errors.password2 = " *Potwierdź hasło";
    } else if (!Validator.equals(data.password1, data.password2)) {
    errors.password2 = " *Hasła różnią się";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validatePassword;
