import mongoose from "mongoose";

const Message = mongoose.Schema(
  {
    user: { type: String, required: true },
    recipient: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("messages", Message);
