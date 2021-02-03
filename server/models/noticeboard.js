import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoticeBoard = new Schema({

  title: { type: String, required: true },
  user_id: { type: String, required: true },
  advertisement: { type: String, required: true },
  image: {  type: String, required: true },
 },
 { 
   timestamps: true,
});

export default mongoose.model("noticeboards", NoticeBoard);
