import { getMedicines } from '../services/medicines.js';

export const getMedicinesController = async (req, res) => {
  const medicinesArr = await getMedicines();

  res.status(200).send({
    status: 200,
    message: 'Successfully found medicines!',
    data: medicinesArr,
  });
};
