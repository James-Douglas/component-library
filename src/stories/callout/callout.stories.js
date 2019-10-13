import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Callout from '../../components/Callout/Callout.component';

import Container from '../../components/Grid/Container/Container.component';
import iconReadme from '../../components/Callout/callout.md';

storiesOf('Callout', module)
  .addDecorator(withKnobs)

  .add('Callout', () => (
    <Container>
      <Callout>
          The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.
      </Callout>
    </Container>
  ), { notes: iconReadme })
  .add('Callout warning', () => (
    <Container>
      <Callout bgColourGrey>
        The insurance provider will capture the full description and replacement value of the item(s) you wish to specify later.
      </Callout>
    </Container>
  ), { notes: iconReadme });
