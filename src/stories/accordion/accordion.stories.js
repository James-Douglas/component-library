import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Accordion from '../../components/Accordion/Accordion.component';
import iconReadme from '../../components/Accordion/accordion.md';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .add('Default Accordion', () => (
    <Accordion />
  ), { notes: iconReadme });
