import React from 'react';
import PropTypes from 'prop-types';

import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const CustomToggle = ({
  id, value, name, selectedValue, invalid, disabled, handleToggle, children,
}) => {
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
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
      handleToggle={toggleHandler}
    >
      <ToggleLabel id={id}>
        {children}
      </ToggleLabel>
    </BaseToggle>
  );
};

CustomToggle.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  handleToggle: PropTypes.func,
  children: PropTypes.node,
};

CustomToggle.defaultProps = {
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  children: [],
};

export default CustomToggle;
