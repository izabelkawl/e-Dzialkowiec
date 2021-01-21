import Management from "../models/management.js";
import validateManagementInput from "../validation/management.js";

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
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Management.findOne({ _id: req.params.id }, (err, management) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "management not found!",
      });
    }
    management.description = body.description;
    management.rodo = body.rodo;
    management
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: management._id,
          message: "management updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "management not updated!",
        });
      }); 
  });
};

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
