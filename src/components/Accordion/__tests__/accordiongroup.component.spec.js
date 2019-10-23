import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Accordion from '../Accordion.component';
import AccordionGroup from '../AccordionGroup.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { container } = render(
      <AccordionGroup>
        <Accordion title="What are the benefits1 of combining your electricity and gas bills?">
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </Accordion>
        <Accordion title="What are the benefits2 of combining your electricity and gas bills?" show>
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </Accordion>
        <Accordion title="What are the benefits3 of combining your electricity and gas bills?">
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </Accordion>
      </AccordionGroup>,
    );
    const accordionGroup = container.getElementsByTagName('svg');
    expect(accordionGroup.length).toBe(3);
  });
  it(' accordion after click', () => {
    jest.useFakeTimers();
    const mockTestClick = jest.fn();
    const { container } = render(
      <AccordionGroup>
        <Accordion title="What are the benefits1 of combining your electricity and gas bills?" show onClickGroup={mockTestClick}>
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </Accordion>
      </AccordionGroup>,
    );
    const accordionMain = container.querySelector('.accordion');
    const accordionHead = container.querySelector('.accordion-head');
    expect(accordionMain).not.toHaveClass('hide');
    fireEvent.click(accordionHead);
    jest.runAllTimers();
    expect(accordionMain).toHaveClass('hide');
  });
  it(' accordion after click opposite', () => {
    jest.useFakeTimers();
    const mockTestClick = jest.fn();
    const { container } = render(
      <AccordionGroup>
        <Accordion title="What are the benefits1 of combining your electricity and gas bills?" onClickGroup={mockTestClick}>
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </Accordion>
      </AccordionGroup>,
    );
    const accordionMain = container.querySelector('.accordion');
    const accordionHead = container.querySelector('.accordion-head');
    expect(accordionMain).toHaveClass('hide');
    fireEvent.click(accordionHead);
    jest.runAllTimers();
    expect(accordionMain).not.toHaveClass('hide');
  });
});
