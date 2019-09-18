import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import ManorIcon from '../../components/Icon/Icon';
import iconReadme from '../../components/Icon/Icon.md';

import AllIconsView from './all-icons.view';

storiesOf('Icon', module)
  .addDecorator(withKnobs)

  .add('Default', () => <ManorIcon name="contact" />, { notes: iconReadme })

  .add('All icons', () => <AllIconsView />, { notes: iconReadme });
