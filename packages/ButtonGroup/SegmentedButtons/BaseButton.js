import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledButton, StyledToggleInput } from './BaseButton.styles';

const BaseButton = ({
  id: propsId,
  value,
  name,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
  checkedFontColor,
  children,
  className,
}) => {
  const id = useId(propsId);
  const [checked, setChecked] = useState(selectedValue || false);
  const wrapperElement = useRef(null);

  useEffect(() => {
    setChecked(selectedValue === value);
  }, [selectedValue, value]);

  const changeHandler = (e) => {
    const targetChecked = e.target.checked;
    setChecked(targetChecked);
    handleToggle(value);
  };

  return (
    <StyledButton
      invalid={invalid}
      ref={wrapperElement}
      className={className}
      checked={checked}
    >
      <StyledToggleInput
        tabIndex={0}
        invalid={invalid}
        id={id}
        type="radio"
        onChange={changeHandler}
        onClick={handleClick}
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        checkedFontColor={checkedFontColor}
      />
      {children}
    </StyledButton>
  );
};

BaseButton.propTypes = {
  /**
   * Unique identifier for the BaseButton
   */
  id: PropTypes.string,
  /**
   * Value applied to the input field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The value of the currently selected (toggled on) toggle.
   * (`ToggleGroup` will override any value provided to this prop if in use)
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name to be applied to the input field.
   */
  name: PropTypes.string,
  /**
   * Applies invalid styling when true.
   */
  invalid: PropTypes.bool,
  /**
   * Disables the button when true.
   */
  disabled: PropTypes.bool,
  /**
   * Handler function called when a button is toggled on with the value of the button.
   */
  handleToggle: PropTypes.func.isRequired,
  /**
   * Handler function called on focus of the button
   */
  handleFocus: PropTypes.func,
  /**
   * Handler function called on blur of the button
   */
  handleBlur: PropTypes.func,
  /**
   * Handler function called on click of the button
   */
  handleClick: PropTypes.func,
  /**
   * Used by the `Color` toggle to override the checked label's font color for when displaying
   * light colors where white text is difficult to discern.
   */
  checkedFontColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

BaseButton.defaultProps = {
  id: null,
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  checkedFontColor: null,
  children: [],
  className: '',
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
};

export default BaseButton;
