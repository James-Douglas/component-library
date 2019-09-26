import React from 'react';
import { render } from '@testing-library/react';
import StickyHeader from '../StickyHeader.component';

describe('StickyHeader', () => {
  it('renders correctly without props', () => {
    const { container } = render(<StickyHeader number="1800 000 000" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
