import { useEffect } from 'react';

export default function useMountEffect(func) {
  useEffect(func, []);
}
