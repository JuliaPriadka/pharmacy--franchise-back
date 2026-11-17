import { SORT_ORDER } from '../constants/index.js';

function parseSortOrder(value) {
  return typeof value === 'undefined' ? SORT_ORDER.ASC : value;
}

export function parseSortParams(query) {
  const { sortOrder } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);

  return { sortOrder: parsedSortOrder };
}
