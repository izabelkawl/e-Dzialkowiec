import mongoose from "mongoose";

const Forum = mongoose.Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  timestamps: true,
  comment: { 
    user_id: { type: String, required: true },
    content: {type: String, required: true },
    timestamps: true,
  },
});

export default mongoose.model("forums", Forum);
