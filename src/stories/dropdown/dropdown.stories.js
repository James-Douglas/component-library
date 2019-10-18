import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Dropdown from '../../components/Dropdown/Dropdown.component';
import Container from '../../components/Grid/Container/Container.component';
import iconReadme from '../../components/Dropdown/dropdown.md';

const options = [
  { value: 'First', title: 'First Item - Title' },
  { value: 'Second', title: 'Second Item - Title' },
  { value: 'Third', title: 'Third Item - Title', disabled: true },
];
const defaultOption = {
  hasDefaultOption: true,
  value: 'default',
  disabled: false,
  hidden: false,
};
storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default Dropdown', () => (
    <Container>
      <div style={{ marginTop: '40px' }}>
        <Dropdown id="input-one" value="First" options={options} supportingElements forceFullWidth label="Dropdown Label" bordered defaultOption={defaultOption} />
      </div>
    </Container>
  ), { notes: iconReadme })
  .add('Dropdown with field validation', () => (
    <Container>
      <div style={{ marginTop: '40px' }}>
        <Dropdown id="input-one" value="First" options={options} supportingElements forceFullWidth label="Dropdown Label" validationMessage="Sorry, that's wrong." defaultOption={defaultOption} />
      </div>
    </Container>
  ), { notes: iconReadme })
  .add('Dropdown with prefillValue prop', () => (
    <Container>
      <div style={{ marginTop: '40px' }}>
        <Dropdown id="input-one" options={options} supportingElements forceFullWidth label="Dropdown Label" prefillValue="Second" bordered defaultOption={defaultOption} />
      </div>
    </Container>
  ), { notes: iconReadme });
