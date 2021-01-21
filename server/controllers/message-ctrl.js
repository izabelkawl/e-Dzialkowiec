import Message from "../models/message.js";
import validateMessageInput from "../validation/message.js";

const createMessage = async (req, res) => {
  const messageData = req.body;
    const { errors, isValid } = validateMessageInput(messageData);
    if (!isValid) return res.status(400).json(errors);
    
    const processedMessage = new Message(messageData);
  
    try {
      processedMessage.save();
    } catch (error) {
      throw new DatabaseInsertError(error.message);
    }
  };
  

const updateMessage = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Message.findOne({ _id: req.params.id }, (err, message) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "message not found!",
      });
    }
    message.user_id = body.user_id;
    message.recipient = body.recipient;
    message.content = body.content;
    message
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: message._id,
          message: "message updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "message not updated!",
        });
      });
  });
};

const deleteMessage = async (req, res) => {
  await Message.findOneAndDelete({ _id: req.params.id }, (err, message) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!message) {
      return res
        .status(404)
        .json({ success: false, error: `message not found` });
    }

    return res.status(200).json({ success: true, data: message });
  }).catch((err) => console.log(err));
};

const getMessageById = async (req, res) => {
  await Message.findOne({ _id: req.params.id }, (err, message) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!message) {
      return res
        .status(404)
        .json({ success: false, error: `message not found` });
    }
    return res.status(200).json({ success: true, data: message });
  }).catch((err) => console.log(err));
};

const getMessages = async (req, res) => {
  await Message.find({}, (err, messages) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!messages.length) {
      return res
        .status(404)
        .json({ success: false, error: `message not found` });
    }
    return res.status(200).json({ success: true, data: messages });
  }).catch((err) => console.log(err));
};

export default {
  createMessage,
  updateMessage,
  deleteMessage,
  getMessages,
  getMessageById,
};
