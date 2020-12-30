import express from "express";
import ForumCtrl from "../controllers/forum-ctrl.js";

const router = express.Router();

router.post("/forum", ForumCtrl.createForum);
router.put("/forum/:id", ForumCtrl.updateForum);
router.delete("/forum/:id", ForumCtrl.deleteForum);
router.get("/forum/:id", ForumCtrl.getForumById);
router.get("/forums", ForumCtrl.getForums);

export default router;
