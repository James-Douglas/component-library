import { useState } from 'react';
import { throttle, getBreakpoint } from '@comparethemarketau/manor-utils';
import useMountEffect from './useMountEffect';

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
