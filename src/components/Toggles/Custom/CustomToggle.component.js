import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import ToggleLabel from '../ToggleLabel';
import styles from './styles';

const CustomToggle = ({
  id, value, name, selectedId, invalid, disabled, autofill, handleChange, children,
}) => {
  const [dirty, setDirty] = useState(false);
  const toggleElement = useRef(null);
  const handleClick = () => {
    setDirty(true);
    if (handleChange) {
      handleChange(id);
    }
  };

  const isChecked = selectedId ? selectedId === id : autofill || false;

  return (
    <span className="flex">
      <style jsx>{styles}</style>
      <input
        ref={toggleElement}
        className="hidden toggle-input"
        id={id}
        type="radio"
        onChange={handleClick}
        onClick={() => null}
        required={invalid}
        checked={isChecked}
        disabled={disabled}
        name={name}
        value={value}
      />
      {children}
    </span>
  );
};

CustomToggle.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  selectedId: PropTypes.string,
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autofill: PropTypes.bool,
  handleChange: PropTypes.func,
  children: PropTypes.node,
};

CustomToggle.defaultProps = {
  value: '',
  name: '',
  selectedId: null,
  invalid: false,
  disabled: false,
  autofill: false,
  handleChange: null,
  children: [],
};

export default CustomToggle;
