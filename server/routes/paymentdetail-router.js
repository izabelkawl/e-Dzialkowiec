import express from "express";
import FinanceCtrl from "../controllers/finance-ctrl.js";

const router = express.Router();

router.post("/finance", FinanceCtrl.createFinance);
router.put("/finance/:id", FinanceCtrl.updateFinance);
router.delete("/finance/:id", FinanceCtrl.deleteFinance);
router.get("/finance/:id", FinanceCtrl.getFinanceById);
router.get("/finances", FinanceCtrl.getFinances);

export default router;
