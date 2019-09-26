import { useEffect, useRef } from 'react';

/**
 * Hook to obtain the previous value of a prop or state value
 * @param value - the state/prop
 * @returns {*} the previous value
 */
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

export default usePrevious;
