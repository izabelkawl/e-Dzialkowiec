import Paymentdetail from "../models/paymentdetail.js";
import validatePaymentdetailInput from "../validation/paymentdetail.js";

const createPaymentdetail = async (req, res) => {
  const paymentdetailData = req.body;
    const { errors, isValid } = validatePaymentdetailInput(paymentdetailData);
    const isPaymentdetail = await Paymentdetail.findOne({ stable_price: paymentdetailData.stable_price });
  
    if (!isValid) return res.status(400).json(errors);
    if (!!isPaymentdetail)
      return res.status(400).json({ numberexists: " *Error" });
  
    const processedPaymentdetail = new Paymentdetail(paymentdetailData);
  
    try {
      processedPaymentdetail.save();
    } catch (error) {
      throw new DatabaseInsertError(error.message);
    }
  };

const updatePaymentdetail = async (req, res) => {
  const body = req.body;
  const { errors, isValid } = validatePaymentdetailInput(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "*Wypełnij puste komórki.",
    });
  }

  if (!isValid) return res.status(400).json(errors);
  
  Paymentdetail.findOne({ _id: req.params.id }, (err, paymentdetail) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Nie znaleziono!",
      });
    }
    paymentdetail.stable_price = body.stable_price;
    paymentdetail.membership_fee = body.membership_fee;
    paymentdetail.water_advance = body.water_advance;
    paymentdetail.water_charge = body.water_charge;
    paymentdetail.energy_charge = body.energy_charge;
    paymentdetail.garbage = body.garbage;
    
    paymentdetail.transfer_title = body.transfer_title;
    paymentdetail.payment_date = body.payment_date;
    paymentdetail.account_number = body.account_number;
    paymentdetail
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: paymentdetail._id,
          message: "Pomyślnie zaaktualizowano!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Aktualizacja nie powiodłą się!",
        });
      }); 
  });
};

const deletePaymentdetail = async (req, res) => {
  await Paymentdetail.findOneAndDelete({ _id: req.params.id }, (err, paymentdetail) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!paymentdetail) {
      return res
        .status(404)
        .json({ success: false, error: `paymentdetail not found` });
    }

    return res.status(200).json({ success: true, data: paymentdetail });
  }).catch((err) => console.log(err));
};

const getPaymentdetailById = async (req, res) => {
  await Paymentdetail.findOne({ _id: req.params.id }, (err, paymentdetail) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!paymentdetail) {
      return res
        .status(404)
        .json({ success: false, error: `paymentdetail not found` });
    }
    return res.status(200).json({ success: true, data: paymentdetail });
  }).catch((err) => console.log(err));
};

const getPaymentdetails = async (req, res) => {
  await Paymentdetail.find({}, (err, paymentdetails) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!paymentdetails.length) {
      return res
        .status(404)
        .json({ success: false, error: `paymentdetail not found` });
    }
    return res.status(200).json({ success: true, data: paymentdetails });
  }).catch((err) => console.log(err));
};

export default {
  createPaymentdetail,
  updatePaymentdetail,
  deletePaymentdetail,
  getPaymentdetails,
  getPaymentdetailById,
};
