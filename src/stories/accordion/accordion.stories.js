import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Accordion from '../../components/Accordion/Accordion.component';
import AccordionGroup from '../../components/Accordion/AccordionGroup.component';
import iconReadme from '../../components/Accordion/accordion.md';
import FluidContainer from '../../components/Grid/Container/Fluid.component';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Default Accordion', () => (
    <FluidContainer>
      <div>
        <Accordion title="What are the benefits of combining your electricity and gas bills?">
          <div>
            <p>
Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
              of damage to cars, property, and even people.
            </p>
            <h6 className="manor-h6">What does car insurance cover?</h6>
            <p>
It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
              you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
              vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
              price), which is why it’s important to review your options carefully.
            </p>
          </div>
        </Accordion>
      </div>
    </FluidContainer>
  ), { notes: iconReadme })
  .add('Multiple Accordion', () => (
    <FluidContainer>
      <div>
        <Accordion title="What are the benefits of combining your electricity and gas bills?">
          <div>
            <p>
Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
              of damage to cars, property, and even people.
            </p>
            <h6 className="manor-h6">What does car insurance cover?</h6>
            <p>
It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
              you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
              vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
              price), which is why it’s important to review your options carefully.
            </p>
          </div>
        </Accordion>
        <Accordion title="What are the benefits of combining your electricity and gas bills?" show>
          <div>
            <p>
Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
              of damage to cars, property, and even people.
            </p>
            <h6 className="manor-h6">What does car insurance cover?</h6>
            <p>
It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
              you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
              vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
              price), which is why it’s important to review your options carefully.
            </p>
          </div>
        </Accordion>
        <Accordion title="What are the benefits of combining your electricity and gas bills?">
          <div>
            <p>
Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
              of damage to cars, property, and even people.
            </p>
            <h6 className="manor-h6">What does car insurance cover?</h6>
            <p>
It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
              you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
              vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
              price), which is why it’s important to review your options carefully.
            </p>
          </div>
        </Accordion>
      </div>
    </FluidContainer>
  ), { notes: iconReadme })
  .add('Accordion Group', () => (
    <FluidContainer>
      <div>
        <AccordionGroup>
          <Accordion title="What are the benefits of combining your electricity and gas bills?">
            <div>
              <p>
                Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
                events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
                of damage to cars, property, and even people.
              </p>
              <h6 className="manor-h6">What does car insurance cover?</h6>
              <p>
                It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
                you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
                vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
                price), which is why it’s important to review your options carefully.
              </p>
            </div>
          </Accordion>
          <Accordion title="What are the benefits of combining your electricity and gas bills?" show>
            <div>
              <p>
                Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
                events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
                of damage to cars, property, and even people.
              </p>
              <h6 className="manor-h6">What does car insurance cover?</h6>
              <p>
                It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
                you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
                vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
                price), which is why it’s important to review your options carefully.
              </p>
            </div>
          </Accordion>
          <Accordion title="What are the benefits of combining your electricity and gas bills?">
            <div>
              <p>
                Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
                events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
                of damage to cars, property, and even people.
              </p>
              <h6 className="manor-h6">What does car insurance cover?</h6>
              <p>
                It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
                you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
                vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
                price), which is why it’s important to review your options carefully.
              </p>
            </div>
          </Accordion>
        </AccordionGroup>
      </div>
    </FluidContainer>
  ), { notes: iconReadme })
  .add('Accordion Group2', () => (
    <FluidContainer>
      <div>
        <AccordionGroup>
          <Accordion title="What are the benefits of combining your electricity and gas bills?">
            <div>
              <p>
                Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
                events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
                of damage to cars, property, and even people.
              </p>
              <h6 className="manor-h6">What does car insurance cover?</h6>
              <p>
                It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
                you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
                vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
                price), which is why it’s important to review your options carefully.
              </p>
            </div>
          </Accordion>
          <Accordion title="What are the benefits of combining your electricity and gas bills?">
            <div>
              <p>
                Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
                events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
                of damage to cars, property, and even people.
              </p>
              <h6 className="manor-h6">What does car insurance cover?</h6>
              <p>
                It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
                you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
                vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
                price), which is why it’s important to review your options carefully.
              </p>
            </div>
          </Accordion>
        </AccordionGroup>
      </div>
    </FluidContainer>
  ), { notes: iconReadme });
