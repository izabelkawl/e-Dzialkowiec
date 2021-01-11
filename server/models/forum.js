import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Forum = new Schema({

  user_id:  { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
},
{ timestamps: true }
);

export default mongoose.model("forums", Forum);
