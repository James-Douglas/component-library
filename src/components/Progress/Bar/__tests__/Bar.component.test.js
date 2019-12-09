import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import Bar from '../Bar.component';

describe('Bar', () => {
  it('renders correctly with value as string', () => {
    const { getByText } = render(<Bar value="60" />);
    expect(getByText('60%')).toBeInTheDocument();
  });
  it('renders correctly with value as number', () => {
    const { getByText } = render(<Bar value={55} />);
    expect(getByText('55%')).toBeInTheDocument();
  });
  it('should check scroll and add isSticky and stuck props', () => {
    const { container } = render(<Bar value="60" isSticky stuck />);
    expect(container.firstChild).toHaveStyleRule('position', 'fixed');
  });
  it('should check progress value', () => {
    const { container } = render(<Bar value={100} />);
    const list = container.getElementsByTagName('progress')[0];
    expect(list).toHaveAttribute('value', '100');
  });
  it('should check label styles', () => {
    const { getByText } = render(<Bar value="60" />);
    expect(getByText('60%')).toHaveStyleRule('right', '4.8rem');
  });
  it('should check styles', () => {
    const { getByText } = render(<Bar value="60" />);
    expect(getByText('60%')).toHaveStyle(`
     margin-left: 60vw;
     right: 4.8rem;
   `);
  });
  it('should check styles for value less than 10', () => {
    const { getByText } = render(<Bar value="6" />);
    expect(getByText('6%')).toHaveStyle(`
      margin-left: 6vw;
      right: 3.5rem;
    `);
  });
});
