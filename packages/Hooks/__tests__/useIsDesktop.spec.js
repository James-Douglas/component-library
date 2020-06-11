import { renderHook } from '@testing-library/react-hooks';
import useIsDesktop from '../useIsDesktop';

let mockUseBreakpointValue;
jest.mock('../useBreakpoint', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseBreakpointValue),
}));

describe('useIsDesktop', () => {
  it('returns false when mobile', () => {
    mockUseBreakpointValue = 'xs';
    const { result } = renderHook(() => useIsDesktop());
    expect(result.current).toBe(false);
  });
  it('returns true when desktop', () => {
    mockUseBreakpointValue = 'md';
    const { result } = renderHook(() => useIsDesktop());
    expect(result.current).toBe(true);
  });
});
