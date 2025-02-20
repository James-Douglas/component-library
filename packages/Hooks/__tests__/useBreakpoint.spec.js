import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ThemeProvider } from 'styled-components';
import useBreakpoint from '../useBreakpoint';

let mockBreakpointValue = 'xs';
jest.mock('../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
}));

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('useBreakpoint', () => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={{ breakpoints: { xs: '375px' } }}>
      {children}
    </ThemeProvider>
  );
  it('returns current breakpoint', () => {
    const { result } = renderHook(
      () => useBreakpoint(),
      {
        wrapper: Wrapper,
      },
    );
    expect(result.current).toEqual('xs');
  });
  it('returns updated breakpoint on change', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const { result } = renderHook(() => useBreakpoint(true),
      {
        wrapper: Wrapper,
      });
    expect(result.current).toEqual('xs');
    mockBreakpointValue = 'lg';
    act(() => {
      map.resize();
      jest.advanceTimersByTime(200);
    });
    expect(result.current).toEqual('lg');
  });
});
