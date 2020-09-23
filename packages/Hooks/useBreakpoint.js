import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { getBreakpoint } from '@comparethemarketau/manor-utils';
import useMountEffect from './useMountEffect';

const getThemeBreakpoints = (theme) => Object.assign(
  {},
  ...Object.keys(theme.breakpoints)
    .map((key) => ({
      [key]: parseInt(theme.breakpoints[key].substring(0, theme.breakpoints[key].length - 2), 10),
    })),
);

const listenForBreakpointChanges = (callback, breakpoints) => {
  const handleResize = () => {
    callback(getBreakpoint(breakpoints));
  };
  window.addEventListener('resize', handleResize);
  return handleResize;
};

export default function useBreakpoint(throttleHandler = true, customBreakpoints) {
  const theme = useContext(ThemeContext);
  const breakpoints = customBreakpoints || getThemeBreakpoints(theme);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(breakpoints));

  useMountEffect(() => {
    const handler = listenForBreakpointChanges((bp) => setBreakpoint(bp), breakpoints);
    return () => window.removeEventListener('resize', handler);
  });
  return breakpoint;
}

export { getThemeBreakpoints, listenForBreakpointChanges };
