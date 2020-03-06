import React from 'react';
import { render } from '../../../testUtils';
import StickyHeader from '../StickyHeader.component';

describe('StickyHeader', () => {
  const Logo = <div>Logo</div>;
  it('renders correctly without number prop', () => {
    const { container } = render(<StickyHeader logo={Logo} />);
    const contactIcon = container.getAttribute('svg');
    expect(contactIcon).not.toBeInTheDocument();
  });
  it('renders correctly with number prop', () => {
    const { getByText } = render(<StickyHeader logo={Logo} number="1800 000 000" />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
  });
});
