/* eslint-disable no-console */

import React from 'react';
import Input from '../../components/Input/Input.component';
import StyledBackground from '../view-styles';

const logValue = (value) => {
  console.log(value);
};

const prefixSuffixView = () => (
  <StyledBackground color="white">
    <Input
      id="input-invalid"
      placeholder="Invalid input example"
      type="text"
      disabled={false}
      validationMessage="This is an invalid field"
      label="An invalid input"
      handleChange={(value) => logValue(value)}
    />

    <Input
      id="input-disabled"
      placeholder="Disabled input example"
      type="text"
      disabled
      label="A disabled input"
      handleChange={(value) => logValue(value)}
    />

    <Input
      id="input-autofill"
      placeholder="Autofill example"
      type="text"
      prefillValue="autofilled value"
      label="Autofill styling example"
      handleChange={(value) => logValue(value)}
    />

    <Input
      id="input-autofill-with-affix"
      placeholder="Autofill example"
      type="text"
      prefillValue="autofilled value"
      prefixContent="$"
      suffixContent="?"
      label="Autofill styling example with affixes"
      handleChange={(value) => logValue(value)}
    />

    <Input
      id="input-with-max-length"
      placeholder="check the console"
      type="text"
      label="Maxlength (5) and blur/onfocus handlers"
      handleChange={(value) => logValue(value)}
      handleFocus={() => { console.warn('focused'); }}
      handleBlur={() => { console.warn('blurred'); }}
      maxlength={5}
    />
  </StyledBackground>
);

export default prefixSuffixView;
