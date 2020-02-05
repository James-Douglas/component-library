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
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.string.isRequired,
  /**
   * Value applied to the input field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The value of the currently selected (toggled on) toggle.
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name to be applied to the input field.
   */
  name: PropTypes.string,
  /**
   * Applies invalid styling when true.
   */
  invalid: PropTypes.bool,
  /**
   * Disables the toggle when true.
   */
  disabled: PropTypes.bool,
  /**
   * Handler function called when a toggle is toggled on with the value of the toggle.
   */
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
