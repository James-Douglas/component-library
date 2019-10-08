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

  return (
    <>
      <style jsx>{styles}</style>
      <div className="white-background">
        <Input
          id="input-one"
          placeholder="Placeholder one"
          type="text"
          bordered
          required={false}
          disabled={false}
          invalid={false}
          label="[Fieldset label] With tooltip"
          tooltip={tooltip}
          handleChange={(value) => logValue(value)}
        />

        <Input
          id="input-two"
          placeholder="Placeholder two"
          type="text"
          bordered
          required={false}
          disabled={false}
          invalid={false}
          label="[Fieldset label] Without tooltip"
          handleChange={(value) => logValue(value)}
        />
      </div>

    </>
  );
};

export default whiteBackgroundView;
