import Handyman from "../models/handyman.js";

const createHandyman = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a handyman",
    });
  }

  const handyman = new Handyman(body);

  if (!handyman) {
    return res.status(400).json({ success: false, error: err });
  }

  handyman
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: handyman._id,
        message: "handyman created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "handyman not created!",
      });
    });
};

const updateHandyman = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Handyman.findOne({ _id: req.params.id }, (err, handyman) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "handyman not found!",
      });
    }
    handyman.profession = body.profession;
    handyman.email = body.email;
    handyman.firstname = body.firstname;
    handyman.lastname = body.lastname;
    handyman.phone = body.phone;
    handyman
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: handyman._id,
          message: "handyman updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "handyman not updated!",
        });
      });
  });
};

const deleteHandyman = async (req, res) => {
  await Handyman.findOneAndDelete({ _id: req.params.id }, (err, handyman) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!handyman) {
      return res
        .status(404)
        .json({ success: false, error: `handyman not found` });
    }

    return res.status(200).json({ success: true, data: handyman });
  }).catch((err) => console.log(err));
};

const getHandymanById = async (req, res) => {
  await Handyman.findOne({ _id: req.params.id }, (err, handyman) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!handyman) {
      return res
        .status(404)
        .json({ success: false, error: `handyman not found` });
    }
    return res.status(200).json({ success: true, data: handyman });
  }).catch((err) => console.log(err));
};

const getHandymans = async (req, res) => {
  await Handyman.find({}, (err, handymans) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!handymans.length) {
      return res
        .status(404)
        .json({ success: false, error: `handyman not found` });
    }
    return res.status(200).json({ success: true, data: handymans });
  }).catch((err) => console.log(err));
};

export default {
  createHandyman,
  updateHandyman,
  deleteHandyman,
  getHandymans,
  getHandymanById,
};
