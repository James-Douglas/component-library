import { renderHook } from '@testing-library/react-hooks';

import useInterval from '../useInterval';

jest.useFakeTimers();

test('is passed a `handler` and a `delay`', () => {
  const handler = jest.fn();
  renderHook(() => {
    useInterval(handler, 1000);
  });
  expect(handler).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(5000);
  expect(handler).toHaveBeenCalledTimes(5);
});

test('if you pass a `delay` of `null`, the timer is "paused"', () => {
  const handler = jest.fn();
  renderHook(() => {
    useInterval(handler, null);
  });
  jest.advanceTimersByTime(5000);
  expect(handler).toHaveBeenCalledTimes(0);
});
