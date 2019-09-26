import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Tracker from '../../components/Progress/Tracker/Tracker.component';

storiesOf('Tracker', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div style={{ marginTop: '100px' }}>
      <Tracker value="80" />
    </div>
  ));
