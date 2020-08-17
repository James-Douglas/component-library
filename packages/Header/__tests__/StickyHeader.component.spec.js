import React from 'react';
import { render } from '@testing-library/react';
import StickyHeader from '../StickyHeader.component';

describe('StickyHeader', () => {
  const Logo = <div>Logo</div>;
  it('renders correctly without number prop', () => {
    const { container } = render(<StickyHeader logo={Logo} />);
    const contactIcon = container.getAttribute('svg');
    expect(contactIcon).not.toBeInTheDocument();
  });
  it('renders correctly with number prop', () => {
    const { getByText, queryByText } = render(<StickyHeader logo={Logo} number="1800 000 000" />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
    expect(queryByText('Looking for help?')).not.toBeInTheDocument();
  });
  it('renders correctly with number prop and the contactstrip prop', () => {
    const { getByText } = render(<StickyHeader logo={Logo} number="1800 000 000" contactStrip />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
    expect(getByText('Looking for help?')).toBeInTheDocument();
  });
});
