import React from 'react';
import {
  fireEvent, render, act,
} from '../../../testUtils';
import 'jest-styled-components';
import AccordionPanel from '../AccordionPanel.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { getByText } = render(<AccordionPanel title="Position to purchase" />);
    expect(getByText('Position to purchase')).toBeInTheDocument();
  });
  it('renders correctly when open accordion', () => {
    const { container } = render(<AccordionPanel show />);
    const accordion = container.querySelector('[role="tablist"]');
    expect(accordion).toHaveStyleRule('border-bottom', '2px solid #999999');
  });
  it('renders correctly with arrow', () => {
    const { container } = render(<AccordionPanel show title="Position to purchase">Accordion</AccordionPanel>);
    const accordionMain = container.querySelector('svg');
    expect(accordionMain).toHaveAttribute('viewBox');
  });
  it('click on accordion head', () => {
    jest.useFakeTimers();
    const { container } = render(<AccordionPanel show />);
    const svg = container.querySelector('[role="img"]');

    const accordionHead = container.querySelector('[role="tab"]');
    const accordionBody = container.querySelector('[role="tabpanel"]');
    const accordion = container.querySelector('[role="tablist"]');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });

    expect(svg).toHaveAttribute('data-icon', 'chevron-down');
    expect(accordionBody).toHaveStyleRule('height', '0');
    expect(accordion).toHaveStyleRule('border-bottom', '1px solid rgba(0,0,0,.1)');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', 'auto');
    expect(accordion).toHaveStyleRule('border-bottom', '2px solid #999999');
    expect(container.querySelector('.fa-flip-vertical')).toBeInTheDocument();
  });

  it('works on focus/when leaving focus', () => {
    const { container } = render(
      <AccordionPanel title="Accordion title">
        <div><p>Accordion content</p></div>
      </AccordionPanel>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    const accordion = container.querySelector('[role="tablist"]');
    fireEvent.keyDown(accordion, { key: 'Tab', code: 9 });
    accordionHead.focus();
    fireEvent.keyDown(accordionHead, { key: 'Enter', code: 13 });
    expect(accordion).toHaveStyleRule('border', '1px solid #136ED2');
    accordionHead.blur();
    expect(accordion).toHaveStyleRule('border', '1px solid transparent');
  });

  it('check handleClickGroup function is called', () => {
    jest.useFakeTimers();
    const handleClickGroup = jest.fn();
    const { container } = render(<AccordionPanel show handleClickGroup={handleClickGroup} />);
    const accordionHead = container.querySelector('[role="tab"]');
    const accordion = container.querySelector('[role="tablist"]');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordion).toHaveStyleRule('border', '1px solid transparent');
    expect(handleClickGroup).toBeCalled();
  });

  it('works on keydown', () => {
    jest.useFakeTimers();
    const { container } = render(
      <AccordionPanel title="Accordion title">
        <div><p>Accordion content</p></div>
      </AccordionPanel>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    const accordion = container.querySelector('[role="tablist"]');
    const accordionBody = container.querySelector('[role="tabpanel"]');
    fireEvent.keyDown(accordion, { key: 'Tab', keyCode: 9 });
    accordionHead.focus();
    fireEvent.keyDown(accordionHead, { key: 'Enter', keyCode: 13 });
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', 'auto');
    fireEvent.keyDown(accordionHead, { key: 'Enter', keyCode: 13 });
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', '0');
  });
});
