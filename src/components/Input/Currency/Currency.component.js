import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input.component';
import { tooltipPropTypes } from '../../Tooltip/Tooltip.component';

export const valueMasking = (val, maxlength) => {
  if (val === '') {
    return { raw: '', parsed: '' };
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
  id,
  label,
  placeholder,
  value,
  prefillValue,
  handleChange,
  currencySymbol,
  bordered,
  required,
  disabled,
  autocomplete,
  tooltip,
  validationMessage,
  maxlength,
  className,
  handleFocus,
  handleBlur,
}) => (
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
      valueMasking={(val) => valueMasking(val, maxlength)}
      value={value}
      prefillValue={prefillValue}
      disabled={disabled}
      validationMessage={validationMessage}
      autocomplete={autocomplete}
      tooltip={tooltip}
      className={className}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
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
   * Called on focus of the checkbox
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the checkbox
   */
  handleBlur: PropTypes.func,
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
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
  /**
   * Classes to be applied to the Currency component
   */
  className: PropTypes.string,
};

CurrencyInput.defaultProps = {
  maxlength: 15,
  value: null,
  tooltip: {},
  validationMessage: null,
  prefillValue: null,
  placeholder: '',
  autocomplete: 'off',
  currencySymbol: '',
  required: true,
  disabled: false,
  bordered: true,
  label: '',
  className: '',
  handleFocus: null,
  handleBlur: null,
};

export default CurrencyInput;
