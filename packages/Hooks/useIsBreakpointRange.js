import { useContext } from 'react';
import { ManorContext } from '@comparethemarketau/manor-provider';

const BREAKPOINT_FROM = 'xs';
const BREAKPOINT_TO = 'lg';
const breakpoints = ['xs', 'sm', 'md', 'lg'];

export default function useIsBreakpointRange(options = {}) {
  const breakpointFrom = options.breakpointFrom || BREAKPOINT_FROM;
  const breakpointTo = options.breakpointTo || BREAKPOINT_TO;
  const { breakpoint } = useContext(ManorContext);

  const breakpointFromIndex = breakpoints.indexOf(breakpointFrom);
  const breakpointToIndex = breakpoints.indexOf(breakpointTo);

  if (breakpointFromIndex === -1 || breakpointToIndex === -1) {
    throw new Error(`useIsBreakpointRange('${breakpointFrom}', '${breakpointTo}') Error:
      invalid breakpoint range values.`);
  }

  if (breakpointFromIndex > breakpointToIndex) {
    throw new Error(`useIsBreakpointRange('${breakpointFrom}', '${breakpointTo}') Error: 
      breakpointFrom value can not be greater than breakpointTo value.`);
  }

  if (breakpoint === breakpoints[breakpoints - 1] && breakpointTo !== breakpoints[breakpoints - 1]) {
    return false;
  }

  if ((breakpointFrom === breakpoint) || (breakpointTo === breakpoint)) {
    return true;
  }

  return breakpoints.slice(breakpointFromIndex, breakpointToIndex)
    .includes(breakpoint);
}
