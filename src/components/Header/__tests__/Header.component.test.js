import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.component';

let mockUseIsStickyValue = true;
jest.mock('../../../hooks/useIsSticky', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsStickyValue),
}));

describe('StickyBar', () => {
  it('renders correctly with number prop', () => {
    const { getByText } = render(<Header number="1800 000 000" />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
  });
  it('renders correctly with sticky', () => {
    mockUseIsStickyValue = false;
    const { container } = render(<Header number="1800 000 000" isSticky={mockUseIsStickyValue} stuck={mockUseIsStickyValue} />);
    const header = container.getElementsByTagName('header')[0];
    expect(header).not.toHaveClass('stuck');
  });
  it('renders correctly without sticky', () => {
    mockUseIsStickyValue = true;
    const { container } = render(<Header number="1800 000 000" isSticky={mockUseIsStickyValue} stuck={mockUseIsStickyValue} />);
    const header = container.getElementsByTagName('header')[0];
    expect(header).toHaveClass('stuck');
  });
});
