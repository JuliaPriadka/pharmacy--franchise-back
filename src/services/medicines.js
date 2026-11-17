import { MedicinesCollection } from '../db/models/medicines.js';

export const getMedicines = async ({
  category,
  medicine,
  sortOrder,
  sortBy = 'price',
}) => {
  const medicinesQuery = MedicinesCollection.find();

  if (category !== undefined) {
    medicinesQuery.where('category').equals(category);
  }

  if (medicine !== undefined) {
    medicinesQuery.find({
      name: {
        $regex: medicine,
        $options: 'i',
      },
    });
  }

  const medicinesArr = await medicinesQuery
    .sort({ [sortBy]: sortOrder })
    .exec();

  return {
    data: medicinesArr,
  };
};

export const getMedicineById = (medicineId) => {
  return MedicinesCollection.findById(medicineId);
};
