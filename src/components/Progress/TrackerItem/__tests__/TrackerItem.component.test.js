import React from 'react';
import { render } from '@testing-library/react';
import TrackerItem from '../TrackerItem.component';


let mockUseIsDesktopValue = true;
jest.mock('../../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('TrackerItem', () => {
  it('renders correctly with label depending from desktop version', () => {
    mockUseIsDesktopValue = true;
    const { getByText } = render(<TrackerItem mobile={mockUseIsDesktopValue} index={4} label="About you" />);
    expect(getByText('About you')).toBeInTheDocument();
  });
  it('renders correctly with label depending from mobile version', () => {
    mockUseIsDesktopValue = false;
    const { container } = render(<TrackerItem mobile={mockUseIsDesktopValue} index={4} label="About you" />);
    expect(container.firstChild).toBeEmpty();
  });
});
