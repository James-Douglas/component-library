import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import inputReadme from 'components/Input/Input.md';
import CurrencyInputGrey from './currency-on-grey-background';

storiesOf('Input/Currency Input', module)
  .addDecorator(withKnobs)

  .add('Currency Input', () => <CurrencyInputGrey />, { notes: inputReadme });
