import { MedicinesCollection } from '../db/models/medicines.js';

export const getMedicines = () => {
  return MedicinesCollection.find();
};
