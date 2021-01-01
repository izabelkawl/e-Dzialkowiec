import express from "express";
import CommentCtrl from "../controllers/comment-ctrl.js";

const router = express.Router();

router.post("/comment", CommentCtrl.createComment);
router.put("/comment/:id", CommentCtrl.updateComment);
router.delete("/comment/:id", CommentCtrl.deleteComment);
router.get("/comment/:id", CommentCtrl.getCommentById);
router.get("/comments", CommentCtrl.getComments);

export default router;
