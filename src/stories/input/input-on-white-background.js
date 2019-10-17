import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const whiteBackgroundView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'White background input view',
  };

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  const fieldsetPropsA = {
    label: '[Fieldset label] With tooltip',
    tooltip,
  };

  const fieldsetPropsB = {
    label: '[Fieldset label] Without tooltip',
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">
        <Input
          fieldsetProps={fieldsetPropsA}
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
          fieldsetProps={fieldsetPropsB}
          id="input-two"
          placeholder="Placeholder two"
          type="text"
          bordered
          required={false}
          disabled={false}
          invalid={false}
          handleChange={(value) => logValue(value)}
        />
      </div>

    </>
  );
};

export default whiteBackgroundView;
