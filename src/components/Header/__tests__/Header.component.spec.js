import React from 'react';
import { render } from '../../../testUtils';
import Header from '../Header.component';
import 'jest-styled-components';
import theme from '../../../themes/ctm.theme';

let mockUseIsStickyValue = true;
jest.mock('../../../hooks/useIsSticky', () => ({
  __esModule: true,
  default: jest.fn(() => mockUseIsStickyValue),
}));

describe('Header', () => {
  const Logo = <div>Logo</div>;
  it('renders correctly without props', () => {
    const { container } = render(<Header logo={Logo} />);
    const contactIcon = container.getAttribute('svg');
    expect(contactIcon).not.toBeInTheDocument();
  });
  it('renders correctly with number prop', () => {
    const { getByText } = render(<Header number="1800 000 000" logo={Logo} />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
  });
  it('renders correctly with sticky', () => {
    mockUseIsStickyValue = false;
    const { container } = render(<Header number="1800 000 000" logo={Logo} isSticky={mockUseIsStickyValue} stuck={mockUseIsStickyValue} />);
    const header = container.getElementsByTagName('header')[0];
    expect(header).toHaveStyleRule('height', theme.header.height);
  });
  it('renders correctly without sticky', () => {
    mockUseIsStickyValue = true;
    const { container } = render(<Header number="1800 000 000" logo={Logo} isSticky={mockUseIsStickyValue} stuck={mockUseIsStickyValue} />);
    const header = container.getElementsByTagName('header')[0];
    expect(header).toHaveStyleRule('height', theme.header.heightStuck);
  });
});
