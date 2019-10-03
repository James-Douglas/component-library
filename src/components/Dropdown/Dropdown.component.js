import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from "./styles";

const Dropdown = ({
  id,
  name,
  invalid,
  autofill,
  bordered,
  disabled,
  required,
  readonly,
  options,
  value,
  onChange,
  label,
  tooltip,
  forceFullWidth,
}) => {
  const invalidClass = invalid ? 'invalid' : '';
  const [isDirty, setIsDirty] = useState(false);
  const [showDefaultStyle, setshowDefaultStyle] = useState(false);
  const [stateValue, setStateValue] = useState(value);
  const autofillClass = (autofill && !isDirty) ? 'manor-prefilled' : '';
  const borderedClass = bordered ? 'manor-input-border' : '';

  const handleChange = (event) => {
    console.log(event);
    event.preventDefault();
    setIsDirty(true);
    setStateValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Fieldset label={label} tooltip={tooltip} forceFullWidth={forceFullWidth}>
      <style jsx>{styles}</style>
      <select
        id={id}
        name={name}
        className={`manor-dropdown ${invalidClass} ${autofillClass} ${borderedClass}`}
        disabled={disabled}
        required={required}
        readOnly={readonly}
        value={stateValue}
        onChange={handleChange}>
        {options.map((option, index)=>{
          <option value={option.value} disabled>{option.title}</option>
          })
        }

        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </Fieldset>
  )
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  invalid: PropTypes.bool,
  autofill: PropTypes.bool,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    disabled: PropTypes.bool,
    accesskey: PropTypes.string,
    hidden: PropTypes.bool,
  }),
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    boundingElementSelector: PropTypes.string,
    screenReaderLabel: PropTypes.string,
  }),
  forceFullWidth: PropTypes.bool,
};

Dropdown.defaultProps = {
  label: '',
  name: '',
  value: '',
  tooltip: {},
  forceFullWidth: false,
  invalid: false,
  autofill: false,
  bordered: false,
  disabled: false,
  required: false,
  readonly: false,
  onChange: null,
  options: [],
};

export default Dropdown;
