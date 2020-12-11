import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Table = new Schema({

  title: { type: String, required: true },
  user: { type: String, required: true },
  // user_id: { type: Schema.Types.ObjectId, ref: "User"},
  content: { type: String, required: true },
  image: {  type: String, required: true },
  price: {  type: Number, required: true },
 },
 { 
   timestamps: true,
});

export default mongoose.model("tables", Table);
