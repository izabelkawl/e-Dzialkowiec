import mongoose from "mongoose";

const User = mongoose.Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("users", User);
