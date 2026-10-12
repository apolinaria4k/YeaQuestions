import { useRef, useState } from 'react';
import axios from 'axios';

export const useFetching = (callback) => {
  const requestIdRef = useRef(0);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const fetching = async (...args) => {
    const myId = ++requestIdRef.current;
    const signal = args[args.length - 1];
    const isActual = () => requestIdRef.current === myId;
    try {
      setStatus('loading');
      setError(null);

      await callback(...args, isActual);

      if (requestIdRef.current === myId && !signal?.aborted) {
        setStatus('success');
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        return;
      }

      if (requestIdRef.current !== myId) {
        return;
      }

      setError(error);
      setStatus('error');
    }
  };

  return [fetching, status, error];
};
