import Validator from "validator";
import isEmpty from "is-empty";

const validateNoticeboardInput = (data) => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.user_id = !isEmpty(data.user_id) ? data.user_id : "";
  data.advertisement = !isEmpty(data.advertisement) ? data.advertisement : "";
  data.image = !isEmpty(data.image) ? data.image : "";

  if (Validator.isEmpty(data.user_id)) {
    errors.user_id = " *Brak użytkownika";
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = " *Podaj tytuł";
  }
  if (Validator.isEmpty(data.advertisement)) {
    errors.advertisement = " *Podaj treść";
  }
  if (Validator.isEmpty(data.image)) {
    errors.image = " *Dodaj zdjęcie";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateNoticeboardInput;
