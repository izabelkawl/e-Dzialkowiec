const Message = require('../models/message')

createMessage = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a message',
        })
    }

    const message = new Message(body)

    if (!message) {
        return res.status(400).json({ success: false, error: err })
    }

    message
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: message._id,
                message: 'message created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'message not created!',
            })
        })
}

updateMessage = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Message.findOne({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'message not found!',
            })
        }
        message.user = body.user
        message.recipient = body.recipient
        message.content = body.content
        message
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: message._id,
                    message: 'message updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'message not updated!',
                })
            })
    })
}

deleteMessage = async (req, res) => {
    await Message.findOneAndDelete({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!message) {
            return res
                .status(404)
                .json({ success: false, error: `message not found` })
        }

        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
}

getMessageById = async (req, res) => {
    await Message.findOne({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!message) {
            return res
                .status(404)
                .json({ success: false, error: `message not found` })
        }
        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
}

getMessages = async (req, res) => {
    await Message.find({}, (err, messages) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!messages.length) {
            return res
                .status(404)
                .json({ success: false, error: `message not found` })
        }
        return res.status(200).json({ success: true, data: messages })
    }).catch(err => console.log(err))
}

module.exports = {
    createMessage,
    updateMessage,
    deleteMessage,
    getMessages,
    getMessageById,
}