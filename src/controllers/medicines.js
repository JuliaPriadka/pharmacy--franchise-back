import createHttpError from 'http-errors';
import { getMedicines, getMedicineById } from '../services/medicines.js';

export const getMedicinesController = async (req, res) => {
  const medicinesArr = await getMedicines();

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
