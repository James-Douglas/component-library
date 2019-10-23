import { renderHook, act } from '@testing-library/react-hooks';
import useToggleState from '../useToggleState';

describe('useToggleState', () => {
  it('should toggle to true', () => {
    const { result } = renderHook(() => {
      const [value, setToggle] = useToggleState(false);
      return { value, setToggle };
    });

    act(() => {
      result.current.setToggle();
    });

    expect(result.current.value).toBe(true);
  });

  it('should toggle to false', () => {
    const { result } = renderHook(() => {
      const [value, setToggle] = useToggleState(true);
      return { value, setToggle };
    });

    act(() => {
      result.current.setToggle();
    });

    expect(result.current.value).toBe(false);
  });
});
