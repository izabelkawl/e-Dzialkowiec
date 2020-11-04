import mongoose from "mongoose";

const Handyman = mongoose.Schema({
  profession: { type: String, required: true },
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, required: true },
});

export default mongoose.model("handymans", Handyman);
