import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../Contact/Contact.component';
import 'jest-styled-components';

let mockUseIsDesktopValue = true;
jest.mock('../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Contact', () => {
  it('renders correctly with number prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<Contact number="1800 000 001" size="large" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', '2rem');
  });
  it('renders correctly for resize size large', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<Contact number="1800 000 001" size="large" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', '1.8rem');
  });
  it('renders correctly for mobile prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<Contact number="1800 000 001" size="small" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', '1.6rem');
  });
  it('renders correctly for resize size small', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<Contact number="1800 000 001" size="small" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', '1.4rem');
  });
  it('renders correctly for resize', () => {
    mockUseIsDesktopValue = false;
    const { container, getByText } = render(<Contact number="1800 000 001" />);
    const link = container.querySelector('[target="link-target"]');
    expect(getByText('Need help?')).toBeInTheDocument();
    expect(link).toHaveStyleRule('font-size', '1.8rem');
  });
});
