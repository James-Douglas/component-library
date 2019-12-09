import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
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
    const progressLinksCount = container.getElementsByTagName('a').length;
    expect(progressLinksCount).toBe(2);
  });
  it('count total length', () => {
    const { container } = render(<Tracker value="60" steps={props.steps} isSticky stuck />);
    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
  });
  it('should check complete class', () => {
    const { container } = render(<Tracker value={100} />);
    const list = container.getElementsByTagName('progress')[0];
    expect(list).toHaveAttribute('value', '100');
  });
});
