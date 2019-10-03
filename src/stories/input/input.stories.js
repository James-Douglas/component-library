import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import GreyBackgroundView from './input-on-grey-background';
import WhiteBackgroundView from './input-on-white-background';
import PrefixSuffix from './input-prefix-suffix';
import InputTypes from './input-types';
import inputReadme from '../../components/Input/Input.md';

storiesOf('Input', module)
  .addDecorator(withKnobs)

  .add('On grey background', () => <GreyBackgroundView/>, { notes: inputReadme })

  .add('On white background', () => <WhiteBackgroundView/>, { notes: inputReadme })
  
  .add('Prefix and suffix', () => <PrefixSuffix/>, { notes: inputReadme })

  .add('Input types', () => <InputTypes/>, { notes: inputReadme })
