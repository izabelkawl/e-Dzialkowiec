import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Allotment = new Schema({

  number: { type: Number, required: true },
  allotment_width: { type: Number, required: true },
  allotment_length: { type: Number, required: true },
  price: { type: Number, require: true },
  status: { type: String, required: true },
  user_id: { type: String, required: true },
  // user_id: { type: Schema.Types.ObjectId, ref: "User"},
},
{ timestamps: true }
);

export default mongoose.model("allotments", Allotment);
