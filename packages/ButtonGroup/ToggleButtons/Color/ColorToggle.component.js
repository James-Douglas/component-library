import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import { useId } from '@comparethemarketau/manor-hooks';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';
import { StyledBorderColour, StyledColourToggle, StyledContent } from './ColorToggle.styles';

export function getDisplayBackgroundColor(backgroundColor) {
  return backgroundColor === 'white' ? 'ivory' : backgroundColor;
}

export function getAnimationStyle(value, selectedValue, displayBackgroundColor) {
  if (selectedValue === value) {
    return {
      backgroundColor: displayBackgroundColor,
      height: '100%',
    };
  }
  return {
    backgroundColor: displayBackgroundColor,
  };
}

export function getDisplayLabel(label, backgroundColor) {
  if (!label) {
    return backgroundColor.includes('ivory') ? 'White' : backgroundColor.charAt(0).toUpperCase() + backgroundColor.slice(1);
  }
  return label;
}

const ColorToggle = ({
  id: propsId,
  label,
  backgroundColor,
  fontColor,
  value,
  name,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
}) => {
  const id = useId(propsId);
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  const displayBackgroundColor = getDisplayBackgroundColor(backgroundColor);
  const animationStyle = getAnimationStyle(value, selectedValue, displayBackgroundColor);
  const displayLabel = getDisplayLabel(label, backgroundColor);

  return (
    <BaseToggle
      id={id}
      type="custom"
      value={value}
      name={name}
      selectedValue={selectedValue}
      checkedFontColor={fontColor}
      invalid={invalid}
      disabled={disabled}
      handleToggle={toggleHandler}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleClick={handleClick}
    >
      <ToggleLabel id={id}>
        <StyledColourToggle>
          <StyledContent><Typography variant="body2" component="span">{displayLabel}</Typography></StyledContent>
          <StyledBorderColour style={animationStyle} />
        </StyledColourToggle>
      </ToggleLabel>
    </BaseToggle>
  );
};

ColorToggle.propTypes = {
  /**
   * Unique identifier for the ColorToggle
   */
  id: PropTypes.string,
  /**
   * The background color for the toggle
   */
  backgroundColor: PropTypes.string.isRequired,
  /**
   * Value applied to the input field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The label to display on the toggle
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The color of the toggle when it is selected
   */
  fontColor: PropTypes.string,
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
  handleToggle: PropTypes.func,
  /**
   * Handler function call on focus of the toggle
   */
  handleFocus: PropTypes.func,
  /**
   * Handler function call on blur of the toggle
   */
  handleBlur: PropTypes.func,
  /**
   * Handler function called on click of the toggle
   */
  handleClick: PropTypes.func,
};

ColorToggle.defaultProps = {
  id: null,
  label: null,
  fontColor: 'black',
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
};

export default ColorToggle;
