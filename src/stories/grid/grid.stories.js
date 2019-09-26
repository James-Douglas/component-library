import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import gridReadme from '../../components/Grid/grid.md';
import ContainerView from './container.view';
import FluidContainerView from './fluid-container.view';
import ColumnView from './column.view';
import AlignmentView from './alignment.view';
import ResponsiveView from './responsive.view';
import OffsetsView from './offsets.view';

storiesOf('Grid', module)
  .addDecorator(withKnobs)

  .add('Container', () => <ContainerView />, { notes: gridReadme })

  .add('Fluid Container', () => <FluidContainerView />, { notes: gridReadme })

  .add('Columns', () => <ColumnView />, { notes: gridReadme })

  .add('Alignment', () => <AlignmentView />, { notes: gridReadme })

  .add('Responsive Columns', () => <ResponsiveView />, { notes: gridReadme })

  .add('Offset Columns', () => <OffsetsView />, { notes: gridReadme });
