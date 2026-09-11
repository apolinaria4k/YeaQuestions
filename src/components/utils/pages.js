export const getTotalPages = (totalCount, limit = 10) => {
  return Math.ceil(totalCount / limit);
};
