import Allotment from "../models/allotment.js";

const createAllotment = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a allotment",
    });
  }

  const allotment = new Allotment(body);

  if (!allotment) {
    return res.status(400).json({ success: false, error: err });
  }

  allotment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: allotment._id,
        message: "allotment created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "allotment not created!",
      });
    });
};

const updateAllotment = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Allotment.findOne({ _id: req.params.id }, (err, allotment) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "allotment not found!",
      });
    }
    allotment.image = body.image;
    allotment.number = body.number;
    allotment.size = body.size;
    allotment.width = body.width;
    allotment.height = body.height;
    allotment.price = body.price;
    allotment.status = body.status;
    allotment
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: allotment._id,
          message: "allotment updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "allotment not updated!",
        });
      });
  });
};

const deleteAllotment = async (req, res) => {
  await Allotment.findOneAndDelete({ _id: req.params.id }, (err, allotment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!allotment) {
      return res
        .status(404)
        .json({ success: false, error: `allotment not found` });
    }

    return res.status(200).json({ success: true, data: allotment });
  }).catch((err) => console.log(err));
};

const getAllotmentById = async (req, res) => {
  await Allotment.findOne({ _id: req.params.id }, (err, allotment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!allotment) {
      return res
        .status(404)
        .json({ success: false, error: `allotment not found` });
    }
    return res.status(200).json({ success: true, data: allotment });
  }).catch((err) => console.log(err));
};

const getAllotments = async (req, res) => {
  await Allotment.find({}, (err, allotments) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!allotments.length) {
      return res
        .status(404)
        .json({ success: false, error: `allotment not found` });
    }
    return res.status(200).json({ success: true, data: allotments });
  }).catch((err) => console.log(err));
};

export default {
  createAllotment,
  updateAllotment,
  deleteAllotment,
  getAllotments,
  getAllotmentById,
};
