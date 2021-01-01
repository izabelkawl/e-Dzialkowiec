import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema({

  commenter: {type: String, required: true },
  comment_content: {type: String, required: true },
  forum_id: {type: String, required: true },
},
{ timestamps: true }
);
export default mongoose.model("comments", Comment);
