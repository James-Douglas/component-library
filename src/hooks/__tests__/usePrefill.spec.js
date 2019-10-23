import { renderHook } from '@testing-library/react-hooks';
import usePrefill from '../usePrefill';

describe('usePrefill', () => {
  it('returns true when prefillValue provided and not dirty', () => {
    const { result } = renderHook(() => usePrefill('test', '', false));
    expect(result.current).toBeTruthy();
  });

  it('returns false when prefillValue provided and dirty', () => {
    const { result } = renderHook(() => usePrefill('test', '', true));
    expect(result.current).toBeFalsy();
  });

  it('changes to false when value is updated', () => {
    const { result, rerender } = renderHook(({ prefillValue, value, isDirty }) => usePrefill(prefillValue, value, isDirty), {
      initialProps: {
        prefillValue: 'test',
        value: '',
        isDirty: false,
      },
    });

    expect(result.current).toBeTruthy();

    rerender({ value: 'something' });

    expect(result.current).toBeFalsy();
  });

  it('changes to false when isDirty is updated', () => {
    const { result, rerender } = renderHook(({ prefillValue, value, isDirty }) => usePrefill(prefillValue, value, isDirty), {
      initialProps: {
        prefillValue: 'test',
        value: '',
        isDirty: false,
      },
    });

    expect(result.current).toBeTruthy();

    rerender({ isDirty: true });

    expect(result.current).toBeFalsy();
  });
});
