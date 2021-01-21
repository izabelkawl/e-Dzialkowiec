import Validator from "validator";
import isEmpty from "is-empty";

const validateMessageInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.recipient = !isEmpty(data.recipient) ? data.recipient : "";
  data.content = !isEmpty(data.content) ? data.content : "";

  if (Validator.isEmpty(data.recipient)) {
    errors.recipient = " *Wybierz odbiorcę";
  }
  if (Validator.isEmpty(data.content)) {
    errors.content = " *Wpisz treść wiadomości.";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateMessageInput;
