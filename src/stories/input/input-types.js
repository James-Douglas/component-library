import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const prefixSuffixView = () => {
  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const tooltip = {
    title: 'tooltip heading',
    body: 'tooltip body',
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">
        <Input
          label="Your email address"
          tooltip={tooltip}
          id="input-email"
          placeholder="example@email.com"
          type="email"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />

        <Input
          label="Your mobile number"
          tooltip={tooltip}
          id="input-mobile"
          placeholder="(04)x xxx xxxx"
          type="tel"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />

        <Input
          label="Your age"
          tooltip={tooltip}
          id="input-age"
          placeholder="e.g 25"
          type="number"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />

        <Input
          label="This is an example of a longer question for an input type, to see how it floats on lower screen sizes"
          tooltip={tooltip}
          id="input-long-label"
          placeholder="Placeholder value"
          type="text"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />
      </div>
    </>
  );
};

export default prefixSuffixView;
