import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const prefixSuffixView = () => {
  const tooltipEmail = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view',
  };

  const tooltipMobile = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view',
  };

  const tooltipAge = {
    title: 'Tooltip heading',
    body: 'Prefix and suffix view',
  };

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">
        <Input
          id="input-email"
          placeholder="example@email.com"
          type="email"
          bordered
          disabled={false}
          invalid={false}
          label="Your email address"
          tooltip={tooltipEmail}
          handleChange={(value) => logValue(value)}
        />

        <Input
          id="input-mobile"
          placeholder="(04)x xxx xxxx"
          type="tel"
          bordered
          disabled={false}
          invalid={false}
          label="Your mobile number"
          tooltip={tooltipMobile}
          handleChange={(value) => logValue(value)}
        />

        <Input
          id="input-age"
          placeholder="e.g 25"
          type="number"
          bordered
          disabled={false}
          invalid={false}
          label="Your age"
          tooltip={tooltipAge}
          handleChange={(value) => logValue(value)}
        />

        <Input
          id="input-long-label"
          placeholder="Placeholder value"
          type="text"
          bordered
          disabled={false}
          invalid={false}
          label="This is an example of a longer question for an input type, to see how it floats on lower screen sizes"
          handleChange={(value) => logValue(value)}
        />
      </div>
    </>
  );
};

export default prefixSuffixView;
