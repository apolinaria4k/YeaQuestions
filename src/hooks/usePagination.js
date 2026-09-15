import { useMemo } from 'react';

export const usePagination = (currentPage, totalPages) => {
  const pagesArray = useMemo(() => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let last;

    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i < totalPages && i > 1) {
        range.push(i);
      }
    }

    range.push(totalPages);

    for (let i of range) {
      if (last) {
        if (i - last === 2) {
          rangeWithDots.push(last + 1);
        } else if (i - last !== 1) {
          rangeWithDots.push('...');
        }
      }

      rangeWithDots.push(i);
      last = i;
    }

    return rangeWithDots;
  }, [totalPages]);

  return pagesArray;
};
