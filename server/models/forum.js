import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Forum = new Schema({

  user:  { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comment: { type: String, required: true },
},
{ timestamps: true }
);

export default mongoose.model("forums", Forum);
