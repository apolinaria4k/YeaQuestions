import { useState } from 'react';
import axios from 'axios';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      setError('');
      await callback(...args);
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
