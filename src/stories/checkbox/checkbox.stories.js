import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import CheckboxWhite from './checkboxWhite.view';
import CheckboxGroup from './checkboxGroup.view';

import checkboxReadme from '../../components/Checkbox/checkbox.md';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)

  .add('Checkbox on White', () => <CheckboxWhite />, { notes: checkboxReadme })

  .add('Checkbox Group', () => <CheckboxGroup />, { notes: checkboxReadme });
