import express from "express";
import AnnouncementCtrl from "../controllers/announcement-ctrl.js";

const router = express.Router();

router.post("/announcement", AnnouncementCtrl.createAnnouncement);
router.put("/announcement/:id", AnnouncementCtrl.updateAnnouncement);
router.delete("/announcement/:id", AnnouncementCtrl.deleteAnnouncement);
router.get("/announcement/:id", AnnouncementCtrl.getAnnouncementById);
router.get("/announcements", AnnouncementCtrl.getAnnouncements);

export default router;
