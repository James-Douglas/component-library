import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input.component';

const CurrencyInput = ({
  id, label, prefillValue, handleChange, currencySymbol, placeholder, bordered, required, maxlength,
}) => {

  const valueMasking = (val) => {

    if (val === '') {
      return '';
    }

    let strippedChars = val.toString().replace(/[^0-9]+/g, '');

    if (strippedChars.length > maxlength) {
      strippedChars = strippedChars.substring(0, maxlength);
    }

    const parsed = parseInt(strippedChars);

    if (parsed) {
      strippedChars = parsed.toLocaleString();
    }
    
    return strippedChars;
  }

  return (
    <>
      <Input 
        id={id} 
        label={label}
        type="tel" 
        handleChange={handleChange}
        prefixContent={currencySymbol} 
        placeholder={placeholder}
        bordered={bordered}
        required={required}
        maxlength={maxlength}
        valueMasking={valueMasking}
        prefillValue={prefillValue}
      />
    </>
  );
};

CurrencyInput.propTypes = {

};

CurrencyInput.defaultProps = {
  maxlength: '15'
};

export default CurrencyInput;
