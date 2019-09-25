import { useState } from 'react';
import useMountEffect from './useMountEffect';
import throttle from '../utils/throttle';
import { isDesktop } from '../utils/breakpoint';

export default function useIsDesktop() {
  const [desktop, setIsDesktop] = useState(isDesktop);

  useMountEffect(() => {
    const handleResize = () => {
      setIsDesktop(isDesktop());
    };
    const throttledHandleResize = throttle(handleResize);
    window.addEventListener('resize', throttledHandleResize);
    return () => window.removeEventListener('resize', throttledHandleResize);
  });

  return desktop;
}
