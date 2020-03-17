import React from 'react';
import { render } from '../../../../testUtils';
import TrackerItem from '../TrackerItem';

let mockUseIsDesktopValue = true;
jest.mock('../../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('TrackerItem', () => {
  it('renders correctly with label depending from desktop version', () => {
    mockUseIsDesktopValue = true;
    const { getByText } = render(<TrackerItem mobile={mockUseIsDesktopValue} index={4} label="About you" />);
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('About you')).toBeInTheDocument();
    expect(() => {
      getByText('About me');
    }).toThrowError();
  });
  it('renders correctly with no label depending from mobile version', () => {
    mockUseIsDesktopValue = false;
    const { getByText } = render(<TrackerItem mobile={mockUseIsDesktopValue} index={4} label="About you" />);
    expect(getByText('4')).toBeInTheDocument();
    expect(() => {
      getByText('About you');
    }).toThrowError();
  });
});
