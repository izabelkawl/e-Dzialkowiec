import express from "express";
import NoticeboardCtrl from "../controllers/noticeboard-ctrl.js";

const router = express.Router();

router.post("/noticeboard", NoticeboardCtrl.createNoticeboard);
router.put("/noticeboard/:id", NoticeboardCtrl.updateNoticeboard);
router.delete("/noticeboard/:id", NoticeboardCtrl.deleteNoticeboard);
router.get("/noticeboard/:id", NoticeboardCtrl.getNoticeboardById);
router.get("/noticeboards", NoticeboardCtrl.getNoticeboards);

export default router;
