import Management from "../models/management.js";
import validateManagementInput from "../validation/management.js";
import isEmpty from "is-empty";

const createManagement = async (req, res) => {
  const managementData = req.body;
    const { errors, isValid } = validateManagementInput(managementData);
    if (!isValid) return res.status(400).json(errors);
    
    const processedManagement = new Management(managementData);
  
    try {
      processedManagement.save();
    } catch (error) {
      throw new DatabaseInsertError(error.message);
    }
  };
  
  const updateManagement = async (req, res) => {

    const fieldsToUpdate = { ...req.body };
  
    const { errors, isValid } = validateManagementInput(fieldsToUpdate);
  
    if (isEmpty(fieldsToUpdate))
      return res.status(400).json({
        success: false,
        message: "*Wypełnij puste komórki.",
      });
  
    if (!isValid) return res.status(400).json(errors);
  
    const processedManagement = await Management.findOne({ _id: req.params.id });
  
    if (!processedManagement)
      return res.status(404).json({
        err,
        message: "*Informacje nie istnieje.",
      });
  
      for (const field in fieldsToUpdate)
      processedManagement[field] = fieldsToUpdate[field];
  
    try {
      await processedManagement.save();
    } catch (error) {
      console.log(error);
  
      return res.status(400).json({
        success: false,
        id: processedManagement._id,
        message: "*Aktualizacja nie powiodła się!",
      });
    }
    
  return res.status(200).json({
    success: true
  });
  }
  
const deleteManagement = async (req, res) => {
  await Management.findOneAndDelete({ _id: req.params.id }, (err, management) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!management) {
      return res
        .status(404)
        .json({ success: false, error: `management not found` });
    }

    return res.status(200).json({ success: true, data: management });
  }).catch((err) => console.log(err));
};

const getManagementById = async (req, res) => {
  await Management.findOne({ _id: req.params.id }, (err, management) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!management) {
      return res
        .status(404)
        .json({ success: false, error: `management not found` });
    }
    return res.status(200).json({ success: true, data: management });
  }).catch((err) => console.log(err));
};

const getManagements = async (req, res) => {
  await Management.find({}, (err, managements) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!managements.length) {
      return res
        .status(404)
        .json({ success: false, error: `management not found` });
    }
    return res.status(200).json({ success: true, data: managements });
  }).catch((err) => console.log(err));
};

export default {
  createManagement,
  updateManagement,
  deleteManagement,
  getManagements,
  getManagementById,
};
