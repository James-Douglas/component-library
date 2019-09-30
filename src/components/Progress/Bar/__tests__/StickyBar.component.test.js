import React from 'react';
import { render } from '@testing-library/react';
import StickyBar from '../StickyBar.component';

describe('StickyBar', () => {
  it('renders correctly', () => {
    const { container } = render(<StickyBar value="60" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
