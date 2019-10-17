import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const CustomToggle = ({
  id, value, name, selectedValue, invalid, disabled, autofill, onToggle, children,
}) => {
  const [dirty, setDirty] = useState(false);
  const handleToggle = () => {
    setDirty(true);
    if (onToggle) {
      onToggle(value);
    }
  };

  return (
    <BaseToggle
      id={id}
      type="custom"
      value={value}
      name={name}
      selectedValue={selectedValue}
      invalid={invalid}
      disabled={disabled}
      autofill={autofill}
      onToggle={handleToggle}
    >
      <ToggleLabel dirty={dirty} autofill={autofill} id={id}>
        {children}
      </ToggleLabel>
    </BaseToggle>
  );
};

CustomToggle.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autofill: PropTypes.bool,
  onToggle: PropTypes.func,
  children: PropTypes.node,
};

CustomToggle.defaultProps = {
  value: '',
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  autofill: false,
  onToggle: null,
  children: [],
};

export default CustomToggle;
