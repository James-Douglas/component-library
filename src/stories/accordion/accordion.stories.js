import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Accordion from '../../components/Accordion/Accordion.component';
import iconReadme from '../../components/Accordion/accordion.md';
import Container from '../../components/Grid/Container/Container.component';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Default Accordion', () => (
    <Container>
      <div style={{ marginTop: '60px', backgroundColor: '#f9f9f9', padding: '30px' }}>
        <Accordion title="What are the benefits of combining your electricity and gas bills?" >
          <div>
            <p>
Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
              of damage to cars, property, and even people.
            </p>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>What does car insurance cover?</h4>
            <p>
It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
              you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
              vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
              price), which is why it’s important to review your options carefully.
            </p>
          </div>
        </Accordion>
      </div>
    </Container>
  ), { notes: iconReadme })
  .add('Multiple Accordion', () => (
    <Container>
      <div style={{ marginTop: '60px', backgroundColor: '#f9f9f9', padding: '30px' }}>
        <Accordion title="What are the benefits of combining your electricity and gas bills?">
          <div>
            <p>
Car insurance protects you against financial loss for damages resulting from car accidents, theft, weather
              events and other unforeseen costs according to your policy type. A car insurance policy helps pay for the cost
              of damage to cars, property, and even people.
            </p>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>What does car insurance cover?</h4>
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
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>What does car insurance cover?</h4>
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
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>What does car insurance cover?</h4>
            <p>
It can cover you if you cause personal injury in an accident or if you damage property or another vehicle. If
              you opt for a higher level of coverage, you may also be covered for the repair or replacement costs of your
              vehicle as a result of collisions, fire, theft, and weather events. Most policies will vary in coverage (and
              price), which is why it’s important to review your options carefully.
            </p>
          </div>
        </Accordion>
      </div>
    </Container>
  ), { notes: iconReadme });
