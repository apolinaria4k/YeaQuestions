export const numbersFromString = (arrayOfString) => {
  if (!arrayOfString) return '';
  return arrayOfString.map((item) => Number(item));
};
