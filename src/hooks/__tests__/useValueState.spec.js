import { renderHook, act } from '@testing-library/react-hooks';
import useValueState from '../useValueState';

describe('useValueState', () => {
  it('should set the value as supplied', () => {
    const { result } = renderHook(() => {
      const [value, setValue] = useValueState('');
      return { value, setValue };
    });

    act(() => {
      result.current.setValue('test val');
    });

    expect(result.current.value).toBe('test val');
  });

  it('should set the value to an empty string', () => {
    const { result } = renderHook(() => {
      const [value, setValue, resetValue] = useValueState('test val');
      return { value, setValue, resetValue };
    });

    act(() => {
      result.current.resetValue();
    });

    expect(result.current.value).toBe('');
  });
});
