import express from 'express';

const router = express.Router();

import uploadMulter from '../middlewares/upload.js';
import validation from '../middlewares/validation.js';
import createCategory from '../controllers/category-ctrl.js';



router.post('/category', uploadMulter, validation, createCategory)

export default router