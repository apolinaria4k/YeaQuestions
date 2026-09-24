import { useState } from 'react';
import axios from 'axios';

export const useFetching = (callback) => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const fetching = async (...args) => {
    const signal = args[args.length - 1];
    try {
      setStatus('loading');
      setError(null);

      await callback(...args);

      if (!signal?.aborted) {
        setStatus('success');
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }
      setError(error);
      setStatus('error');
    }
  };

  return [fetching, status, error];
};
