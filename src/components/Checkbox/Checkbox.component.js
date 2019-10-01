import React from 'react';
import PropTypes from 'prop-types';
import useToggleState from '../../hooks/useToggleState';
import Icon from '../Icon/Icon.component';
import styles from './styles';

export const renderIcon = (icon, value) => {
  if (value) {
    return (
      <Icon name={icon} size={2} />
    );
  }
  return null;
};

const Checkbox = ({
  id, icon, disabled, invertColour, handleChange, children,
}) => {
  const [value, toggle] = useToggleState(false);

  const toggleEventHandler = (e) => {
    // console.trace()
    toggle(e)
    handleChange(e)
  }

  return (
    <>
      <style jsx>{styles}</style>
      <input
        id={id}
        name={id}
        type="checkbox"
        disabled={disabled}
        onChange={toggleEventHandler}
        checked={value}
        className="manor-checkbox-input"

      />

      <label htmlFor={id} onKeyUp={toggleEventHandler} className={disabled ? 'disabled' : ''}>
        <div className={`manor-checkbox ${invertColour ? 'inverted' : ''}`}>
          {renderIcon(icon, value)}
        </div>
        <div className="checkbox-content">
          {children}
        </div>
      </label>
    </>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  invertColour: PropTypes.bool,
  handleClick: PropTypes.func,
  handleKeyUp: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Checkbox.defaultProps = {
  icon: 'check',
  disabled: false,
  invertColour: false,
  children: [],
  handleClick: () => { },
  handleKeyUp: () => { },
};

export default Checkbox;
