const mongoose = require('mongoose');
//const Schema = mongoose.Schema

const User = mongoose.Schema(
    {
        email: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
    },
)
module.exports = mongoose.model('users', User);