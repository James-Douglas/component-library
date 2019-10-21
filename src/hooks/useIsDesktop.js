import useBreakpoint from './useBreakpoint';

export default function useIsDesktop(throttleHandler = true) {
  const breakpoint = useBreakpoint(throttleHandler);
  return ['md', 'lg', 'xl', 'xxl'].includes(breakpoint);
}
