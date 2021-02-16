import Validator from "validator";
import isEmpty from "is-empty";

const validatePassword = (data) => {
  let errors = {};

  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordchange = !isEmpty(data.passwordchange) ? data.passwordchange : "";
  data.passwordchange2 = !isEmpty(data.passwordchange2) ? data.passwordchange2 : "";

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = " *Podaj hasło";
  }
  if (Validator.isEmpty(data.passwordchange)) {
    errors.passwordchange = " *Podaj nowe hasło";
  } else if (!Validator.isLength(data.passwordchange, { min: 8, max: 30 })) {
    errors.passwordchange = " *Hasło minimum 8 znaków";
  }
  if (Validator.isEmpty(data.passwordchange2)) {
      errors.passwordchange2 = " *Potwierdź hasło";
    } else if (!Validator.equals(data.passwordchange, data.passwordchange2)) {
    errors.passwordchange2 = " *Hasła różnią się";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validatePassword;
