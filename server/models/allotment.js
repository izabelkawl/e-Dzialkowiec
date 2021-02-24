import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Allotment = new Schema({

  number: { type: String, required: true },
  allotment_width: { type: String, required: true },
  allotment_length: { type: String, required: true },
  price: { type: String, require: true },
  status: { type: String, required: true },
  user_id: { type: String, required: true },
  // user_id: { type: Schema.Types.ObjectId, ref: "User"},
},
{ timestamps: true }
);

export default mongoose.model("allotments", Allotment);
