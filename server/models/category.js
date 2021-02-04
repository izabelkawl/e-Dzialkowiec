import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('category', CategorySchema);