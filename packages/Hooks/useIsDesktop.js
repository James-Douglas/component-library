import { isDesktop } from '@comparethemarketau/manor-utils';
import useBreakpoint from './useBreakpoint';

export default function useIsDesktop(throttleHandler = true) {
  const breakpoint = useBreakpoint(throttleHandler);
  return isDesktop(breakpoint);
}
