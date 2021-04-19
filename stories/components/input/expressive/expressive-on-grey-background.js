import React from 'react';
import { ExpressiveInput } from '@comparethemarketau/manor-input';
import StyledBackground from '../../../view-styles';

const GreyBackgroundView = () => {
  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <StyledBackground color="grey">
      <ExpressiveInput
        id="default-id"
        label="Input one"
        placeholder="Placeholder one"
        type="text"
        required={false}
        handleChange={(value) => logValue(value)}
      />
      <ExpressiveInput
        id="input-two"
        label="Input two"
        placeholder="Placeholder two"
        type="text"
        required={false}
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default GreyBackgroundView;
