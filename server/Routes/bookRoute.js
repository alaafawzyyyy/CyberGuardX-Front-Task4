import express from 'express';
import { getBooks , addBook } from '../Controllers/bookController.js';

const router = express.Router();

router.get('/', getBooks);
router.post('/', addBook);

export default router;
