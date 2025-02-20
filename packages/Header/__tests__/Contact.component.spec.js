import React from 'react';
import { useTracking } from 'react-tracking';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import { fireEvent, render } from '../../../testUtils';
import Contact from '../Contact/Contact.component';
import 'jest-styled-components';

let mockUseIsDesktopValue = true;
jest.mock('../../Hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

jest.mock('../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => ''),
  isDesktop: jest.fn(() => mockUseIsDesktopValue),
}));

describe('Contact', () => {
  it('renders correctly with number prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<Contact number="1800 000 001" size="large" />);
    const link = container.querySelector('[target="link-target"]');
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('fa-xs');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for resize size large', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<Contact number="1800 000 001" size="large" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for mobile prop', () => {
    mockUseIsDesktopValue = true;
    const { container } = render(<Contact number="1800 000 001" size="small" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for resize size small', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<Contact number="1800 000 001" size="small" />);
    const link = container.querySelector('[target="link-target"]');
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly for resize', () => {
    mockUseIsDesktopValue = false;
    const { container, queryByText } = render(<Contact number="1800 000 001" />);
    const link = container.querySelector('[target="link-target"]');
    expect(queryByText('1800 000 001')).not.toBeInTheDocument();
    expect(link).toHaveStyleRule('font-size', ctmTheme.fontSize.base);
  });
  it('renders correctly with an iconSize prop', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<Contact number="1800 000 001" iconSize="lg" />);
    const icon = container.querySelector('svg');
    expect(icon).toHaveClass('fa-lg');
  });

  describe('interaction tracking', () => {
    it('tracks click events', () => {
      const { trackEvent } = useTracking();
      mockUseIsDesktopValue = true;
      const { container } = render(<Contact number="1800 000 001" size="large" />);
      const link = container.querySelector('[target="link-target"]');
      fireEvent.click(link);
      expect(trackEvent).toHaveBeenCalledWith({
        interaction: {
          ixn_action: 'Click',
          ixn_label: '',
          ixn_object: 'Header',
          ixn_type: 'Contact',
          ixn_value: '',
        },
      });
    });
  });
});
