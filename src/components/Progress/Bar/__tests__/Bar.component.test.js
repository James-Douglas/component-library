import React from 'react';
import { render } from '@testing-library/react';
import Bar from '../Bar.component';


describe('Bar', () => {
  it('renders correctly with value as string', () => {
    const { container } = render(<Bar value="66" backwards={false} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('renders correctly with value as number', () => {
    const { container } = render(<Bar value={55} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should check scroll and update isSticky and stuck props', () => {
    const { container } = render(<Bar isSticky stuck />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should check scroll and update isSticky and stuck props', () => {
    const { container } = render(<Bar isSticky={false} stuck={false} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
