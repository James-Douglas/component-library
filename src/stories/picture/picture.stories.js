import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Picture from '../../components/Picture/Picture.component';
import pictureReadme from '../../components/Picture/Picture.md';

storiesOf('Picture', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Picture />, { notes: pictureReadme });
