import express from "express";
import MessageCtrl from "../controllers/message-ctrl.js";

const router = express.Router();

router.post("/message", MessageCtrl.createMessage);
router.put("/message/:id", MessageCtrl.updateMessage);
router.delete("/message/:id", MessageCtrl.deleteMessage);
router.get("/message/:id", MessageCtrl.getMessageById);
router.get("/messages", MessageCtrl.getMessages);

export default router;
