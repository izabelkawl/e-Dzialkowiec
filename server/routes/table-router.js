import express from "express";
import TableCtrl from "../controllers/table-ctrl.js";

const router = express.Router();

router.post("/table", TableCtrl.createTable);
router.put("/table/:id", TableCtrl.updateTable);
router.delete("/table/:id", TableCtrl.deleteTable);
router.get("/table/:id", TableCtrl.getTableById);
router.get("/tables", TableCtrl.getTables);

export default router;
