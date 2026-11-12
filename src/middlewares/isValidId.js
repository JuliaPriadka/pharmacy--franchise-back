import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { medicineId } = req.params;

  console.log(isValidObjectId(medicineId), 'isValidObjectId(medicineId)');

  if (!isValidObjectId(medicineId)) {
    return next(createHttpError(404, 'Bad request'));
  }

  next();
};
