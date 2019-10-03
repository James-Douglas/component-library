import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Bar from '../../components/Progress/Bar/Bar.component';
import Header from '../../components/Header/Header.component';
import iconReadme from '../../components/Progress/Bar/Bar.md';

storiesOf('Bar', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div>
      <Header number="1800 123 456" />
      <Bar value={66} />
    </div>
  ), { notes: iconReadme });
