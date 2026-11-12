import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getNearestPharmaciesController,
  getPharmaciesController,
} from '../controllers/pharmacies.js';

const router = Router();

router.get('/pharmacies', ctrlWrapper(getPharmaciesController));

router.get('/nearest_pharmacies', ctrlWrapper(getNearestPharmaciesController));

export default router;
