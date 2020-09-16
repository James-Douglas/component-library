import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { throttle, getBreakpoint } from '@comparethemarketau/manor-utils';
import useMountEffect from './useMountEffect';

export default function useBreakpoint(throttleHandler = true, customBreakpoints) {
  const theme = useContext(ThemeContext);
  const breakpoints = customBreakpoints
    || Object.assign({}, ...Object.keys(theme.breakpoints).map((key) => ({ [key]: parseInt(theme.breakpoints[key].substring(0, theme.breakpoints[key].length - 2), 10) })));
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(breakpoints));

  useMountEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(breakpoints));
    };
    const handler = throttleHandler ? throttle(handleResize) : handleResize;
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });
  return breakpoint;
}
