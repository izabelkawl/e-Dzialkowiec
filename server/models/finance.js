import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Finance = new Schema({

  allotment_number: { type: Number, required: true },
  title: { type: String, required: true },
  area: { type: Number, required: true },
  charge: { type: Number, required: true },
  term: { type: String, required: true },
  account: { type: String, required: true },
  status: { type: String, required: true },
},
{ timestamps: true }
);
export default mongoose.model("finances", Finance);
