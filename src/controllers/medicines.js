import createHttpError from 'http-errors';
import { getMedicines, getMedicineById } from '../services/medicines.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getMedicinesController = async (req, res) => {
  const { category, medicine } = parseFilterParams(req.query);
  const { sortOrder } = parseSortParams(req.query);

  const medicinesArr = await getMedicines({
    category,
    medicine,
    sortOrder,
  });

  res.status(200).send({
    status: 200,
    message: 'Successfully found medicines!',
    data: medicinesArr,
  });
};

export const getMedicineController = async (req, res, next) => {
  const { medicineId } = req.params;
  const medicineInfo = await getMedicineById(medicineId);

  if (!medicineInfo) {
    return next(createHttpError(404, 'Medicine not found'));
  }

  res.send({
    status: 200,
    message: `Successfully find medicine with id ${medicineId}`,
    data: medicineInfo,
  });
};
