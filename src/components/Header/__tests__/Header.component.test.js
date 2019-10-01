import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header.component';

describe('Header', () => {
  it('renders correctly without props', () => {
    const { container } = render(<Header number="1800 000 000" />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should check scroll and update isSticky and stuck props', () => {
    const { container } = render(<Header number="1800 000 000" isSticky stuck />);
    expect(container.innerHTML).toMatchSnapshot();
  });
  it('should check scroll and update isSticky and stuck - false props', () => {
    const { container } = render(<Header number="1800 000 000" isSticky={false} stuck={false} />);
    expect(container.innerHTML).toMatchSnapshot();
  });
});
