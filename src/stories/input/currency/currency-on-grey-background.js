import React from 'react';
import CurrencyInput from 'components/Input/Currency/Currency.component';
/* import styles from './view-styles'; */

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
      
      <div className="grey-background">
        <CurrencyInput
          id="default-id"
          placeholder="Placeholder one"
          currencySymbol='$'
          bordered={false}
          required={false}
          label="AUD Currency Input"
          tooltip={tooltip}
          maxlength={5}
          handleChange={(value) => logValue(value)}
        />
        <CurrencyInput
          id="input-two"
          placeholder="Placeholder two"
          currencySymbol='¥'
          bordered={false}
          required={false}
          label="Yen Currency Input"
          handleChange={(value) => logValue(value)}
          prefillValue='22222'
        />
      </div>
    </>
  );
};

export default greyBackgroundView;
