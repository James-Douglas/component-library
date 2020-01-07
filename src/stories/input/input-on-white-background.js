import React from 'react';
import Input from '../../components/Input/Input.component';
import StyledBackground from './view-styles';

const whiteBackgroundView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'White background input view',
  };

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <StyledBackground color="white">
      <Input
        label="Input with tooltip"
        tooltip={tooltip}
        id="input-one"
        placeholder="Placeholder one"
        type="text"
        bordered
        required={false}
        disabled={false}
        invalid={false}
        handleChange={(value) => logValue(value)}
      />

      <Input
        label="Input without tooltip"
        id="input-two"
        placeholder="Placeholder two"
        type="text"
        bordered
        required={false}
        disabled={false}
        invalid={false}
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default whiteBackgroundView;
