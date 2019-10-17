import React, { useRef } from 'react';
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
  id, type, value, name, selectedValue, invalid, disabled, autofill, onToggle, rectOptions, children,
}) => {
  const wrapperElement = useRef(null);
  const toggleElement = useRef(null);

  const handleToggle = () => {
    onToggle(value);
  };

  const isChecked = selectedValue === value ? true : autofill || false;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <span
      className="flex toggle"
      style={getInlineStyles(type, rectOptions)}
      onClick={() => {
        toggleElement.current.click();
        toggleElement.current.focus();
      }}
      ref={wrapperElement}
    >
      <style jsx>{styles}</style>
      <input
        tabIndex={0}
        ref={toggleElement}
        className="toggle-input"
        id={id}
        type="radio"
        onChange={handleToggle}
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
  type: PropTypes.oneOf(['square', 'rectangle', 'custom']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autofill: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
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
  selectedValue: null,
  invalid: false,
  disabled: false,
  autofill: false,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
};

export default BaseToggle;
