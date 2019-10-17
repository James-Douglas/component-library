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
          label="[Fieldset label] With tooltip"
          tooltip={tooltip}
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
          label="[Fieldset label] Without tooltip'"
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
