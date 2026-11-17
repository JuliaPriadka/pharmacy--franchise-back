import { CATEGORIES } from '../constants/index.js';

function parseCategoryParams(value) {
  return [
    CATEGORIES.MEDICINE,
    CATEGORIES.HAND,
    CATEGORIES.LEG,
    CATEGORIES.HEART,
    CATEGORIES.DENTAL_CARE,
    CATEGORIES.SKIN_CARE,
  ].includes(value)
    ? value
    : undefined;
}

function parseNameParams(value) {
  return typeof value === 'undefined' ? undefined : value;
}

export function parseFilterParams(query) {
  const { category, medicine } = query;

  const parsedCategoryToFind = parseCategoryParams(category);
  const parsedMedicineToFind = parseNameParams(medicine);

  return {
    category: parsedCategoryToFind,
    medicine: parsedMedicineToFind,
  };
}
