import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../Contact/Contact.component';

let mockUseIsDesktopValue = true;
jest.mock('../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Contact', () => {
  it('renders correctly with number prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<Contact number="1800 000 001" size="large" />);
    const link = container.querySelector(`[target="link-target"]`)
    expect(link).toHaveClass('large');
  });
  it('renders correctly for mobile prop', () => {
    mockUseIsDesktopValue = true;
    const { getByText } = render(<Contact number="1800 000 001" />);
    expect(getByText('1800 000 001')).not.toHaveClass('mobile');
  });

  it('renders correctly for resize', () => {
    mockUseIsDesktopValue = false;
    const { getByText } = render(<Contact number="1800 000 001" />);
    expect(getByText('Need help?')).toBeInTheDocument();
  });
});
