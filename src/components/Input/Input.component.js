import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import UseFieldset from '../../hooks/useFieldset';
import styles from './styles';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import usePrefill from '../../hooks/usePrefill';

export const renderClearIcon = (value, clearInput, isAutofill, label) => {
  if (value && value.length) {
    return (
      <>
        <style jsx>{styles}</style>
        <button
          type="button"
          onClick={clearInput}
          className={`
          input-clear-button
          ${isAutofill ? 'darker' : 'lighter'}
        `}
        >
          <div className="sr-only">Clears the{label}{' '}field.</div>
          <Icon name="closeCircle" size={1.6} />
        </button>
      </>
    );
  }
  return null;
};

export const renderAffix = (affixType, affixContent, bordered, isAutofill, disabled) => {
  const affixTypeClass = `${affixType === 'prefix' ? 'prefix' : 'suffix'}`;
  const borderClass = `${!bordered && affixType ? `${affixType}-no-border` : ''}`;
  const prefillClass = `${isAutofill && !disabled ? 'manor-prefilled' : ''}`;

  if (affixType && affixContent) {
    return (
      <>
        <style jsx>{styles}</style>
        <span className={`${affixTypeClass} ${borderClass} ${prefillClass}
        `}
        >
          {affixContent}
        </span>
      </>
    );
  }
  return null;
};

export const getSupportingElements = (required) => {
  if (required) return null;

  return (
    <div className="supporting-elements">
      <style jsx>{styles}</style>
      <span className="manor-subscript">Optional</span>
    </div>
  );
};

export const getInitialValue = (valueMasking, value, prefillValue) => {
  if (valueMasking && value && value.length) {
    return valueMasking(value);
  }
  if (valueMasking && prefillValue && prefillValue.length) {
    return valueMasking(prefillValue);
  }
  if (value) {
    return value;
  }
  if (prefillValue) {
    return prefillValue;
  }
  return '';
};

const Input = ({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  type,
  placeholder,
  value,
  prefillValue,
  required,
  disabled,
  bordered,
  prefixContent,
  suffixContent,
  autocomplete,
  maxlength,
  handleChange,
  handleFocus,
  handleBlur,
  valueMasking,
  dataList,
  disableFieldset,
}) => {
  const [internalValue, setInternalValue] = useState(getInitialValue(valueMasking, value, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const inputWrapElement = useRef(null);

  const clearInput = () => {
    setIsDirty(true);
    setInternalValue('');
    handleChange('');
  };

  const handleOnChange = (e) => {
    setIsDirty(true);

    if (valueMasking) {
      const { raw, parsed } = valueMasking(e.target.value);
      setInternalValue(parsed || '');
      handleChange(parsed, raw);
    } else {
      setInternalValue(e.target.value);
      handleChange(e.target.value);
    }
  };

  useEffect(() => {
    let valueToUse = '';
    if (value && value.length) {
      valueToUse = value;
    } else if (prefillValue && prefillValue.length) {
      valueToUse = prefillValue;
    }
    if (valueMasking) {
      const { parsed } = valueMasking(valueToUse);
      setInternalValue(parsed);
    } else {
      setInternalValue(valueToUse);
    }
  }, [prefillValue, value, valueMasking]);

  const onFocus = () => {
    if (handleFocus) {
      handleFocus();
    }
    toggleFocus();
  };

  const onBlur = () => {
    if (handleBlur) {
      handleBlur();
    }
    toggleFocus();
  };

  const toggleFocus = () => {
    const { current } = inputWrapElement;
    if (current) {
      current.classList.toggle('input-wrap-focus');
    }
  };

  const prefillClass = `${isAutofill && !disabled ? 'manor-prefilled-border' : ''}`;
  const borderClass = `${bordered ? 'input-border' : ''}`;
  const invalidClass = `${validationMessage && validationMessage.length ? 'invalid' : ''}`;
  const disabledClass = `${disabled ? 'disabled' : ''}`;

  return (
    <>
      <UseFieldset
        disableFieldset={disableFieldset}
        label={label}
        tooltip={tooltip}
        forceFullWidth={forceFullWidth}
        validationMessage={validationMessage}
        supportingElements={getSupportingElements(required)}
      >
        <style jsx>{styles}</style>
        <div className="input-container">
          <div ref={inputWrapElement} className={`input-wrap ${prefillClass} ${borderClass} ${invalidClass} ${disabledClass}`}>

            {renderAffix('prefix', prefixContent, bordered, isAutofill, disabled)}

            <div className="input-clear-wrap">
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={internalValue}
                onChange={handleOnChange}
                autoComplete={autocomplete}
                onFocus={onFocus}
                onBlur={onBlur}
                maxLength={maxlength}
                className={`
                  input-default
                  ${isAutofill && !disabled ? 'manor-prefilled' : ''}
                `}
              />

              {renderClearIcon(internalValue, clearInput, isAutofill, label)}

            </div>

            {renderAffix('suffix', suffixContent, bordered, isAutofill, disabled)}

          </div>

          {dataList && <div>{dataList()}</div>}

        </div>
      </UseFieldset>
    </>
  );
};

Input.propTypes = {
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
   * Maximum length for the input element
   */
  maxlength: PropTypes.number,
  /**
   * Function called with the value to apply an input mask
   */
  valueMasking: PropTypes.func,
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Prefills the input and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * Type of input (such as number, text, tel etc).
   */
  type: PropTypes.string,
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
   * Turn the browsers implementation of autocompletion/memory of forms on or off.
   */
  autocomplete: PropTypes.string,
  /**
   * Function called when the input gains focus
   */
  handleFocus: PropTypes.func,
  /**
   * Function called when input loses focus
   */
  handleBlur: PropTypes.func,
  /**
   * Content to be displayed as a prefix for the input
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Content to be displayed as  suffix for the input
   */
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Used for the combo component, this is the list of options that is displayed on input.
   */
  dataList: PropTypes.func,
  /**
   * Used for disableFieldset wrap component.
   */
  disableFieldset: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  valueMasking: null,
  maxlength: null,
  type: 'text',
  placeholder: '',
  value: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  handleFocus: null,
  handleBlur: null,
  required: true,
  disabled: false,
  bordered: true,
  dataList: null,
  disableFieldset: false,
};

export default Input;
