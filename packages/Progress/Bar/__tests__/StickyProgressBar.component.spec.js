import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import 'jest-styled-components';
import StickyProgressBar from '../StickyProgressBar.component';

describe('StickyProgressBar', () => {
  it('renders correctly with value', () => {
    const { container } = render(<StickyProgressBar value={60} />);
    const progress = container.querySelector('progress');
    expect(progress).toHaveAttribute('value', '60');
  });
  it('checking scroll on sticky progress bar', () => {
    const { container } = render(<StickyProgressBar value={60} />);
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    fireEvent.scroll(window, { target: { pageYOffset: 5 } });
    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
  });
});
