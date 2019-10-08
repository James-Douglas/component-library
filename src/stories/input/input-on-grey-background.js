import React from 'react';
import Input from '../../components/Input/Input.component';
import styles from './view-styles';

const greyBackgroundView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'Grey background input view',
  };

  const logValue = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="grey-background">
        <Input
          id="default-id"
          placeholder="Placeholder one"
          type="text"
          bordered={false}
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
          bordered={false}
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

export default greyBackgroundView;
