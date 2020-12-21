import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Finance = new Schema({

  user_id: { type: Schema.Types.ObjectId, ref: "User"},
  allotment_number: { type: Number, required: true },
  area: { type: Number, required: true },
  term: { type: String, required: true },
  payment_date: { type: String, required: true },
  charge: { type: Number, required: true },
  status: { type: String, required: true },
  account: { type: String, required: true },
},
{ timestamps: true }
);
export default mongoose.model("finances", Finance);
