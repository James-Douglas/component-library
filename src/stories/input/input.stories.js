import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import Input from '../../components/Input/Input.component';
import GreyBackgroundView from './input-on-grey-background';
import WhiteBackgroundView from './input-on-white-background';
import PrefixSuffix from './prefix-suffix';
import inputReadme from '../../components/Input/Input.md';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => {

    const tooltip = {
      title: 'Text input tooltip!',
    };

    return (
      <Input 
        id={'default-id'} 
        placeholder='temp placeholder' 
        bordered={true} 
        optional={true} 
        required={false} 
        autoFill={false}
        disabled={false}
        suffix={'suffix'}
        invalid={false}
        label='[Fieldset label]'
        tooltip={tooltip}
      />
    );
  })

  .add('On grey background', () => <GreyBackgroundView/>, { notes: inputReadme })

  .add('On white background', () => <WhiteBackgroundView/>, { notes: inputReadme })
  
  .add('Prefix and suffix', () => <PrefixSuffix/>, { notes: inputReadme })
