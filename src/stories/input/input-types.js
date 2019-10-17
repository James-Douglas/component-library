import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const prefixSuffixView = () => {
  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const fieldsetPropsEmail = {
    label: 'Your email address',
    tooltip: {
      title: 'Tooltip heading',
      body: 'Prefix and suffix view',
    },
  };

  const fieldsetPropsMobile = {
    label: 'Your mobile number',
    tooltip: {
      title: 'Tooltip heading',
      body: 'Prefix and suffix view',
    },
  };

  const fieldsetPropsAge = {
    label: 'Your age',
    tooltip: {
      title: 'Tooltip heading',
      body: 'Prefix and suffix view',
    },
  };

  const fieldsetPropsLong = {
    label: 'This is an example of a longer question for an input type, to see how it floats on lower screen sizes',
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">
        <Input
          fieldsetProps={fieldsetPropsEmail}
          id="input-email"
          placeholder="example@email.com"
          type="email"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />

        <Input
          fieldsetProps={fieldsetPropsMobile}
          id="input-mobile"
          placeholder="(04)x xxx xxxx"
          type="tel"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />

        <Input
          fieldsetProps={fieldsetPropsAge}
          id="input-age"
          placeholder="e.g 25"
          type="number"
          bordered
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />

        <Input
          fieldsetProps={fieldsetPropsLong}
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
