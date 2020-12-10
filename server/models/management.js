import mongoose from "mongoose";

const Management = mongoose.Schema({
  description: { type: String, required: true },
  members: {
    role: {type: String, required: true },
    firstname: {type: String, required: true },
    lastname: {type: String, required: true },
    },
    classifieds: { 
      title: {type: String, required: true },
      content: {type: String, required: true },
      timestamps: true,
    },
    rodo: { 
      content: {type: String, required: true },
      timestamps: true,
    },
});

export default mongoose.model("managements", Management);
