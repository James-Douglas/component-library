import React from 'react';
import { render } from '@testing-library/react';
import StickyHeader from '../StickyHeader.component';

describe('StickyBar', () => {
  it('renders correctly with number prop', () => {
    const { getByText } = render(<StickyHeader number="1800 000 000" />);
    expect(getByText('1800 000 000')).toBeInTheDocument();
  });
});
