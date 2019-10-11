import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import CurrencyInputGrey from './currency-on-grey-background';
import inputReadme from 'components/Input/Input.md';

storiesOf('Input/Currency Input', module)
  .addDecorator(withKnobs)

  .add('Currency Input', () => <CurrencyInputGrey />, { notes: inputReadme })

  
