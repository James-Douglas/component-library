import { useEffect } from 'react';

export default function useUnmountEffect(func) {
  useEffect(() => {
    return func;
  }, []);
}
