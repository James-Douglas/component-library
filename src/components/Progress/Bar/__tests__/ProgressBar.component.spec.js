import React from 'react';
import { render } from '../../../../testUtils';
import 'jest-styled-components';
import ProgressBar from '../ProgressBar.component';

describe('ProgressBar', () => {
  it('renders correctly with value as number', () => {
    const { container } = render(<ProgressBar value={55} />);
    const progress = container.querySelector('progress');
    expect(progress).toHaveAttribute('value', '55');
  });
  it('should check scroll and add isSticky and stuck props', () => {
    const { container } = render(<ProgressBar value="60" isSticky stuck />);
    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
  });
  it('should check progress value', () => {
    const { container } = render(<ProgressBar value={100} />);
    const list = container.getElementsByTagName('progress')[0];
    expect(list).toHaveAttribute('value', '100');
  });
});
