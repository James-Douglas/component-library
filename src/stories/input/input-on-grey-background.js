import React from 'react';
import Input from '../../components/Input/Input.component';
import StyledBackground from './view-styles';

const GreyBackgroundView = () => {
  const tooltip = {
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
        label="[Fieldset label] With tooltip"
        tooltip={tooltip}
        id="default-id"
        placeholder="Placeholder one"
        type="text"
        bordered={false}
        required={false}
        handleChange={(value) => logValue(value)}
      />
      <Input
        label="[Fieldset label] Without tooltip"
        id="input-two"
        placeholder="Placeholder two"
        type="text"
        bordered={false}
        required={false}
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default GreyBackgroundView;
