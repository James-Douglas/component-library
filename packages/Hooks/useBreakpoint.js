import { useState } from 'react';
import { throttle, getBreakpoint } from '@comparethemarketau/manor-utils';
import useMountEffect from './useMountEffect';

export default function useBreakpoint(throttleHandler = true, customBreakpoints) {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(customBreakpoints));

  useMountEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(customBreakpoints));
    };
    const handler = throttleHandler ? throttle(handleResize) : handleResize;
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return breakpoint;
}
