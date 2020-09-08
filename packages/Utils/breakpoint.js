import screens from './screens';

const BREAKPOINTS = Object.assign({}, ...Object.keys(screens).map((key) => ({ [key]: parseInt(screens[key].substring(0, screens[key].length - 2), 10) })));

function getBreakpoint(customBreakpoints) {
  const breakpoints = customBreakpoints || BREAKPOINTS;
  const width = window.innerWidth;
  const results = Object.keys(breakpoints).map((breakpoint) => ({
    breakpoint,
    breakpointWidth: breakpoints[breakpoint],
  }));
  const found = results.find(({ breakpointWidth }) => (width < breakpointWidth)) || results[results.length - 1];
  return found.breakpoint;
}
function isDesktop(breakpoint = getBreakpoint()) {
  return ['md', 'lg', 'xl'].includes(breakpoint);
}

export { getBreakpoint, isDesktop };
