import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Classifieds = new Schema({
  
    title: {type: String, required: true },
    content: {type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("classifiedss", Classifieds);
