import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from './toggle.styles';

const columns = {
  1: '100%', 2: '50%', 3: '33.33%', 4: '25%', 5: '20%',
};

export function getInlineStyles(type, rectOptions) {
  if (type !== 'rectangle') return {};
  const { col, height } = rectOptions;
  const inlineStyles = {
    height: `${height}rem`,
  };

  if (col > 0) {
    inlineStyles.width = columns[col];
    inlineStyles.flexBasis = columns[col];
  }

  return inlineStyles;
}

const BaseToggle = ({
  id, type, value, name, selectedId, invalid, disabled, autofill, handleChange, rectOptions, children
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
    <span className="flex" style={getInlineStyles(type, rectOptions)}>
      <style jsx>{styles}</style>
      <input
        ref={toggleElement}
        className="hidden toggle-input"
        id={id}
        type="radio"
        onChange={handleClick}
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


BaseToggle.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['square', 'rectangle']).isRequired,
  value: PropTypes.string,
  selectedId: PropTypes.string,
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autofill: PropTypes.bool,
  handleChange: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
  children: PropTypes.node,
};

BaseToggle.defaultProps = {
  value: '',
  name: '',
  selectedId: null,
  invalid: false,
  disabled: false,
  autofill: false,
  handleChange: null,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
};

export default BaseToggle;
