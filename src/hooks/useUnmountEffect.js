import { useEffect } from 'react';

export default function useUnmountEffect(func) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => func, []);
}
