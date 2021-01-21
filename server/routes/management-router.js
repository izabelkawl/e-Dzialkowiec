import express from "express";
import ManagementCtrl from "../controllers/management-ctrl.js";

const router = express.Router();

router.post("/management", ManagementCtrl.createManagement);
router.put("/management/:id", ManagementCtrl.updateManagement);
router.delete("/management/:id", ManagementCtrl.deleteManagement);
router.get("/management/:id", ManagementCtrl.getManagementById);
router.get("/managements", ManagementCtrl.getManagements);

export default router;
