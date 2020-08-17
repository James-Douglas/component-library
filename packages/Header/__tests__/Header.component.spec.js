import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Header from '../Header.component';

let mockUseIsStickyValue = true;
jest.mock('../../Hooks/useIsSticky', () => ({
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
    const { getByText, queryByText } = render(<Header number="1800 000 000" logo={Logo} />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
    expect(queryByText('Looking for help?')).not.toBeInTheDocument();
  });
  it('renders correctly with number prop and contact strip ', () => {
    const { getByText } = render(<Header number="1800 000 000" logo={Logo} contactStrip />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
    expect(getByText('Looking for help?')).toBeInTheDocument();
  });
  it('renders correctly with sticky', () => {
    mockUseIsStickyValue = false;
    const { container } = render(<Header number="1800 000 000" logo={Logo} isSticky={mockUseIsStickyValue} stuck={mockUseIsStickyValue} />);
    const header = container.getElementsByTagName('header')[0];
    expect(header).toHaveStyleRule('height', ctmTheme.header.height);
  });
  it('renders correctly without sticky', () => {
    mockUseIsStickyValue = true;
    const { container } = render(<Header number="1800 000 000" logo={Logo} isSticky={mockUseIsStickyValue} stuck={mockUseIsStickyValue} />);
    const header = container.getElementsByTagName('header')[0];
    expect(header).toHaveStyleRule('height', ctmTheme.header.heightStuck);
  });
});
