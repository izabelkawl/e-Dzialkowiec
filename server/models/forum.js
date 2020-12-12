import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Forum = new Schema({

  user_id: { type: Schema.Types.ObjectId, ref: "User"},
  title: { type: String, required: true },
  content: { type: String, required: true },
  comment: [{  type: Schema.Types.ObjectId, ref: "Comment"}],
},
{ timestamps: true }
);

export default mongoose.model("forums", Forum);
