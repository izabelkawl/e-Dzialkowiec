import Validator from "validator";
import isEmpty from "is-empty";

const validatePaymentdetailInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.stable_price = !isEmpty(data.stable_price) ? data.stable_price : "";
  data.membership_fee = !isEmpty(data.membership_fee) ? data.membership_fee : "";
  data.water_advance = !isEmpty(data.water_advance) ? data.water_advance : "";
  data.water_charge = !isEmpty(data.water_charge) ? data.water_charge : "";
  data.energy_charge = !isEmpty(data.energy_charge) ? data.energy_charge : "";
  data.garbage = !isEmpty(data.garbage) ? data.garbage : "";

  data.transfer_title = !isEmpty(data.transfer_title) ? data.transfer_title : "";
  data.payment_date = !isEmpty(data.payment_date) ? data.payment_date : "";
  data.account_number = !isEmpty(data.account_number) ? data.account_number : "";

  if (Validator.isEmpty(data.stable_price)) {
    errors.stable_price = " *Podaj przelicznik";
  } 
  if (!Validator.isNumeric(data.stable_price)) {
    errors.stable_price = " *Zły format";
  }
  if (Validator.isEmpty(data.membership_fee)) {
    errors.membership_fee = " *Podaj wysokość składki";
  }
   if (!Validator.isNumeric(data.membership_fee)) {
    errors.membership_fee = " *Zły format";
  }
  if (Validator.isEmpty(data.water_charge)) {
    errors.water_advance = " *Podaj zaliczkę wodną";
  }
   if (!Validator.isNumeric(data.water_charge)) {
    errors.water_charge = " *Zły format";
  }
  if (Validator.isEmpty(data.water_charge)) {
    errors.water_charge = " *Podaj opłatę wodną";
  }
   if (!Validator.isNumeric(data.water_charge)) {
    errors.water_charge = " *Zły format";
  }
  if (Validator.isEmpty(data.energy_charge)) {
    errors.energy_charge = " *Podaj opłatę energetyczną";
  }
   if (!Validator.isNumeric(data.energy_charge)) {
    errors.energy_charge = " *Zły format";
  }
  if (Validator.isEmpty(data.garbage)) {
    errors.garbage = " *Podaj opłątę śmieciową";
  } 
   if (!Validator.isNumeric(data.garbage)) {
    errors.garbage = " *Zły format";
  }
  if (Validator.isEmpty(data.transfer_title)) {
    errors.transfer_title = " *Podaj tytuł przelewu";
  }
  if (Validator.isEmpty(data.payment_date)) {
    errors.payment_date = " *Podaj termin płatności";
  }
  if (Validator.isEmpty(data.account_number)) {
    errors.account_number = " *Podaj numer konta";
  }
  if (!Validator.isLength(data.account_number, { min: 26, max: 26 })) {
    errors.account_number = " *Numer konta skada się z 26 cyfr";
  }
  if (!Validator.isNumeric(data.account_number)) {
    errors.account_number = " *Zły format";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validatePaymentdetailInput;
