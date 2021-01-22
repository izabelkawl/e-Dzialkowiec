import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Announcement = new Schema({
  
    title: {type: String, required: true },
    content: {type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("announcements", Announcement);
