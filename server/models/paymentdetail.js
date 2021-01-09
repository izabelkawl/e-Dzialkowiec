import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Paymentdetail = new Schema({

  stable_price: { type: Number, required: true },
  membership_fee: { type: Number, required: true },
  water_advance:{ type: Number, required: true },
  water_charge: { type: Number, required: true },
  energy_charge: { type: Number, required: true },
  garbage:{ type: Number, required: true },

  transfer_title: { type: String, required: true },
  payment_date: { type: String, required: true },
  account_number: { type: String, required: true },
  
},
{ timestamps: true }
);
export default mongoose.model("paymentdetails", Paymentdetail);
