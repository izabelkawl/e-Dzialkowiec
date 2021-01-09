import Allotment from "../models/allotment.js";
// Load input validation
import validateAllotmentInput from "../validation/allotment.js";
import validateUpdateAllotment from "../validation/updateAllotment.js";
import isEmpty from "is-empty";

const createAllotment = async (req, res) => {
const allotmentData = req.body;
  const { errors, isValid } = validateAllotmentInput(allotmentData);
  const isAllotment = await Allotment.findOne({ number: allotmentData.number });

  if (!isValid) return res.status(400).json(errors);
  if (!!isAllotment)
    return res.status(400).json({ numberexists: " *Działka o podanym numerze już istnieje." });

  const processedAllotment = new Allotment(allotmentData);

  try {
    processedAllotment.save();
  } catch (error) {
    throw new DatabaseInsertError(error.message);
  }
};

const updateAllotment = async (req, res) => {

  const fieldsToUpdate = { ...req.body };

  const { errors, isValid } = validateUpdateAllotment(fieldsToUpdate);

  if (isEmpty(fieldsToUpdate))
    return res.status(400).json({
      success: false,
      message: "*Wypełnij puste komórki.",
    });

  if (!isValid) return res.status(400).json(errors);

  const processedAllotment = await Allotment.findOne({ _id: req.params.id });

  if (!processedAllotment)
    return res.status(404).json({
      err,
      message: "*Działka nieistnieje.",
    });

    for (const field in fieldsToUpdate)
    processedAllotment[field] = fieldsToUpdate[field];

  try {
    await processedAllotment.save();
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      id: processedAllotment._id,
      message: "*Aktualizacja nie powiodła się!",
    });
  }

  return res.status(200).json({
    success: true,
    id: processedAllotment._id,
    message: "*Aktualizacja powiodła się!",
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

const getAllotmentByNumber = async (req, res) => {
  await Allotment.findOne({ number : req.params.number }, (err, allotment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!allotment) {
      return res
        .status(404)
        .json({ success: false, error: `Brak działki o tym numerze` });
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
  getAllotmentByNumber,
};
