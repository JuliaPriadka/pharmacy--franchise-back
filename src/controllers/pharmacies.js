import { getPharmacies, getNearestPharmacies } from '../services/pharmacies.js';

export const getPharmaciesController = async (req, res) => {
  const pharmaciesArr = await getPharmacies();

  res.status(200).send({
    status: 200,
    message: 'Successfully found pharmacies!',
    data: pharmaciesArr,
  });
};

export const getNearestPharmaciesController = async (req, res) => {
  const nearestPharmaciesArr = await getNearestPharmacies();

  res
    .status(200)
    .send({
      status: 200,
      message: 'Successfully found nearest pharmacies!',
      data: nearestPharmaciesArr,
    });
};
