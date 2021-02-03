import Noticeboard from "../models/noticeboard.js";
import validateNoticeboardInput from "../validation/noticeboard.js";

const createNoticeboard  = async (req, res) => {
  const noticeboardData = req.body;
  const { errors, isValid } = validateNoticeboardInput(noticeboardData);
    if (!isValid) return res.status(400).json(errors);
    
    const processedNoticeboard = new Noticeboard(noticeboardData);
  
    try {
      processedNoticeboard.save();
    } catch (error) {
      throw new DatabaseInsertError(error.message);
    }

    return res.status(200).json({
      success: true,
      message: "*Dodano ogłoszenie!",
    });
  };

const updateNoticeboard = async (req, res) => {
  const body = req.body;

  Noticeboard.findOne({ _id: req.params.id }, (err, noticeboard) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "*Ogłoszenia nie znaleziono!",
      });
    }
    noticeboard.title = body.title;
    noticeboard.user_id = body.user_id;
    noticeboard.advertisement = body.advertisement;
    noticeboard.image = body.image;
    noticeboard
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: noticeboard._id,
          message: "*Ogłoszenie zaktualizowane!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "*Ogłoszenie niezaktualizowane!",
        });
      });
  });
};

const deleteNoticeboard = async (req, res) => {
  await Noticeboard.findOneAndDelete({ _id: req.params.id }, (err, noticeboard) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!noticeboard) {
      return res
        .status(404)
        .json({ success: false, notfind: `*ogłoszenia nie znaleziono!` });
    }

    return res.status(200).json({ success: true, data: noticeboard });
  }).catch((err) => console.log(err));
};

const getNoticeboardById = async (req, res) => {
  await Noticeboard.findOne({ _id: req.params.id }, (err, noticeboard) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!noticeboard) {
      return res
        .status(404)
        .json({ success: false, notfind: `*ogłoszenia nie znaleziono!` });
    }
    return res.status(200).json({ success: true, data: noticeboard });
  }).catch((err) => console.log(err));
};

const getNoticeboards = async (req, res) => {
  await Noticeboard.find({}, (err, noticeboards) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!noticeboards.length) {
      return res
        .status(404)
        .json({ success: false, notfind: `*ogłoszenia nie znaleziono!` });
    }
    return res.status(200).json({ success: true, data: noticeboards });
  }).catch((err) => console.log(err));
};

export default {
  createNoticeboard,
  updateNoticeboard,
  deleteNoticeboard,
  getNoticeboards,
  getNoticeboardById,
};
