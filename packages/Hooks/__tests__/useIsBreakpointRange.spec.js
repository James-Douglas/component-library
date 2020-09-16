import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ThemeProvider } from 'styled-components';
import useIsBreakpointRange from '../useIsBreakpointRange';

let mockBreakpointValue = 'xs';
jest.mock('../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
}));

describe('useIsBreakpointRange', () => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={{ breakpoints: { xs: '375px' } }}>
      {children}
    </ThemeProvider>
  );
  it('returns true when breakpoint is between xs and xl', () => {
    const { result } = renderHook(
      () => useIsBreakpointRange(),
      {
        wrapper: Wrapper,
      },
    );
    expect(result.current).toBe(true);
  });
  it('returns true when breakpoint is between md and xl', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mockBreakpointValue = 'lg';
    const { result } = renderHook(
      () => useIsBreakpointRange({ breakpointFrom: 'md' }),
      {
        wrapper: Wrapper,
      },
    );
    act(() => {
      map.resize();
    });
    expect(result.current).toBe(true);
  });
  it('returns false when breakpoint is not between md and xl', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mockBreakpointValue = 'sm';
    const { result } = renderHook(
      () => useIsBreakpointRange({ breakpointFrom: 'md' }),
      {
        wrapper: Wrapper,
      },
    );
    act(() => {
      map.resize();
    });
    expect(result.current).toBe(false);
  });
  it('returns true when breakpoint is to md', () => {
    const { result } = renderHook(
      () => useIsBreakpointRange({ breakpointTo: 'md' }),
      {
        wrapper: Wrapper,
      },
    );
    expect(result.current).toBe(true);
  });
  it('returns false when breakpoint is not to md', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mockBreakpointValue = 'sm';
    const { result } = renderHook(
      () => useIsBreakpointRange({ breakpointFrom: 'md' }),
      {
        wrapper: Wrapper,
      },
    );
    act(() => {
      map.resize();
    });
    expect(result.current).toBe(false);
  });
  it('returns true when breakpoint is between sm and lg', () => {
    const { result } = renderHook(
      () => useIsBreakpointRange({ breakpointFrom: 'sm', breakpointTo: 'lg' }),
      {
        wrapper: Wrapper,
      },
    );
    expect(result.current).toBe(true);
  });
  it('returns false when breakpoint is not between sm and lg', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mockBreakpointValue = 'xl';
    const { result } = renderHook(
      () => useIsBreakpointRange({ breakpointFrom: 'sm', breakpointTo: 'lg' }),
      {
        wrapper: Wrapper,
      },
    );
    act(() => {
      map.resize();
    });
    expect(result.current).toBe(false);
  });
  it('returns true when breakpoint is between extraSmall and medium', () => {
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    mockBreakpointValue = 'small';
    const { result } = renderHook(
      () => useIsBreakpointRange({
        breakpointFrom: 'extraSmall',
        breakpointTo: 'medium',
        customBreakpoints: {
          extraSmall: 400, small: 600, medium: 800, large: 1000, extraLarge: 1200,
        },
      }),
      {
        wrapper: Wrapper,
      },
    );

    expect(result.current).toBe(true);
  });
});
