import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Dropdown from '../../components/Dropdown/Dropdown.component';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('Default Dropdown', () => (
    <Dropdown id="input-one" value="Volvo" />
  ));
