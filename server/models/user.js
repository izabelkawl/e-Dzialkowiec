import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({

  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
},
{ timestamps: true }
);
export default mongoose.model("users", User);
