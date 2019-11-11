import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import usePrefill from '../../hooks/usePrefill';
import UseFieldset from '../../hooks/useFieldset';

export const getSupportingElements = (required) => {
  if (required) return null;
  return (
    <div className="w-full">
      <div className="supporting-elements">
        <style jsx>{styles}</style>
        <span className="manor-dropdown-optional-indicator manor-subscript">
          OPTIONAL
        </span>
      </div>
    </div>
  );
};

export const selectField = (
  id,
  name,
  selectClass,
  disabled,
  required,
  readonly,
  selectValue,
  handleChange,
  handleFocus,
  handleBlur,
  optionsModified,
) => (
  <>
    <style jsx="true">{styles}</style>
    <select
      id={id}
      name={name}
      className={selectClass}
      disabled={disabled}
      required={required}
      readOnly={readonly}
      value={selectValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {optionsModified.map((option) => (
        <option
          key={option.value}
          value={option.value}
          id={`${id}_${option.value}`}
          disabled={option.disabled}
          hidden={option.hidden}
          data-default={option.defaultOption}
          className={`${option.className} manor-dropdown-option`}
        >
          {option.title}
        </option>
      ))}
    </select>
  </>
);

const WithPrefixContent = ({ children, isFocusActive, prefixContent }) => (prefixContent
  ? (
    <div className={`${isFocusActive ? 'outline-select' : ''} with-prefix-field`}>
      <style jsx="true">{styles}</style>
      <div className="prefix-right" tabIndex="-1">
        {prefixContent}
      </div>
      {children}
    </div>
  ) : children
);


const Dropdown = ({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  name,
  prefillValue,
  bordered,
  disabled,
  required,
  readonly,
  options,
  value,
  onChange,
  disableFieldset,
  className,
  prefixContent,
}) => {
  const invalidClass = validationMessage && validationMessage.length ? 'invalid' : '';
  const [isDirty, setIsDirty] = useState(false);
  const [stateValue, setStateValue] = useState(value);
  const isUsePrefill = usePrefill(prefillValue, value, isDirty);
  const prefillClass = isUsePrefill ? 'manor-prefilled' : '';
  const borderedClass = bordered ? 'manor-input-border' : '';
  const selectValue = isUsePrefill ? prefillValue : stateValue;
  const valueOption = options.find((i) => i.value === selectValue);
  const [showDefaultStyle, setshowDefaultStyle] = useState(valueOption ? !!valueOption.defaultOption : !!options[0].defaultOption);

  const showDefaultClass = showDefaultStyle ? 'manor-default-selected' : '';

  const selectClass = `manor-dropdown
    ${invalidClass} 
    ${prefillClass} 
    ${borderedClass}
    ${showDefaultClass}
    ${className}`;
  const [isFocusActive, setFocusActive] = useState(false);
  const handleFocus = () => {
    setFocusActive(true);
  };
  const handleBlur = () => {
    setFocusActive(false);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setIsDirty(true);
    const selectedValue = event.target.value;
    setshowDefaultStyle(event.target.options[event.target.selectedIndex].getAttribute('data-default'));
    setStateValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <>
      <style jsx="true">{styles}</style>
      <UseFieldset
        disableFieldset={disableFieldset}
        label={label}
        tooltip={tooltip}
        forceFullWidth={forceFullWidth}
        validationMessage={validationMessage}
        supportingElements={getSupportingElements(required)}
      >
        <WithPrefixContent isFocusActive={isFocusActive} prefixContent={prefixContent}>
          {selectField(id, name, selectClass, disabled, required, readonly, selectValue, handleChange, handleFocus, handleBlur, options)}
        </WithPrefixContent>
      </UseFieldset>
    </>
  );
};

Dropdown.propTypes = {
  /**
   * Label for the Dropdown.
   */
  label: PropTypes.string,
  /**
   *  Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Forces the ToggleGroup to expand to 12 columns
   */
  forceFullWidth: PropTypes.bool,
  /**
   *  Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Specifies a unique id for an element
   */
  id: PropTypes.string.isRequired,
  /**
   * Defines a name for the drop-down list
   */
  name: PropTypes.string,
  /**
   * Prefill a value and apply prefill styles (this is used to emulate browser autocomplete styles)
   */
  prefillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Styles the input with a border
   */
  bordered: PropTypes.bool,
  /**
   * Disables the input
   */
  disabled: PropTypes.bool,
  /**
   * Define whether this is a required field
   */
  required: PropTypes.bool,
  /**
   * Whether the dropdown is read only
   */
  readonly: PropTypes.bool,
  /**
   * Onchange function, called with the selected value
   */
  onChange: PropTypes.func,
  /**
   * Set the value of the dropdown
   */
  value: PropTypes.string,
  /**
   * The dropdown options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Allows a default option to be added to the dropdown
     */
    defaultOption: PropTypes.bool,
  })),
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  /**
   * Specifies disableFieldset wrap component.
   */
  disableFieldset: PropTypes.bool,
  /**
   * Content to be displayed as a prefix for the dropdown
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Dropdown.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: '',
  name: '',
  value: '',
  prefillValue: null,
  bordered: false,
  disabled: false,
  required: false,
  readonly: false,
  onChange: null,
  options: [],
  disableFieldset: false,
  className: '',
  prefixContent: '',
};

WithPrefixContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  isFocusActive: PropTypes.bool,
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
WithPrefixContent.defaultProps = {
  children: '',
  isFocusActive: false,
  prefixContent: '',
};

export default Dropdown;
