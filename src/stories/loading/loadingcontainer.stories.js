import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import LoadingContainer from '../../components/LoadingIndicator/LoadingContainer.component';
import LoadingPulse from '../../components/LoadingIndicator/LoadingPulse.component';

storiesOf('LoadingContainer', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div>
      <LoadingContainer title="Please wait... your results are on their way."><LoadingPulse /></LoadingContainer>
    </div>
  ));
