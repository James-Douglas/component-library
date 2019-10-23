import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion from '../Accordion.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText } = render(<Accordion title="Position to purchase" />);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });
  it('renders correctly with show prop', () => {
    const { container } = render(<Accordion show />);
    const accordionMain = container.querySelector('.accordion');
    expect(accordionMain).not.toHaveClass('hide');
  });
  it('renders correctly with arrow', () => {
    const { container } = render(<Accordion show title="Position to purchase">Accordion</Accordion>);
    const accordionMain = container.querySelector('svg');
    expect(accordionMain).toHaveAttribute('viewBox');
  });
  it('click on accordion head', () => {
    jest.useFakeTimers();
    const { container } = render(<Accordion show />);
    const accordionHead = container.querySelector('.accordion-head');
    const accordionMain = container.querySelector('.accordion');
    fireEvent.click(accordionHead);
    jest.runAllTimers();
    expect(accordionMain).toHaveClass('hide');
  });

  it('check onClickGroup function is called', () => {
    jest.useFakeTimers();
    const onClickGroup = jest.fn();
    const { container } = render(<Accordion show onClickGroup={onClickGroup} />);
    const accordionHead = container.querySelector('.accordion-head');
    fireEvent.click(accordionHead);
    const accordionMain = container.querySelector('.accordion');
    jest.runAllTimers();
    expect(accordionMain).toHaveClass('hide');
    expect(onClickGroup).toBeCalled();
  });

  it('works correctly on click', () => {
    const { container } = render(
      <Accordion title="Accordion title">
        <div><p>Accordion content</p></div>
      </Accordion>
    );
    const accordionHead = container.querySelector('.accordion-head');
    const accordion = container.querySelector('.accordion');
    fireEvent.keyDown(accordion, { key: 'Tab', code: 9 });
    accordionHead.focus();
    fireEvent.keyDown(accordionHead, { key: 'Enter', code: 13 });
    expect(accordion).toHaveClass('on-focus');

  });
});
