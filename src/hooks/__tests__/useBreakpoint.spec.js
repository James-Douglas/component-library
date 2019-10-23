import { renderHook, act } from '@testing-library/react-hooks';
import useBreakpoint from '../useBreakpoint';

let mockBreakpointValue = 'xs';
jest.mock('../../utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
}));

describe('useBreakpoint', () => {
  it('returns current breakpoint', () => {
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toEqual('xs');
  });
  it('returns updated breakpoint on change', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const { result } = renderHook(() => useBreakpoint(false));
    expect(result.current).toEqual('xs');
    mockBreakpointValue = 'lg';
    act(() => {
      map.resize();
    });
    expect(result.current).toEqual('lg');
  });
});
