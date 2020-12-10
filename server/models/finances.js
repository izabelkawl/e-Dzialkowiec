import mongoose from "mongoose";

const Finance = mongoose.Schema({
  user_id: { type: String, required: true },
  title: { type: String, required: true },
  charge: { type: String, required: true },
  status: { type: String, required: true },
  account: { type: String, required: true },
  payment_date: { type: String, required: true }
});

export default mongoose.model("finances", Finance);
