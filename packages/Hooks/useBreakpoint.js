import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { getBreakpoint, throttle } from '@comparethemarketau/manor-utils';
import useMountEffect from './useMountEffect';

const getThemeBreakpoints = (theme) => theme.breakpointsNumeric || {};

export default function useBreakpoint(throttleHandler = true, customBreakpoints) {
  const theme = useContext(ThemeContext);
  const breakpoints = customBreakpoints || getThemeBreakpoints(theme);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(breakpoints));

  useMountEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(breakpoints));
    };
    const handler = throttleHandler ? throttle(handleResize, 150) : handleResize;
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });
  return breakpoint;
}

export { getThemeBreakpoints };
