import mongoose from "mongoose";

const Allotment = mongoose.Schema({
  image: { type: String, require: true },
  number: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  price: { type: Number, require: true },
  status: { type: String, required: true },
  user_id: {type: String, required: true},
});

export default mongoose.model("allotments", Allotment);
