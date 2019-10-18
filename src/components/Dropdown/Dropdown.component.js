import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from './styles';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import usePrefill from '../../hooks/usePrefill';

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
  defaultOption,
}) => {
  const optionsModified = defaultOption.hasDefaultOption ? [{
    value: defaultOption.value,
    title: defaultOption.title ? defaultOption.title : 'Please Select...',
    disabled: defaultOption.disabled,
    hidden: defaultOption.hidden,
    class: 'manor-dropdown-option default',
  }, ...options] : [...options];
  const checkIfSelectedValueIsEqualToDefaultValue = (selectedValue) => {
    if (defaultOption && defaultOption.hasDefaultOption) {
      return (defaultOption.value === selectedValue);
    }
    return false;
  };
  const invalidClass = validationMessage && validationMessage.length ? 'invalid' : '';
  const [isDirty, setIsDirty] = useState(false);
  const [showDefaultStyle, setshowDefaultStyle] = useState(checkIfSelectedValueIsEqualToDefaultValue(value));
  const [stateValue, setStateValue] = useState(value);
  const prefillClass = usePrefill(prefillValue, value, isDirty) ? 'manor-prefilled' : '';
  const borderedClass = bordered ? 'manor-input-border' : '';
  const showDefaultClass = showDefaultStyle ? 'manor-default-selected' : '';
  const handleChange = (event) => {
    event.preventDefault();
    setIsDirty(true);
    const selectedValue = event.target.value;
    setStateValue(selectedValue);
    setshowDefaultStyle(checkIfSelectedValueIsEqualToDefaultValue(selectedValue));
    if (onChange) {
      onChange(event);
    }
  };

  const selectValue = (prefillValue && prefillValue.length && !isDirty && !value.length) ? prefillValue : stateValue;
  return (
    <>
      <style jsx="true">{styles}</style>
      <Fieldset label={label} tooltip={tooltip} forceFullWidth={forceFullWidth} validationMessage={validationMessage} supportingElements={getSupportingElements(required)}>
        <select
          id={id}
          name={name}
          className={`manor-dropdown ${invalidClass} ${prefillClass} ${borderedClass} ${showDefaultClass}`}
          disabled={disabled}
          required={required}
          readOnly={readonly}
          value={selectValue}
          onChange={handleChange}
        >
          {optionsModified.map((option) => (
            <option
              key={option.value}
              value={option.value}
              id={`${id}_${option.value}`}
              disabled={option.disabled}
              hidden={option.hidden}
              className={option.class ? option.class : 'manor-dropdown-option'}
            >
              {option.title}
            </option>
          ))}
        </select>
      </Fieldset>
    </>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  forceFullWidth: PropTypes.bool,
  validationMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  prefillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultOption: PropTypes.shape({
    hasDefaultOption: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    class: PropTypes.string,
  }),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    className: PropTypes.string,
  })),
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
  defaultOption: {},
};

export default Dropdown;
