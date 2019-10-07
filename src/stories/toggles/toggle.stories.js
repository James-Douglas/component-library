import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ToggleView from './toggleView';
import CustomToggleView from './customToggleView';
import ColorToggleView from './colorToggleView';

storiesOf('Toggles', module)
  .addDecorator(withKnobs)
  .add('Simple', () => <ToggleView />, { })
  .add('Custom (Medicare)', () => <CustomToggleView />, {})
  .add('Colors', () => <ColorToggleView />, {});
