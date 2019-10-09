import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion from '../Accordion.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText } = render(<Accordion />);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });
  it('renders correctly with show prop', () => {
    const { container } = render(<Accordion show />);
    const accordionMain = container.querySelector('.accordion');
    expect(accordionMain).not.toHaveClass('hide');
  });
  it('renders correctly with arrow', () => {
    const { container } = render(<Accordion show />);
    const accordionMain = container.querySelector('path');
    expect(accordionMain).toHaveAttribute('d', 'M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z');
  });
  it('click on accordion head', () => {
    const { container } = render(<Accordion show />);
    const accordionHead = container.querySelector('.accordion-head');
    fireEvent.click(accordionHead);
    const accordionMain = container.querySelector('.accordion');
    expect(accordionMain).toHaveClass('hide');
  });

  it('check onClickGroup function is called', () => {
    const onClickGroup = jest.fn();
    const { container } = render(<Accordion show onClickGroup={onClickGroup} />);
    const accordionHead = container.querySelector('.accordion-head');
    fireEvent.click(accordionHead);
    const accordionMain = container.querySelector('.accordion');
    expect(accordionMain).toHaveClass('hide');
    expect(onClickGroup).toBeCalled();
  });
});
