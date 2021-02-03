import Forum from "../models/forum.js";
import validateForumInput from "../validation/forum.js";

const createForum = async (req, res) => {
  const forumData = req.body;
    const { errors, isValid } = validateForumInput(forumData);
    if (!isValid) return res.status(400).json(errors);
    
    const processedForum = new Forum(forumData);
  
    try {
      processedForum.save();
    } catch (error) {
      throw new DatabaseInsertError(error.message);
    }

    return res.status(200).json({
      success: true,
      message: "*Dodano ogłoszenie!",
    });

  };
  
const updateForum = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Forum.findOne({ _id: req.params.id }, (err, forum) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "forum not found!",
      });
    }
    forum.title = body.title;
    forum.user_id = body.user_id;
    forum.content = body.content;
    forum
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: forum._id,
          message: "forum updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "forum not updated!",
        });
      }); 
  });
};

const deleteForum = async (req, res) => {
  await Forum.findOneAndDelete({ _id: req.params.id }, (err, forum) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!forum) {
      return res
        .status(404)
        .json({ success: false, error: `forum not found` });
    }

    return res.status(200).json({ success: true, data: forum });
  }).catch((err) => console.log(err));
};

const getForumById = async (req, res) => {
  await Forum.findOne({ _id: req.params.id }, (err, forum) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!forum) {
      return res
        .status(404)
        .json({ success: false, error: `forum not found` });
    }
    return res.status(200).json({ success: true, data: forum });
  }).catch((err) => console.log(err));
};

const getForums = async (req, res) => {
  await Forum.find({}, (err, forums) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!forums.length) {
      return res
        .status(404)
        .json({ success: false, error: `forum not found` });
    }
    return res.status(200).json({ success: true, data: forums });
  }).catch((err) => console.log(err));
};

export default {
  createForum,
  updateForum,
  deleteForum,
  getForums,
  getForumById,
};
