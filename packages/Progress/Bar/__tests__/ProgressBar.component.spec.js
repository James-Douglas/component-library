import React from 'react';
import { render, fireEvent } from '../../../../testUtils';
import 'jest-styled-components';
import ProgressBar from '../ProgressBar.component';

describe('ProgressBar', () => {
  it('renders correctly with value as number', () => {
    const { container } = render(<ProgressBar value={55} />);
    const progress = container.querySelector('progress');
    expect(progress).toHaveAttribute('value', '55');
  });
  it('should check scroll and add isSticky and stuck props', () => {
    const { container } = render(<ProgressBar value={60} isSticky stuck />);
    expect(container.children[1]).toHaveStyleRule('position', 'fixed');
  });
  it('should check progress value', () => {
    const { container } = render(<ProgressBar value={100} />);
    const list = container.getElementsByTagName('progress')[0];
    expect(list).toHaveAttribute('value', '100');
  });
  it('checking scroll on progress bar', () => {
    const { container } = render(<ProgressBar value={100} />);
    expect(container.children[1]).toHaveStyleRule('position', 'relative');
    fireEvent.scroll(window, { target: { pageYOffset: 5 } });
    expect(container.children[1]).toHaveStyleRule('position', 'relative');
    fireEvent.scroll(window, { target: { pageYOffset: 500 } });
    expect(container.children[1]).toHaveStyleRule('position', 'relative');
  });
});
