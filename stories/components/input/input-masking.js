import React, { useState } from 'react';
import { Input } from '@comparethemarketau/manor-input';
import StyledBackground from '../../view-styles';

const InputMasking = () => {
  const [maskedValue, setMaskedValue] = useState('');
  const customMask = (value) => {
    const trimmed = value.substring(0, 2);
    setMaskedValue(trimmed);
  };

  return (
    <StyledBackground color="white">
      <Input
        label="Controlled input with custom mask (not using a masking library)"
        placeholder="example@email.com"
        handleChange={(value) => customMask(value)}
        value={maskedValue}
        controlled
      />
    </StyledBackground>
  );
};

export default InputMasking;
