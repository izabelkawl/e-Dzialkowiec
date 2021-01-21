import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Message = new Schema({

  user_id: { type: String, required: true },
  recipient: {  type: String, required: true },
  content: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("messages", Message);
