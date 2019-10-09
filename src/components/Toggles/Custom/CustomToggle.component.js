import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const CustomToggle = ({
  id, value, name, selectedId, invalid, disabled, autofill, onToggle, children,
}) => {
  const [dirty, setDirty] = useState(false);
  const handleToggle = () => {
    setDirty(true);
    if (onToggle) {
      onToggle({ id, value });
    }
  };

  return (
    <BaseToggle
      id={id}
      type="custom"
      value={value}
      name={name}
      selectedId={selectedId}
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
  value: PropTypes.string,
  selectedId: PropTypes.string,
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
  selectedId: null,
  invalid: false,
  disabled: false,
  autofill: false,
  onToggle: null,
  children: [],
};

export default CustomToggle;
