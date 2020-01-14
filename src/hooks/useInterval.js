import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    let id = null;
    if (delay !== null) {
      id = setInterval(tick, delay);
    }
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
