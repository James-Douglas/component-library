// test-utils.js
import {
  render, fireEvent, wait, act,
} from '@testing-library/react';
import ManorProvider from './providers/ManorProvider';

const customRender = (ui, options) => render(ui, { wrapper: ManorProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export {
  customRender as render,
  // export other used functions to appease eslint
  fireEvent,
  wait,
  act,
};
