function getBreakpoint(breakpoints) {
  const width = window.innerWidth;
  const results = Object.keys(breakpoints).map((breakpoint) => ({
    breakpoint,
    breakpointWidth: breakpoints[breakpoint],
  }));
  const found = results.find(({ breakpointWidth }) => (width <= breakpointWidth)) || results[results.length - 1];
  return found.breakpoint;
}
function isDesktop(breakpoint = getBreakpoint()) {
  return ['md', 'lg'].includes(breakpoint);
}

export { getBreakpoint, isDesktop };
