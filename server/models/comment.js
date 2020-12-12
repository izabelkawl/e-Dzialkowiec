import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema({

  user_id: { type: Schema.Types.ObjectId, ref: "User"},
  content: {type: String, required: true },
},
{ timestamps: true }
);
export default mongoose.model("comments", Comment);
