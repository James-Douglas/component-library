import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '../Accordion.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText, container } = render(<Accordion />);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });
  it('renders correctly with show prop', () => {
    const { container } = render(<Accordion show />);
    const accordionMain = container.querySelector('.accordion');
    expect(accordionMain).not.toHaveClass('hide');
  });
  it('renders correctly with arrow', () => {
    const { getByText, container } = render(<Accordion show />);
    const accordionMain = container.querySelector('path');
    expect(accordionMain).toHaveAttribute('d', 'M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z');
  });
});
