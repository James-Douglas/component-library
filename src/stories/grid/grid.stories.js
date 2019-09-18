import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import gridReadme from '../../components/Grid/grid.md';
import ContainerView from './container.view';
import ColumnView from './column.view';
import AlignmentView from './alignment.view';

storiesOf('Grid', module)
  .addDecorator(withKnobs)

  .add('Container', () => <ContainerView />, { notes: gridReadme })

  .add('Auto Columns', () => <ColumnView />, { notes: gridReadme })

  .add('Alignment', () => <AlignmentView />, { notes: gridReadme });
