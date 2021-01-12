import Validator from "validator";
import isEmpty from "is-empty";

const validateCommentInput = (data) => {
  let errors = {};

  data.commenter = !isEmpty(data.commenter) ? data.commenter : "";
  data.comment_content = !isEmpty(data.comment_content) ? data.comment_content : "";
  data.forum_id = !isEmpty(data.forum_id) ? data.forum_id : "";

  if (Validator.isEmpty(data.commenter)) {
    errors.commenter = " *Brak użytkownika";
  }
  if (Validator.isEmpty(data.comment_content)) {
    errors.comment_content = " *Podaj treść komentarza";
  }
  if (Validator.isEmpty(data.forum_id)) {
    errors.forum_id = " *Brak forum";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateCommentInput;
