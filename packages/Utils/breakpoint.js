import screens from './screens';

const breakpoints = Object.assign({}, ...Object.keys(screens).map((key) => ({ [key]: parseInt(screens[key].substring(0, screens[key].length - 2), 10) })));

function getBreakpoint() {
  const width = window.innerWidth;

  if (width > breakpoints.lg) {
    return 'xl';
  }
  if (width > breakpoints.md) {
    return 'lg';
  }
  if (width > breakpoints.sm) {
    return 'md';
  }
  if (width > breakpoints.xs) {
    return 'sm';
  }
  return 'xs';
}
function isDesktop(breakpoint = getBreakpoint()) {
  return ['md', 'lg', 'xl'].includes(breakpoint);
}

export { getBreakpoint, isDesktop };
