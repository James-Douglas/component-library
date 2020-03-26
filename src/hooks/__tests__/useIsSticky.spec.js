import { renderHook, act } from '@testing-library/react-hooks';
import useIsSticky from '../useIsSticky';

describe('useIsSticky', () => {
  it('should stick if scroll more than initial offset', () => {
    const initialOffset = 10;
    const scrollTop = 20;
    // define event mapping
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const { result } = renderHook(() => useIsSticky(initialOffset));
    // set scroll
    global.window.pageYOffset = scrollTop;
    // trigger scroll event
    act(() => {
      map.scroll();
    });
    expect(result.current).toBe(true);
  });

  it('should stick if scroll more than initial offset', () => {
    const initialOffset = 10;
    const scrollTop = 5;
    // define event mapping
    const map = {};
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });

    const { result } = renderHook(() => useIsSticky(initialOffset));
    // set scroll
    global.window.pageYOffset = scrollTop;
    // trigger scroll event
    act(() => {
      map.scroll();
    });
    expect(result.current).toBe(false);
  });

  it('default value', () => {
    const { result } = renderHook(() => useIsSticky());
    expect(result.current).toBe(false);
  });
});
