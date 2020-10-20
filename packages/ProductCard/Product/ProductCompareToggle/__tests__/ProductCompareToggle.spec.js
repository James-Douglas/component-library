import React from 'react';
import { render } from '../../../../../testUtils';
import ProductCompareToggle from '../ProductCompareToggle';
import ProductTestWrapper from '../../testUtils/TestWrapper';

let mockBreakpointValue = 'xs';
let mockIsDesktopValue = false;
jest.mock('../../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => mockBreakpointValue),
  isDesktop: jest.fn(() => mockIsDesktopValue),
}));

describe('ProductCompareToggle', () => {
  it('renders a pill up to md', () => {
    const { container } = render(
      <ProductTestWrapper product={{ name: 'test' }}>
        <ProductCompareToggle />
      </ProductTestWrapper>,
    );
    expect(container.firstChild.firstChild).toHaveClass('MuiButtonBase-root');
  });

  it('renders checkbox from lg', () => {
    mockBreakpointValue = 'lg';
    mockIsDesktopValue = true;
    const { container } = render(
      <ProductTestWrapper product={{ name: 'test' }}>
        <ProductCompareToggle />
      </ProductTestWrapper>,
    );
    expect(container.querySelector('input')).toBeInTheDocument();
  });
});
