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

const renderContent = (children) => {
  if (children) {
    return (
      <>
        <style jsx>{styles}</style>
        <div className="checkbox-content no-margin">
          {children}
        </div>
      </>
    );
  }
  return null;
};

const Checkbox = ({
  id, icon, disabled, invertColour, handleChange, children,
}) => {
  const [value, toggle] = useToggleState(false);

  const toggleEventHandler = (e) => {
    toggle();
    if (handleChange) {
      handleChange(e);
    }
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="checkbox-wrap">
        <input
          id={id}
          name={id}
          type="checkbox"
          disabled={disabled}
          onChange={toggleEventHandler}
          checked={value}
          className="manor-checkbox-input"
        />

        <label
          htmlFor={id}
          className={`
            ${disabled ? 'disabled' : ''}
            ${children ? '' : 'ap'}
            ${children ? '' : 'alignment'}
          `}
        >
          <div className={`
            manor-checkbox 
            ${invertColour ? 'inverted' : ''}
          `}
          >
            {renderIcon(icon, value)}
          </div>

          {renderContent(children)}

        </label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  invertColour: PropTypes.bool,
  handleChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Checkbox.defaultProps = {
  icon: 'check',
  disabled: false,
  invertColour: false,
  handleChange: () => { },
  children: null,
};

export default Checkbox;
