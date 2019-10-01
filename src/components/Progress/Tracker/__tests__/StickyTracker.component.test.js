import React from 'react';
import { render } from '@testing-library/react';
import StickyTracker from '../StickyTracker.component';

describe('StickyTracker', () => {
  const props = {
    steps: [
      { label: 'About You', url: '#label' },
      { label: 'Your Cover', url: '#another' },
      { label: 'Your Details', url: '#one-more', active: true },
      { label: 'Compare Cover', url: '#again', disabled: true },
      { label: 'Purchase Cover', url: '#again', disabled: true },
    ],
  };
  it('renders correctly when value is string', () => {
    const { container } = render(<StickyTracker value="60" steps={props.steps} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly when value is number', () => {
    const { container } = render(<StickyTracker value={60} steps={props.steps} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
