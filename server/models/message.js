import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Message = new Schema({

  user: { type: Schema.Types.ObjectId, ref: "User" },
  recipient: { type: Schema.Types.ObjectId, ref: "User"},
  content: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("messages", Message);
