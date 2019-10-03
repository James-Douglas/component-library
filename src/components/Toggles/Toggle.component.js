import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import ToggleLabel from './ToggleLabel';
import Icon from '../Icon/Icon.component';
import styles from './toggle.styles';

const columns = {
  1: '100%', 2: '50%', 3: '33.33%', 4: '25%', 5: '20%',
};

export function getAlignment(rectOptions) {
  const { align } = rectOptions;
  return align ? `align-${align}` : '';
}

export function getTypeClasses(type, rectOptions) {
  return type === 'square' ? 'square-toggle' : `rect-toggle ${getAlignment(rectOptions)}`;
}

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

export function getIconToggleContent(icon, iconSize, label) {
  return (
    <>
      <div className="icon-toggle">
        <style jsx>{styles}</style>
        <Icon name={icon} size={iconSize} />
        <span className="icon-label">
          {label}
        </span>
      </div>
    </>
  );
}

export function getTextToggleContent(type, rectOptions, label) {
  return (
    <>
      <span className={getTypeClasses(type, rectOptions)}>
        <style jsx>{styles}</style>
        {label}
      </span>
    </>
  );
}

export function getToggleContent(icon, iconSize, autofill, dirty, id, type, rectOptions, label) {
  return (
    <ToggleLabel dirty={dirty} autofill={autofill} id={id}>
      <style jsx>{styles}</style>
      {icon ? getIconToggleContent(icon, iconSize, label) : getTextToggleContent(type, rectOptions, label)}
    </ToggleLabel>
  );
}

const Toggle = ({
  id, type, label, value, name, selectedId, invalid, disabled, autofill, handleChange, icon, iconSize, rectOptions,
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
        onClick={() => null}
        required={invalid}
        checked={isChecked}
        disabled={disabled}
        name={name}
        value={value}
      />
      {getToggleContent(icon, iconSize, autofill, dirty, id, type, rectOptions, label)}
    </span>
  );
};


Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['square', 'rectangle']).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  selectedId: PropTypes.string,
  name: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
  autofill: PropTypes.bool,
  handleChange: PropTypes.func,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
};

Toggle.defaultProps = {
  value: '',
  name: '',
  selectedId: null,
  invalid: false,
  disabled: false,
  autofill: false,
  handleChange: null,
  icon: null,
  iconSize: 10,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
};

export default Toggle;
