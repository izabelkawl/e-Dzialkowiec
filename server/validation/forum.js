import Validator from "validator";
import isEmpty from "is-empty";

const validateForumInput = (data) => {
  let errors = {};

  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.content = !isEmpty(data.content) ? data.content : "";

  if (Validator.isEmpty(data.user_id)) {
    errors.user_id = " *Brak użytkownika";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = " *Podaj tytuł";
  }
  if (Validator.isEmpty(data.content)) {
    errors.content = " *Podaj treść";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateForumInput;
