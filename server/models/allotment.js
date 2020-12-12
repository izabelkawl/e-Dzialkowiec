import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Allotment = new Schema({

  image: { type: String, require: true },
  number: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  price: { type: Number, require: true },
  status: { type: String, required: true },
  //or allotment in user ? pesel?
  user_id: { type: String, required: true },
  // user_id: { type: Schema.Types.ObjectId, ref: "User"},
},
{ timestamps: true }
);

export default mongoose.model("allotments", Allotment);
