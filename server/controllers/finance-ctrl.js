import Finance from "../models/finance.js";
import validateFinanceInput from "../validation/finance.js";

  const createFinance = async (req, res) => {
    const financeData = req.body;
    const { errors, isValid } = validateFinanceInput(financeData);
    const isFinance = await Finance.findOne({ allotment_number: financeData.allotment_number });
    
      if (!isValid) return res.status(400).json(errors);
      if (!!isFinance)
        return res.status(400).json({ numberexists: " *Działka o podanym numerze już istnieje." });
    
      const processedFinance = new Finance(financeData);
    
      try {
        processedFinance.save();
      } catch (error) {
        throw new DatabaseInsertError(error.message);
      }
    };
    
const updateFinance = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Finance.findOne({ _id: req.params.id }, (err, finance) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "finance not found!",
      });
    }
    finance.allotment_number = body.allotment_number;
    finance.owner = body.owner;
    finance.title = body.title;
    finance.area = body.area;
    finance.charge = body.charge;
    finance.term = body.term;
    finance.account = body.account;
    finance.status = body.status;
    finance
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: finance._id,
          message: "finance updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "finance not updated!",
        });
      }); 
  });
};

const deleteFinance = async (req, res) => {
  await Finance.findOneAndDelete({ _id: req.params.id }, (err, finance) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!finance) {
      return res
        .status(404)
        .json({ success: false, error: `finance not found` });
    }

    return res.status(200).json({ success: true, data: finance });
  }).catch((err) => console.log(err));
};

const getFinanceById = async (req, res) => {
  await Finance.findOne({ _id: req.params.id }, (err, finance) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!finance) {
      return res
        .status(404)
        .json({ success: false, error: `finance not found` });
    }
    return res.status(200).json({ success: true, data: finance });
  }).catch((err) => console.log(err));
};

const getFinances = async (req, res) => {
  await Finance.find({}, (err, finances) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!finances.length) {
      return res
        .status(404)
        .json({ success: false, error: `finance not found` });
    }
    return res.status(200).json({ success: true, data: finances });
  }).catch((err) => console.log(err));
};

export default {
  createFinance,
  updateFinance,
  deleteFinance,
  getFinances,
  getFinanceById,
};
