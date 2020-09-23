import React from 'react';
import { fireEvent, render } from '../../../../testUtils';
import StickyProgressTracker from '../StickyProgressTracker.component';
import 'jest-styled-components';

let mockUseIsDesktopValue = true;
jest.mock('../../../Hooks/useIsDesktop', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsDesktopValue),
}));

jest.mock('../../../Utils/breakpoint', () => ({
  __esModule: true,
  getBreakpoint: jest.fn(() => ''),
  isDesktop: jest.fn(() => mockUseIsDesktopValue),
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
  it('checking scroll on sticky progress bar', () => {
    const { container } = render(<StickyProgressTracker value={30} />);
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    fireEvent.scroll(window, { target: { pageYOffset: 59 } });
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    fireEvent.scroll(window, { target: { pageYOffset: 61 } });
    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
  });
});
