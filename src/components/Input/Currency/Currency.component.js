import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input.component';
import { tooltipPropTypes } from '../../Tooltip/Tooltip.component';

export const valueMasking = (val, maxlength) => {
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

const CurrencyInput = ({
  id, label, placeholder, value, prefillValue, handleChange, currencySymbol, bordered, required, disabled, autocomplete, tooltip, forceFullWidth, validationMessage, maxlength, disableFieldset,
}) => (
  <>
    <Input
      id={id}
      label={label}
      type="tel"
      handleChange={handleChange}
      forceFullWidth={forceFullWidth}
      prefixContent={currencySymbol}
      placeholder={placeholder}
      bordered={bordered}
      required={required}
      maxlength={maxlength}
      valueMasking={(val) => valueMasking(val, maxlength)}
      value={value}
      prefillValue={prefillValue}
      disabled={disabled}
      validationMessage={validationMessage}
      autocomplete={autocomplete}
      tooltip={tooltip}
      disableFieldset={disableFieldset}
    />
  </>
);

CurrencyInput.propTypes = {
  /**
   * Unique id for the component. Required.
   */
  id: PropTypes.string.isRequired,
  /**
   * Custom handler to attach to the input field - used to get the value of the field for example.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Forces the ToggleGroup to expand to 12 columns
   */
  forceFullWidth: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Prefills the input and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * The placeholder text for the input.
   */
  placeholder: PropTypes.string,
  /**
   * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional.
   */
  required: PropTypes.bool,
  /**
   * Disables the button via a class on its wrapper, and an attribute on the input.
   */
  disabled: PropTypes.bool,
  /**
   * The input field border style.
   */
  bordered: PropTypes.bool,
  /**
   * Maximum length for the input element
   */
  maxlength: PropTypes.number,
  /**
   * Turn the browsers implementation of autocompletion/memory of forms on or off.
   */
  autocomplete: PropTypes.string,
  /**
   * Currency symbol to be displayed within the input prefix
   */
  currencySymbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  disableFieldset: PropTypes.bool,
};

CurrencyInput.defaultProps = {
  maxlength: 15,
  value: null,
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  prefillValue: null,
  placeholder: '',
  autocomplete: 'off',
  currencySymbol: '',
  required: true,
  disabled: false,
  bordered: true,
  label: '',
  disableFieldset: false,
};

export default CurrencyInput;
