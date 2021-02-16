import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ActSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    actfile: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('act', ActSchema);