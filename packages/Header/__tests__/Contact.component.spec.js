import React from 'react';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { render } from '@testing-library/react';
import Contact from '../Contact/Contact.component';
import 'jest-styled-components';

let mockUseIsDesktopValue = true;
jest.mock('../../Hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Contact', () => {
  it('renders correctly with number prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<ManorProvider><Contact number="1800 000 001" size="large" /></ManorProvider>);
    const link = container.querySelector('[target="link-target"]');
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('fa-xs');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for resize size large', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<ManorProvider><Contact number="1800 000 001" size="large" /></ManorProvider>);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for mobile prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<ManorProvider><Contact number="1800 000 001" size="small" /></ManorProvider>);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for resize size small', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<ManorProvider><Contact number="1800 000 001" size="small" /></ManorProvider>);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for resize', () => {
    mockUseIsDesktopValue = false;
    const { container, queryByText } = render(<ManorProvider><Contact number="1800 000 001" /></ManorProvider>);
    const link = container.querySelector('[target="link-target"]');
    expect(queryByText('1800 000 001')).not.toBeInTheDocument();
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly with an iconSize prop', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<ManorProvider><Contact number="1800 000 001" iconSize="lg" /></ManorProvider>);
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('fa-lg');
  });
});
