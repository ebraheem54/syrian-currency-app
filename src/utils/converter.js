import { CONVERSION_RATE } from '../constants/conversionData';

export const convertOldToNew = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) return '';
  return (num / CONVERSION_RATE).toFixed(2);
};

export const convertNewToOld = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) return '';
  return (num * CONVERSION_RATE).toFixed(2);
};