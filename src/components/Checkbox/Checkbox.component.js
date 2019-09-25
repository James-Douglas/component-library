import React from 'react';
import PropTypes from 'prop-types';
import useToggleState from '../../hooks/useToggleState';
import Icon from '../Icon/Icon.component';
import styles from './Checkbox.module.css';

const Checkbox = ({
  id, icon, disabled, invertColour, handleClick, children, 
}) => {
  const { toggle, onChange } = useToggleState(false);

  const renderIcon = () => {
    if (toggle) {
      return (
        <Icon name={icon} size="2" />
      );
    }
    return null;
  };

  return (
    <>
      <input
        id={id}
        name="temp"
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        checked={toggle}
        className={`
          hidden
          ${styles['manor-checkbox-input']}
        `}
      />

      <label htmlFor={id} onClick={handleClick}>
        <div className={`
          ${styles['manor-checkbox']}
          ${invertColour ? `${styles.inverted}` : ''}
        `}
        >
          {renderIcon()}
        </div>

        {children}
      </label>


    </>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  invertColour: PropTypes.bool,
  handleClick: PropTypes.func,
};

Checkbox.defaultProps = {
  icon: 'check',
  size: 2,
  disabled: false,
  invertColour: false,
  handleClick: () => {},
};

export default Checkbox;
