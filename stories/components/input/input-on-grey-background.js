import React from 'react';
import { Input } from '@comparethemarketau/manor-input';
import StyledBackground from '../../view-styles';

const GreyBackgroundView = () => {
  const tooltip = {
    trackingLabel: 'input tooltip grey background',
    title: 'Tooltip heading',
    body: 'Grey background input view',
  };

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <StyledBackground color="grey">
      <Input
        id="default-id"
        label="Input one"
        tooltip={tooltip}
        placeholder="Placeholder one"
        type="text"
        required={false}
        handleChange={(value) => logValue(value)}
      />
      <Input
        id="input-two"
        label="Input two"
        tooltip={tooltip}
        placeholder="Placeholder two"
        type="text"
        required={false}
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default GreyBackgroundView;
