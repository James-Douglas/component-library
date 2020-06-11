import { useState } from 'react';
import useMountEffect from './useMountEffect';
import throttle from '../Utils/throttle';
import { getBreakpoint } from '../Utils/breakpoint';

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
