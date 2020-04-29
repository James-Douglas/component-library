import { renderHook } from '@testing-library/react-hooks';
import useId from '../useId';

describe('useId', () => {
  it('returns presented id', () => {
    const { result } = renderHook(() => useId('testId'));
    expect(result.current).toEqual('testId');
  });
  it('returns not presented id', () => {
    const { result } = renderHook(() => useId());
    expect(result.current).toBeTruthy();
    expect(result.current.length).toEqual(25);
  });
});
