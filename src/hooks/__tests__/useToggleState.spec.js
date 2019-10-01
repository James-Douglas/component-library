import { renderHook, act } from '@testing-library/react-hooks';
import useToggleState from '../useToggleState';

describe('useToggleState', () => {
  it('should toggle to true', () => {
  
    const { result } = renderHook(() => useToggleState(false));

    act(() => {
      result.current.toggle()
    })

    expect(result.current.value).toBe(true)
  });

  it('should toggle to false', () => {
  
    const { result } = renderHook(() => useToggleState(true));

    act(() => {
      result.current.toggle()
    })

    expect(result.current.value).toBe(false)
  });

});
