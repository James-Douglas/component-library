import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TooltipGeneric from './tooltipGeneric.view';
import TooltipFilters from './tooltipFilters.view';
import tooltipReadme from '../../components/Tooltip/tooltip.md';

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .add('Default', () => <TooltipGeneric />, { notes: tooltipReadme })
  .add('Sidebar', () => <TooltipFilters />, { notes: tooltipReadme });
