import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Management = new Schema({
  
  description: { type: String, required: true },
  rodo: {type: String, required: true },
  title: {type: String, required: true },
  name: {type: String, required: true },
  city: {type: String, required: true },
  address: {type: String, required: true },
  phone: {type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("managements", Management);
