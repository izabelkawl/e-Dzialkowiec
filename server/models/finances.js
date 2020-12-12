import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Finance = new Schema({

  user_id: { type: Schema.Types.ObjectId, ref: "User"},
  title: { type: String, required: true },
  charge: { type: String, required: true },
  status: { type: String, required: true },
  account: { type: String, required: true },
  payment_date: { type: String, required: true },
},
{ timestamps: true }
);
export default mongoose.model("finances", Finance);
