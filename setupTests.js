import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import React from 'react';

const mockTrackEvent = jest.fn();
jest.mock('react-tracking');
const { useTracking } = require('react-tracking');

jest.mock('use-debounce');
const { useDebouncedCallback } = require('use-debounce');

useTracking.mockImplementation( jest.fn(() => ({
  trackEvent: mockTrackEvent,
  Track: ({ children }) => <>{children}</>,
})));

useDebouncedCallback.mockImplementation(jest.fn((callback, delay) => (...args) => callback(...args)));

afterEach(() => {
  cleanup();
  mockTrackEvent.mockClear();
  useTracking.mockClear();
  useDebouncedCallback.mockClear();
});
