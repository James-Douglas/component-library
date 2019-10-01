import React from 'react';
import { render } from '@testing-library/react';
import StickyBar from '../StickyBar.component';

describe('StickyBar', () => {
  it('renders correctly with value as string', () => {
    const { container } = render(<StickyBar value="60" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly with value as number', () => {
    const { container } = render(<StickyBar value={55} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
