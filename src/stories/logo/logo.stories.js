import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Logo from '../../components/Logo/Logo.component';
import logoReadme from '../../components/Logo/Logo.md';

storiesOf('Logo', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Logo size="large" />, { notes: logoReadme });
