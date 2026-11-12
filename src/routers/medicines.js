import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getMedicinesController,
  getMedicineController,
} from '../controllers/medicines.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();
// const jsonParser = express.json();

router.get('/medicines', ctrlWrapper(getMedicinesController));

router.get(
  '/medicines/:medicineId',
  isValidId,
  ctrlWrapper(getMedicineController),
);

export default router;
