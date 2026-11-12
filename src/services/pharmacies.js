import { nearestPharmaciesCollection } from '../db/models/nearestPharmacies.js';
import { pharmacyCollection } from '../db/models/pharmacies.js';

export const getPharmacies = () => {
  return pharmacyCollection.find();
};

export const getNearestPharmacies = () => {
  return nearestPharmaciesCollection.find();
};
