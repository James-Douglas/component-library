import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const StyledColourToggle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.spacing['128']};
  height: ${({ theme }) => theme.spacing['128']};

  &:hover i {
    pointer-events: none;
    height: 100%;
  }
`;

const StyledBorderColour = styled.i`
  font-style: normal;
  position: absolute;
  z-index: ${({ theme }) => (theme.zIndex['10'])};
  bottom: 0;
  left: 0;
  height: ${({ theme }) => (theme.spacing['12'])};
  width: 100%;
  transition: all 0.3s ease;
`;

const StyledContent = styled.span`
  z-index: ${({ theme }) => (theme.zIndex['20'])};
`;

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
  id,
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
          <StyledContent>{displayLabel}</StyledContent>
          <StyledBorderColour style={animationStyle} />
        </StyledColourToggle>
      </ToggleLabel>
    </BaseToggle>
  );
};

ColorToggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.string.isRequired,
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
  label: PropTypes.string,
  /**
   * The color of the label text
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
