import React from 'react';
import { render } from '@testing-library/react';
import StickyTracker from '../StickyTracker.component';

describe('StickyTracker', () => {
  it('renders correctly', () => {
    const props = {
      steps: [
        { label: 'About You', url: '#label' },
        { label: 'Your Cover', url: '#another' },
        { label: 'Your Details', url: '#one-more', active: true },
        { label: 'Compare Cover', url: '#again', disabled: true },
        { label: 'Purchase Cover', url: '#again', disabled: true },
      ],
    };
    const { container } = render(<StickyTracker value="60" steps={props.steps} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
