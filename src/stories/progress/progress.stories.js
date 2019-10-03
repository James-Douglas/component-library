import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Tracker from '../../components/Progress/Tracker/Tracker.component';
import Header from '../../components/Header/Header.component';
import iconReadme from '../../components/Progress/Tracker/Tracker.md';

storiesOf('Tracker', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div>
      <Header number="1800 123 456" />
      <Tracker value="60" steps={[{ label: 'About You', url: '#label' }, { label: 'Your Cover', url: '#another' }, { label: 'Your Details', url: '#one-more', active: true }, { label: 'Compare Cover', url: '#again', disabled: true }, { label: 'Purchase Cover', url: '#again', disabled: true }]} />
    </div>
  ), { notes: iconReadme });
