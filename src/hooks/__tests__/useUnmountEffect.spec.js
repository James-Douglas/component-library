import { renderHook } from '@testing-library/react-hooks';
import useUnmountEffect from '../useUnmountEffect';

describe('useUnmountEffect', () => {
  it('should not call function before unmount', () => {
    const unmountCb = jest.fn();
    const rendered = renderHook(() => useUnmountEffect(unmountCb));
    expect(unmountCb.mock.calls.length).toBe(0);
  });

  it('should call function on unmount', () => {
    const unmountCb = jest.fn();
    const rendered = renderHook(() => useUnmountEffect(unmountCb));
    rendered.unmount();
    expect(unmountCb.mock.calls.length).toBe(1);
  });
});
