import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledToggle = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  border: ${({ theme, invalid }) => (invalid ? theme.borders.invalid : theme.borders.component)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: ${({ theme }) => `0 ${theme.spacing['16']} ${theme.spacing['16']} 0`};
  background: ${({ theme }) => theme.toggle.base.background};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  line-height: ${({ theme }) => theme.lineHeight.normal};
`;

const StyledToggleInput = styled.input`
  opacity: 0;
  width:0;
  height: 0;
  position: absolute;
  
  + label {
    color: ${({ theme }) => theme.toggle.base.color};
  }
  
  &:checked + label svg {
    color: ${({ theme }) => theme.toggle.base.colorChecked};
    fill: currentColor;
    box-shadow: none;
  }
  
  &:checked + label div {
    background: ${({ theme }) => theme.toggle.base.backgroundChecked};
    color: ${({ checkedFontColor, theme }) => checkedFontColor || theme.toggle.base.colorChecked};
    box-shadow: none;
  }

  &:disabled + label:hover {
    cursor: not-allowed;
  }

  &:disabled + label {
    color: ${({ theme }) => theme.toggle.base.colorDisabled};
    border: ${({ theme }) => theme.borders.transparent};
    fill: currentColor;
  }

  &:focus + label {
    box-shadow: 0 0 2px 3px rgba(0, 123, 255, .3);
  }

  ${({ invalid, theme }) => invalid && css`
     & + label {
      color: ${theme.colors.error300};
      fill: currentColor;
     }
     &:checked + label {
      color:  ${theme.colors.error300};
      fill: currentColor;
    }
  `}
`;

const BaseToggle = ({
  id,
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

  const clickHandler = () => {
    if (handleClick) {
      handleClick(value);
    }
  };

  return (
    <StyledToggle
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
        onClick={clickHandler}
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        checkedFontColor={checkedFontColor}
      />
      {children}
    </StyledToggle>

  );
};

BaseToggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.string.isRequired,
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
};

BaseToggle.defaultProps = {
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

export default BaseToggle;
