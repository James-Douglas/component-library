import React from 'react';
import { ctmTheme } from '@comparethemarketau/manor-themes';
import 'jest-styled-components';
import { act, fireEvent, render } from '../../../testUtils';
import AccordionPanel from '../AccordionPanel.component';
import Accordion from '../Accordion.component';

describe('Accordion', () => {
  it('renders correctly without prop', () => {
    const { container } = render(
      <Accordion>
        <AccordionPanel title="What are the benefits1 of combining your electricity and gas bills?">
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </AccordionPanel>
        <AccordionPanel title="What are the benefits2 of combining your electricity and gas bills?" show>
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </AccordionPanel>
        <AccordionPanel title="What are the benefits3 of combining your electricity and gas bills?">
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </AccordionPanel>
      </Accordion>,
    );
    const accordionGroup = container.getElementsByTagName('svg');
    expect(accordionGroup.length).toBe(3);
  });

  it(' accordion after click', () => {
    jest.useFakeTimers();
    const mockTestClick = jest.fn();
    const { container } = render(
      <Accordion>
        <AccordionPanel title="What are the benefits1 of combining your electricity and gas bills?" show handleClickGroup={mockTestClick}>
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </AccordionPanel>
      </Accordion>,
    );
    const accordion = container.querySelector('[role="tablist"]');
    const accordionHead = container.querySelector('[role="tab"]');
    expect(accordion).toHaveStyleRule('border', '1px solid transparent');
    accordionHead.focus();
    expect(accordion).toHaveStyleRule('border', `${ctmTheme.borders.focus}`);
  });

  it(' accordion after click opposite', () => {
    jest.useFakeTimers();
    const mockTestClick = jest.fn();
    const { container } = render(
      <Accordion>
        <AccordionPanel title="What are the benefits1 of combining your electricity and gas bills?" handleClickGroup={mockTestClick}>
          <div>
            <p>
              Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the
              cost
              of damage to cars, property, and even people.
            </p>
          </div>
        </AccordionPanel>
      </Accordion>,
    );
    const accordionHead = container.querySelector('[role="tab"]');
    const accordionBody = container.querySelector('[role="tabpanel"]');
    expect(accordionBody).toHaveStyleRule('height', '0');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordionBody).toHaveStyleRule('height', '100%');
  });
});
