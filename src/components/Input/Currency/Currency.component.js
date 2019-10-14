import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input.component';

const CurrencyInput = ({
  id, label, placeholder, prefillValue, handleChange, currencySymbol, bordered, required, disabled, invalid, autocomplete, tooltip, maxlength,
}) => {
/* id, type, placeholder, prefillValue, required, disabled, bordered, invalid, prefixContent, suffixContent, label, tooltip, autocomplete, handleChange, valueMasking, */


  const valueMasking = (val) => {
    if (val === '') {
      return '';
    }

    let raw = val.toString().replace(/[^0-9]+/g, '');

    if (raw.length > maxlength) {
      raw = raw.substring(0, maxlength);
    }

    let parsed = parseInt(raw, 10);

    if (parsed) {
      parsed = parsed.toLocaleString();
    } else {
      parsed = raw;
    }

    return {
      raw,
      parsed,
    };
  };

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
        disabled={disabled}
        invalid={invalid}
        autocomplete={autocomplete}
        tooltip={tooltip}
      />
    </>
  );
};

CurrencyInput.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  prefillValue: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  maxlength: PropTypes.number,
  invalid: PropTypes.bool,
  autocomplete: PropTypes.string,
  currencySymbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),

  tooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    boundingElementSelector: PropTypes.string,
    screenReaderLabel: PropTypes.string,
  }),
};

CurrencyInput.defaultProps = {
  maxlength: '15',
  prefillValue: '',
  placeholder: '',
  autocomplete: 'off',
  currencySymbol: '',
  required: true,
  disabled: false,
  bordered: true,
  invalid: false,
  label: '',
  tooltip: {},
};

export default CurrencyInput;
