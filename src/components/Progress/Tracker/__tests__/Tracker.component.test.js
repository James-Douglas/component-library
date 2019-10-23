import React from 'react';
import { render } from '@testing-library/react';
import Tracker from '../Tracker.component';

describe('processTrackerItemLink()', () => {
  const props = {
    steps: [
      { label: 'About You', url: '#label' },
      { label: 'Your Cover', url: '#another' },
      { label: 'Your Details', url: '#one-more', active: true },
      { label: 'Compare Cover', url: '#again', disabled: true },
      { label: 'Purchase Cover', url: '#again', disabled: true },
      { label: 'Purchase Cover22', url: '#again', disabled: true },
    ],
  };
  it('count total length of steps ', () => {
    const { container } = render(<Tracker value="60" steps={props.steps} />);
    const progressLinksCount = container.querySelectorAll('.progress-link').length;
    const progressStepsCount = container.querySelectorAll('.progress-step').length;
    expect(progressLinksCount + progressStepsCount).toBe(props.steps.length);
  });
  it('count total length', () => {
    const { container } = render(<Tracker value="60" steps={props.steps} isSticky stuck />);
    expect(container.firstChild).toHaveClass('stuck', 'sticky');
  });
  it('should check complete class', () => {
    const { container } = render(<Tracker value={100} />);
    const list = container.getElementsByTagName('progress')[0];
    expect(list).toHaveClass('complete');
  });
  it('define links ', () => {
    const { container } = render(<Tracker value="60" steps={props.steps} />);
    const list = container.querySelector('.progress-link');
    expect(list).toHaveClass('scale-on-hover');
  });
});
