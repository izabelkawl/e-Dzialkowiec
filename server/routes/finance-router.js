import express from "express";
import PaymentdetailCtrl from "../controllers/paymentdetail-ctrl.js";

const router = express.Router();

router.post("/paymentdetail", PaymentdetailCtrl.createPaymentdetail);
router.put("/paymentdetail/:id", PaymentdetailCtrl.updatePaymentdetail);
router.delete("/paymentdetail/:id", PaymentdetailCtrl.deletePaymentdetail);
router.get("/paymentdetail/:id", PaymentdetailCtrl.getPaymentdetailById);
router.get("/paymentdetails", PaymentdetailCtrl.getPaymentdetails);

export default router;
