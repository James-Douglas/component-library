import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input.component';
import { tooltipPropTypes } from '../../Tooltip/Tooltip.component';
import { getInitialValue } from '../Input.component';
import useId from '../../../hooks/useId';

const CurrencyInput = ({
  id: propsId,
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
}) => {
  const id = useId(propsId);
  const [internalValue, setInternalValue] = useState(getInitialValue(value, prefillValue));

  const changeHandler = useCallback((val) => {
    // strip commas and leading zeros
    const newVal = Number(val.toString().replace(/[^0-9]+/g, '')).toString();
    setInternalValue(newVal);
    handleChange(Number(newVal));
  }, [setInternalValue, handleChange]);

  /**
   * Given the current value of the field, returns a mask array
   * e.g. for value "1234" returns [/\d/, ',', /\d/, /\d/, /\d/]
   * @param val - the current value of the input field (includes formatting!)
   * @returns {any[]} mask array
   */
  const maskFunc = useCallback((val) => {
    if (val === '0') return [];
    // strip commas
    const raw = val.toString().replace(/[^0-9]+/g, '');
    // convert to array & trim value if it exceeds maxlength
    const rawArray = raw.split('').splice(0, maxlength);
    const result = [];

    let count = 0;
    for (let i = rawArray.length; i > 0; i -= 1) {
      if (count === 3) {
        result.push(',');
        // reset counter
        count = 0;
      }
      count += 1;
      result.push(/\d/);
    }

    return result.reverse();
  }, [maxlength]);

  return (
    <Input
      id={id}
      label={label}
      type="tel"
      handleChange={changeHandler}
      prefixContent={currencySymbol}
      placeholder={placeholder}
      bordered={bordered}
      required={required}
      maxlength={maxlength}
      mask={maskFunc}
      value={internalValue}
      prefillValue={prefillValue}
      disabled={disabled}
      validationMessage={validationMessage}
      autocomplete={autocomplete}
      tooltip={tooltip}
      className={className}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
    />
  );
};

CurrencyInput.propTypes = {
  /**
   *  Unique id for the Currency input
   */
  id: PropTypes.string,
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
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
  id: null,
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
