import mongoose from "mongoose";

const NoticeBoard = mongoose.Schema({
  user_id: {  
    firstname: { type: String, required: true },
    lastname: {type: String, required: true }, 
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: {  type: String, required: true },
  price: {  type: String, required: true },
  timestamps: true,
});

export default mongoose.model("noticeboards", NoticeBoard);
