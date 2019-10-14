import React from 'react';
import CurrencyInput from 'components/Input/Currency/Currency.component';
/* import styles from './view-styles'; */

const greyBackgroundView = () => {
  const tooltip = {
    title: 'Tooltip heading',
    body: 'Grey background input view',
  };

  const logValue = (value, rawValue) => {
    // eslint-disable-next-line no-console
    console.warn('log value',value, rawValue);
  };

  return (
    <>

      <div className="grey-background">
        <CurrencyInput
          id="default-id"
          placeholder="Placeholder one"
          currencySymbol="$"
          bordered={false}
          required={false}
          label="AUD Currency Input"
          tooltip={tooltip}
          maxlength={5}
          handleChange={(value, rawValue) => logValue(value, rawValue)}
        />
        <CurrencyInput
          id="input-two"
          placeholder="Placeholder two"
          currencySymbol="¥"
          bordered={false}
          required={false}
          label="Yen Currency Input"
          handleChange={(value, rawValue) => logValue(value, rawValue)}
          prefillValue="22222"
        />
      </div>
    </>
  );
};

export default greyBackgroundView;
