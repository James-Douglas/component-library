import React from 'react';
import { Input } from '@comparethemarketau/manor-input';
import StyledBackground from '../../view-styles';

const prefixSuffixView = () => {
  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const tooltip = {
    trackingLabel: 'example input tooltip',
    title: 'tooltip heading',
    body: 'tooltip body',
  };

  return (
    <StyledBackground color="white">
      <Input
        label="Your email address"
        tooltip={tooltip}
        placeholder="example@email.com"
        type="email"
        disabled={false}
        handleChange={(value) => logValue(value)}
      />

      <Input
        label="Your mobile number"
        tooltip={tooltip}
        id="input-mobile"
        placeholder="(04)x xxx xxxx"
        type="tel"
        disabled={false}
        handleChange={(value) => logValue(value)}
      />

      <Input
        label="Your age"
        tooltip={tooltip}
        id="input-age"
        placeholder="e.g 25"
        type="number"
        disabled={false}
        handleChange={(value) => logValue(value)}
      />

      <Input
        label="This is an example of a longer question for an input type, to see how it floats on lower screen sizes"
        tooltip={tooltip}
        id="input-long-label"
        placeholder="Placeholder value"
        type="text"
        disabled={false}
        handleChange={(value) => logValue(value)}
      />
    </StyledBackground>
  );
};

export default prefixSuffixView;
