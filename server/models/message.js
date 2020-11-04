const mongoose = require('mongoose');

const Message = mongoose.Schema(
    {
        user: { type: String, required: true },
        recipient: { type: String, required: true },
        content: { type: String, required: true }
    }, { timestamps: true },
)
module.exports = mongoose.model('messages', Message);