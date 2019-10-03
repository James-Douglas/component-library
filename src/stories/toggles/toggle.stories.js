import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ToggleView from './toggleView';

storiesOf('Toggles', module)
  .addDecorator(withKnobs)
  .add('Simple', () => <ToggleView />, { });
