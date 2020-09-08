import useBreakpoint from './useBreakpoint';

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];
const BREAKPOINT_FROM = 'xs';
const BREAKPOINT_TO = 'xl';

export default function useIsBreakpointRange(options) {
  const breakpointFrom = options && options.breakpointFrom ? options.breakpointFrom : BREAKPOINT_FROM;
  const breakpointTo = options && options.breakpointTo ? options.breakpointTo : BREAKPOINT_TO;
  const breakpoint = useBreakpoint(true, (options && options.customBreakpoints) && options.customBreakpoints);
  const breakpoints = options && options.customBreakpoints ? Object.keys(options.customBreakpoints) : BREAKPOINTS;
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
