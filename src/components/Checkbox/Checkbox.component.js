import React, { useEffect } from 'react';
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
  id,
  icon,
  disabled,
  invalid,
  invertColour,
  handleChange,
  isSelected,
  children,
}) => {
  const [value, toggle] = useToggleState(isSelected);

  const toggleEventHandler = () => {
    toggle(value);
  };

  useEffect(() => {
    handleChange({ id, value });
  }, [handleChange, id, value]);

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
            ${children ? '' : 'ap alignment'}
          `}
        >
          <div className={`
            manor-checkbox 
            ${invertColour ? 'inverted' : ''}
            ${invalid ? 'manor-checkbox-invalid' : ''}
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
  /**
   * The checkbox ID. This is required, as it informs the label and the value of the checkbox.
   */
  id: PropTypes.string.isRequired,
  /**
   * Defines the icon needed for the checkbox.
   */
  icon: PropTypes.string,
  /**
   * Defines if the checkbox is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * Defines the checkbox checked state.
   */
  isSelected: PropTypes.bool,
  /**
   * Defines the invalid state for the checkbox which applies appropriate styles.
   */
  invalid: PropTypes.bool,
  /**
   * Changes the color of the checked state - blue bg, white tick, or white bg, blue tick.
   */
  invertColour: PropTypes.bool,
  /**
   * Called on change with { id, value }.
   */
  handleChange: PropTypes.func,
  /**
   * Defines the associated content for the checkbox, used by the wrapper component, `<CheckboxGroup/>`.
   * Not required for the singular checkbox.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Checkbox.defaultProps = {
  icon: 'check',
  disabled: false,
  isSelected: false,
  invalid: false,
  invertColour: false,
  handleChange: () => { },
  children: null,
};

export default Checkbox;
