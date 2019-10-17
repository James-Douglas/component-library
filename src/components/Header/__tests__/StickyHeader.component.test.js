import React from 'react';
import { render } from '@testing-library/react';
import StickyHeader from '../StickyHeader.component';

describe('StickyHeader', () => {
  it('renders correctly without number prop', () => {
    const { container } = render(<StickyHeader />);
    const contactIcon = container.getAttribute('svg');
    expect(contactIcon).not.toBeInTheDocument();
  });
  it('renders correctly with number prop', () => {
    const { getByText } = render(<StickyHeader number="1800 000 000" />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
  });
});
