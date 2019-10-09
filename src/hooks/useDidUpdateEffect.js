import { useRef, useEffect } from 'react';

export default function useDidUpdateEffect(fn, args, deps) {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn(...args);
    } else {
      didMountRef.current = true;
    }
  }, [deps]);
}
