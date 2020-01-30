import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../../../testUtils';
import Overlay from '../Overlay.component';


describe('Overlay', () => {
  it('renders with minimal props', () => {
    const { container } = render(<Overlay show />);
    const animate = container.querySelector('.overlay');
    expect(animate).toBeInTheDocument();
  });
  it('calls handleClick when clicked', () => {
    const clickHandler = jest.fn();
    const { container } = render(<Overlay show handleClick={clickHandler} />);
    fireEvent.click(container.querySelector('.overlay'));
    expect(clickHandler).toHaveBeenCalled();
  });
});
