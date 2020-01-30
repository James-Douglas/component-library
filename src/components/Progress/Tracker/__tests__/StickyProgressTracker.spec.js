import React from 'react';
import { render } from '../../../../testUtils';
import StickyProgressTracker from '../StickyProgressTracker.component';

let mockUseIsDesktopValue = true;
jest.mock('../../../../hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

describe('StickyTracker', () => {
  const props = {
    steps: [
      { label: 'About You', url: '#label' },
      { label: 'Your Cover', url: '#another' },
      { label: 'Your Details', url: '#one-more', active: true },
      { label: 'Compare Cover', url: '#again', disabled: true },
      { label: 'Purchase Cover', url: '#again', disabled: true },
    ],
  };
  it('renders correctly with value as string', () => {
    mockUseIsDesktopValue = true;
    const { getByText } = render(<StickyProgressTracker value="60" steps={props.steps} />);
    expect(getByText('About You')).toBeInTheDocument();
  });
  it('renders correctly with mobile class', () => {
    mockUseIsDesktopValue = false;
    const { queryByText } = render(<StickyProgressTracker value="60" steps={props.steps} />);
    const item = queryByText('Your Cover');
    expect(item).not.toBeInTheDocument();
  });
});
