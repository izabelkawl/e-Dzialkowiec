import Announcement from "../models/announcement.js";
// Load input validation
import validateAnnouncementInput from "../validation/announcement.js";
import isEmpty from "is-empty";

const createAnnouncement = async (req, res) => {
const announcementData = req.body;
  const { errors, isValid } = validateAnnouncementInput(announcementData);

  if (!isValid) return res.status(400).json(errors);

  const processedAnnouncement = new Announcement(announcementData);

  try {
    processedAnnouncement.save();
  } catch (error) {
    throw new DatabaseInsertError(error.message);
  }
  
  return res.status(200).json({
    success: true,
    message: "*Ogłoszenie stworzone!",
  });
};

const updateAnnouncement = async (req, res) => {

  const fieldsToUpdate = { ...req.body };

  const { errors, isValid } = validateAnnouncementInput(fieldsToUpdate);

  if (isEmpty(fieldsToUpdate))
    return res.status(400).json({
      success: false,
      message: "*Wypełnij puste komórki.",
    });

  if (!isValid) return res.status(400).json(errors);

  const processedAnnouncement = await Announcement.findOne({ _id: req.params.id });

  if (!processedAnnouncement)
    return res.status(404).json({
      err,
      message: "*Działka nieistnieje.",
    });

    for (const field in fieldsToUpdate)
    processedAnnouncement[field] = fieldsToUpdate[field];

  try {
    await processedAnnouncement.save();
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      success: false,
      id: processedAnnouncement._id,
      message: "*Aktualizacja nie powiodła się!",
    });
  }

  return res.status(200).json({
    success: true,
    id: processedAnnouncement._id,
    message: "*Aktualizacja powiodła się!",
  });
};

const deleteAnnouncement = async (req, res) => {
  await Announcement.findOneAndDelete({ _id: req.params.id }, (err, announcement) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!announcement) {
      return res
        .status(404)
        .json({ success: false, error: `announcement not found` });
    }

    return res.status(200).json({ success: true, data: announcement });
  }).catch((err) => console.log(err));
};

const getAnnouncementById = async (req, res) => {
  await Announcement.findOne({ _id: req.params.id }, (err, announcement) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!announcement) {
      return res
        .status(404)
        .json({ success: false, error: `announcement not found` });
    }
    return res.status(200).json({ success: true, data: announcement });
  }).catch((err) => console.log(err));
};

const getAnnouncements = async (req, res) => {
  await Announcement.find({}, (err, announcements) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!announcements.length) {
      return res
        .status(404)
        .json({ success: false, error: `announcement not found` });
    }
    return res.status(200).json({ success: true, data: announcements });
  }).catch((err) => console.log(err));
};

export default {
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
  getAnnouncements,
  getAnnouncementById,
};
