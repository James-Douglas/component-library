import React from 'react';
import PropTypes from 'prop-types';
import useToggleState from '../../hooks/useToggleState';
import Icon from '../Icon/Icon.component';
import styles from './styles';

const Checkbox = ({
  id, icon, disabled, invertColour, handleClick, children,
}) => {
  const { toggle, onChange } = useToggleState(false);

  const renderIcon = () => {
    if (toggle) {
      return (
        <Icon name={icon} size={2} />
      );
    }
    return null;
  };

  return (
    <>
      <style jsx>{styles}</style>
      <input
        id={id}
        name="temp"
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        checked={toggle}
        className="hidden manor-checkbox-input"
      />

      <label htmlFor={id} onClick={handleClick} className={disabled ? 'disabled' : ''}>
        <div className={`manor-checkbox ${invertColour ? 'inverted' : ''}`}>
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
  disabled: PropTypes.bool,
  invertColour: PropTypes.bool,
  handleClick: PropTypes.func,
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
  handleClick: () => {},
};

export default Checkbox;
