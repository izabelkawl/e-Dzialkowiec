import express from "express";
import HandymanCtrl from "../controllers/handyman-ctrl.js";

const router = express.Router();

router.post("/handyman", HandymanCtrl.createHandyman);
router.put("/handyman/:id", HandymanCtrl.updateHandyman);
router.delete("/handyman/:id", HandymanCtrl.deleteHandyman);
router.get("/handyman/:id", HandymanCtrl.getHandymanById);
router.get("/handymans", HandymanCtrl.getHandymans);

export default router;
