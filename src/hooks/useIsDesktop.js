import { useState } from 'react';
import useMountEffect from './useMountEffect';
import throttle from '../utils/throttle';
import { isDesktop } from '../utils/breakpoint';

export default function useIsDesktop(throttleHandler = true) {
  const [desktop, setIsDesktop] = useState(isDesktop);
  useMountEffect(() => {
    const handleResize = () => {
      setIsDesktop(isDesktop());
    };
    const handler = throttleHandler ? throttle(handleResize) : handleResize;
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return desktop;
}
