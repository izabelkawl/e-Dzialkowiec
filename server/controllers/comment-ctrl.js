import Comment from "../models/comment.js";
import validateCommentInput from "../validation/comment.js";
import isEmpty from "is-empty";

const createComment = async (req, res) => {
const commentData = req.body;
  const { errors, isValid } = validateCommentInput(commentData);

  if (!isValid) return res.status(400).json(errors);
 
  const processedComment = new Comment(commentData);

  try {
    processedComment.save();
  } catch (error) {
    throw new DatabaseInsertError(error.message);
  }
};

const updateComment = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Comment.findOne({ _id: req.params.id }, (err, comment) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "comment not found!",
      });
    }
    comment.commenter = body.commenter;
    comment.comment_content = body.comment_content;
    comment.forum_id = body.forum_id;
    comment
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: comment._id,
          message: "comment updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "comment not updated!",
        });
      }); 
  });
};

const deleteComment = async (req, res) => {
  await Comment.findOneAndDelete({ _id: req.params.id }, (err, comment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: `comment not found` });
    }

    return res.status(200).json({ success: true, data: comment });
  }).catch((err) => console.log(err));
};

const getCommentById = async (req, res) => {
  await Comment.findOne({ _id: req.params.id }, (err, comment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!comment) {
      return res
        .status(404)
        .json({ success: false, error: `comment not found` });
    }
    return res.status(200).json({ success: true, data: comment });
  }).catch((err) => console.log(err));
};

const getComments = async (req, res) => {
  await Comment.find({}, (err, comments) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!comments.length) {
      return res
        .status(404)
        .json({ success: false, error: `comment not found` });
    }
    return res.status(200).json({ success: true, data: comments });
  }).catch((err) => console.log(err));
};

export default {
  createComment,
  updateComment,
  deleteComment,
  getComments,
  getCommentById,
};
