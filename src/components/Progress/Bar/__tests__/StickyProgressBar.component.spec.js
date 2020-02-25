import React from 'react';
import { render } from '../../../../testUtils';
import StickyProgressBar from '../StickyProgressBar.component';

describe('StickyProgressBar', () => {
  it('renders correctly with value', () => {
    const { container } = render(<StickyProgressBar value={60} />);
    const progress = container.querySelector('progress');
    expect(progress).toHaveAttribute('value', '60');
  });
});
