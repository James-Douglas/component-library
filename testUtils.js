import React from 'react';
import {
  render, fireEvent, wait, act,
} from '@testing-library/react';
import ManorProvider from './packages/Provider/ManorProvider';

const ManorTestWrapper = ({ children }) => (
  <ManorProvider>
    {children}
  </ManorProvider>
);

const customRender = (ui, options) => render(ui, { wrapper: ManorTestWrapper, ...options });

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
