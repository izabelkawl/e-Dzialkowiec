import express from 'express';

const router = express.Router();

import uploadMulter from '../middlewares/uploadAct.js';
import validation from '../middlewares/validationAct.js';
import ActCtrl from '../controllers/act-ctrl.js';

router.post('/act', uploadMulter, validation, ActCtrl.createAct)
router.get('/acts', ActCtrl.getActs);
router.delete("/act/:id", ActCtrl.deleteAct);

export default router