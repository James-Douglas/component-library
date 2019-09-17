import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ManorIcon from '../../../src/components/Icon/Icon.js';
import iconReadme from '../../../src/components/Icon/Icon.md';

import AllIconsView from './all-icons.view.js';

storiesOf('Icon', module)
  .addDecorator(withKnobs)

  .add('Default', () => { 
    return <ManorIcon name='contact' />
  }, { notes: iconReadme })

  .add('All icons', () => { 
    return <AllIconsView />
  }, { notes: iconReadme })
