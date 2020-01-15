import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import AccordionPanel from '../AccordionPanel.component';
import Accordion from '../Accordion.component';
import getTheme from '../../../utils/getTheme';

const theme = getTheme();

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
        <AccordionPanel title="What are the benefits1 of combining your electricity and gas bills?" show onClickGroup={mockTestClick}>
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
    expect(accordion).toHaveStyleRule('border-bottom', `2px solid ${theme.colors.greyDark}`);
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordion).toHaveStyleRule('border-bottom', '1px solid rgba(0,0,0,.1)');
  });

  it(' accordion after click opposite', () => {
    jest.useFakeTimers();
    const mockTestClick = jest.fn();
    const { container } = render(
      <Accordion>
        <AccordionPanel title="What are the benefits1 of combining your electricity and gas bills?" onClickGroup={mockTestClick}>
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
    expect(accordion).toHaveStyleRule('border-bottom', '1px solid rgba(0,0,0,.1)');
    fireEvent.click(accordionHead);
    act(() => {
      jest.runAllTimers();
    });
    expect(accordion).toHaveStyleRule('border-bottom', `2px solid ${theme.colors.greyDark}`);
  });
});
