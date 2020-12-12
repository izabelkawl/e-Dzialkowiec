import express from 'express';

import uploadMulter from '../middlewares/upload.js';
import validation from '../middlewares/validation.js';
import createCategory from '../controllers/category-ctrl.js';

const router = express.Router();

router.post('/category', uploadMulter, validation, createCategory)

export default router