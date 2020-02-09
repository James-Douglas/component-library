import React, { useState } from 'react';
import Input from '../../components/Input/Input.component';
import StyledBackground from './view-styles';
import Container from '../../components/Grid/Container/Container.component';

const WhiteBackgroundView = () => {
  const [isValid, setIsValid] = useState(true);
  const tooltip = {
    title: 'Tooltip heading',
    body: 'White background input view',
  };

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const inputOneChangeHandler = (value) => {
    logValue(value);
    setIsValid(!(value && value.length));
  };

  return (
    <Container>
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
          validationMessage={isValid ? '' : 'Please enter a valid email address'}
          handleChange={(value) => inputOneChangeHandler(value)}
        />
        <Input
          label="Input without tooltip"
          id="input-two"
          placeholder="Placeholder two"
          type="text"
          bordered
          required={false}
          disabled={false}
          handleChange={(value) => logValue(value)}
        />
      </StyledBackground>
    </Container>
  );
};

export default WhiteBackgroundView;
