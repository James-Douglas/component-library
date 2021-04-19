import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { StyledToggle, StyledToggleInput } from './BaseToggle.styles';

const BaseToggle = ({
  trackingLabel,
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
  button,
  inputType,
  variant,
  toggleGroupLabel,
}) => {
  const id = useId(propsId);
  const { trackInteraction } = useContext(ManorContext);

  const [checked, setChecked] = useState(selectedValue || false);
  const wrapperElement = useRef(null);

  useEffect(() => {
    setChecked(selectedValue === value);
  }, [selectedValue, value]);

  const changeHandler = (e) => {
    const targetChecked = e.target.checked;
    setChecked(targetChecked);
    trackInteraction('Click', 'Toggle Buttons', variant, toggleGroupLabel, trackingLabel);
    handleToggle(value);
  };

  return (
    <StyledToggle
      invalid={invalid}
      ref={wrapperElement}
      className={className}
      checked={checked}
      button={button}
    >
      <StyledToggleInput
        tabIndex={0}
        invalid={invalid}
        id={id}
        type={inputType}
        onChange={changeHandler}
        onClick={handleClick}
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        checkedFontColor={checkedFontColor}
        button={button}
      />
      {children}
    </StyledToggle>
  );
};

BaseToggle.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Unique identifier for the BaseToggle
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
   * Disables the toggle when true.
   */
  disabled: PropTypes.bool,
  /**
   * Handler function called when a toggle is toggled on with the value of the toggle.
   */
  handleToggle: PropTypes.func.isRequired,
  /**
   * Handler function called on focus of the toggle
   */
  handleFocus: PropTypes.func,
  /**
   * Handler function called on blur of the toggle
   */
  handleBlur: PropTypes.func,
  /**
   * Handler function called on click of the toggle
   */
  handleClick: PropTypes.func,
  /**
   * Used by the `Color` toggle to override the checked label's font color for when displaying
   * light colors where white text is difficult to discern.
   */
  checkedFontColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Used by the `Button` toggle to determine if the toggle needs to be styled like a button.
   */
  button: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * The type attribute for the underlying input element
   */
  inputType: PropTypes.oneOf(['radio', 'checkbox']),
  /**
   * The type of toggle, used in interaction tracking.
   */
  variant: PropTypes.oneOf(['ColorToggle', 'CustomToggle', 'IconToggle', 'MultiSelectToggle', 'ImageToggle', 'TextToggle']).isRequired,
  /**
   * Label of the toggle group, the ToggleGroup automatically populates this
   */
  toggleGroupLabel: PropTypes.string,
};

BaseToggle.defaultProps = {
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
  button: null,
  inputType: 'radio',
  toggleGroupLabel: '',
};

export default BaseToggle;
