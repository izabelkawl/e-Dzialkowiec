import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Paymentdetail = new Schema({

  stable_price: { type: String, required: true },
  membership_fee: { type: String, required: true },
  water_advance:{ type: String, required: true },
  water_charge: { type: String, required: true },
  energy_charge: { type: String, required: true },
  garbage:{ type: String, required: true },

  transfer_title: { type: String, required: true },
  payment_date: { type: String, required: true },
  account_number: { type: String, required: true },
  
},
{ timestamps: true }
);
export default mongoose.model("paymentdetails", Paymentdetail);
