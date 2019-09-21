import { useEffect, useState } from 'react';
import screens from '../../config/screens';
import throttle from './throttle';

const breakpoints = Object.assign(
  {},
  ...Object.keys(screens)
    .map((key) => ({ [key]: parseInt(screens[key].substring(0, screens[key].length - 2), 10) })),
);

function getBreakpoint() {
  const width = window.innerWidth;

  if (width <= breakpoints.xs) {
    return 'xs';
  } if (width <= breakpoints.sm) {
    return 'sm';
  } if (width <= breakpoints.md) {
    return 'md';
  } if (width <= breakpoints.lg) {
    return 'lg';
  } if (width <= breakpoints.xl) {
    return 'xl';
  }

  return 'xxl';
}

function isDesktop(breakpoint = getBreakpoint()) {
  return ['md', 'lg', 'xl', 'xxl'].includes(breakpoint);
}

function useIsDesktop() {
  const [desktop, setIsDesktop] = useState(isDesktop);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(isDesktop());
    };
    const throttledHandleResize = throttle(handleResize);
    window.addEventListener('resize', throttledHandleResize);
    return () => window.removeEventListener('resize', throttledHandleResize);
  }, []);
  return desktop;
}

export { getBreakpoint, isDesktop, useIsDesktop };
