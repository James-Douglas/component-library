import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ToggleView from './toggleView';
import RectLongToggleView from './rectLongToggleView';
import RectOptionsToggleView from './rectOptionsToggleView';
import IconToggleView from './iconToggleView';
import ImageToggleView from './imageToggleView';
import CustomToggleView from './customToggleView';
import ColorToggleView from './colorToggleView';
import InactiveToggleView from './inactiveToggleView';
import PreCheckedToggleView from './PreCheckedToggleView';
import InvalidToggleView from './invalidToggleView';

storiesOf('Toggles', module)
  .addDecorator(withKnobs)
  .add('Simple', () => <ToggleView />, {})
  .add('Rectangle (Long text)', () => <RectLongToggleView />, {})
  .add('Rectangle (Customized)', () => <RectOptionsToggleView />, {})
  .add('Icons', () => <IconToggleView />, {})
  .add('Images', () => <ImageToggleView />, {})
  .add('Custom (Medicare)', () => <CustomToggleView />, {})
  .add('Colors', () => <ColorToggleView />, {})
  .add('Inactive', () => <InactiveToggleView />, {})
  .add('Pre-checked', () => <PreCheckedToggleView />, {})
  .add('Invalid', () => <InvalidToggleView />, {});
