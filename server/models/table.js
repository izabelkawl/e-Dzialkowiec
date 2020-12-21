import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Table = new Schema({

  title: { type: String, required: true },
  user_id: { type: String, required: true },
  content: { type: String, required: true },
  image: {  type: String, required: true },
 },
 { 
   timestamps: true,
});

export default mongoose.model("tables", Table);
