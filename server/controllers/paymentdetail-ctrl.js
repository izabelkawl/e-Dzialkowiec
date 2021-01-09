import Paymentdetail from "../models/paymentdetail.js";

const createPaymentdetail = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a paymentdetail",
    });
  }

  const paymentdetail = new Paymentdetail(body);

  if (!paymentdetail) {
    return res.status(400).json({ success: false, error: err });
  }

  paymentdetail
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: paymentdetail._id,
        message: "paymentdetail created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "paymentdetail not created!",
      });
    });
};

const updatePaymentdetail = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Paymentdetail.findOne({ _id: req.params.id }, (err, paymentdetail) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "paymentdetail not found!",
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
          message: "paymentdetail updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "paymentdetail not updated!",
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
