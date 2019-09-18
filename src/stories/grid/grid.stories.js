import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ManorContainer from '../../../src/components/Grid/Container/Container.component.js';
import gridReadme from '../../../src/components/Grid/grid.md';

import ContainerView from './container.view.js';

storiesOf('Grid', module)
  .addDecorator(withKnobs)

  .add('Container', () => { 
    return <ContainerView />
  }, { notes: gridReadme }) 