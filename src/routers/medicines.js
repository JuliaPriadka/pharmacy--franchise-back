import express from 'express';
import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getMedicinesController } from '../controllers/medicines.js';

const router = Router();
// const jsonParser = express.json();

router.get('/medicines', ctrlWrapper(getMedicinesController));

export default router;
