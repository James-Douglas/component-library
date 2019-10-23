import { useState } from 'react';
import useMountEffect from './useMountEffect';
import throttle from '../utils/throttle';
import { getBreakpoint } from '../utils/breakpoint';

export default function useBreakpoint(throttleHandler = true) {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useMountEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };
    const handler = throttleHandler ? throttle(handleResize) : handleResize;
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return breakpoint;
}
