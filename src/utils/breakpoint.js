import breakpoints from '../../config/screens';

function getBreakpoint() {
  const width = window.innerWidth;

  if (width < breakpoints.xs) {
    return 'xs';
  }
  if (width < breakpoints.sm) {
    return 'sm';
  }
  if (width < breakpoints.md) {
    return 'md';
  }
  if (width < breakpoints.lg) {
    return 'lg';
  }
  if (width < breakpoints.xl) {
    return 'xl';
  }

  return 'xxl';
}
function isDesktop(breakpoint = getBreakpoint()) {
  return ['md', 'lg', 'xl', 'xxl'].includes(breakpoint);
}

export { getBreakpoint, isDesktop };
