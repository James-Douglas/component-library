import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import usePrefill from '../../hooks/usePrefill';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledHiddenInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: ${({ theme }) => theme.spacing.px};
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: ${({ theme }) => theme.spacing.px};
`;

const StyledWrap = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[12]};
  min-width: 3rem;
`;

const StyledCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.checkbox.border};
  ${({ theme, checked, isAutofill }) => {
    if (isAutofill) {
      return css`
        background: ${theme.checkbox.prefilled};
        border: ${theme.checkbox.prefilledBorder};
      `;
    } if (checked) {
      return css`
        background: ${theme.checkbox.backgroundChecked};
      `;
    }
    return css`
      background: ${theme.checkbox.background};
    `;
  }}

  color: ${({ theme, isAutofill }) => (isAutofill ? theme.checkbox.iconPrefilled : theme.checkbox.color)};
  min-width: ${({ theme }) => theme.checkbox.size};
  height: ${({ theme }) => theme.checkbox.size};
  pointer-events: none;
  border-radius: ${({ theme }) => theme.checkbox.borderRadius};
  padding: ${({ theme }) => theme.spacing.px};

  ${StyledHiddenInput}:focus + label & {
    box-shadow: ${({ theme }) => theme.checkbox.shadow};
  }

  ${({ invertColour, theme }) => invertColour && css`
    background: ${theme.checkbox.background};
    color: ${theme.checkbox.backgroundChecked};
  `}

  ${({ disabled, theme }) => disabled && css`
    pointer-events: none;
    background: ${theme.checkbox.backgroundDisabled};
    border: ${theme.borders.disabled};
    color: ${theme.checkbox.colorDisabled};
    opacity:${theme.checkbox.disabledOpacity};
  `}
  ${({ theme, invalid }) => invalid && css`
    border: ${theme.checkbox.invalid};
    :hover {
      border: ${theme.borders.invalid};
    }
  `}
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing[4]};

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;
  `};
  :hover ${StyledCheckbox}{
    border: ${({ theme, disabled }) => (disabled ? null : theme.checkbox.borderHover)};
  }
  :active ${StyledCheckbox}{
    border: ${({ theme, disabled }) => (disabled ? null : theme.checkbox.active)};
  }
`;

const StyledContent = styled.div`
  margin: ${({ theme }) => theme.checkbox.contentMargin};
  pointer-events: none;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const renderIcon = (icon, value) => {
  if (value) {
    return (
      <FontAwesomeIcon icon={icon} size="1x" />
    );
  }
  return null;
};

export const getInitialValue = (isSelected, prefillValue) => isSelected || prefillValue || false;

const Checkbox = ({
  id,
  icon,
  label,
  disabled,
  validationMessage,
  invertColour,
  handleChange,
  handleFocus,
  handleBlur,
  isSelected,
  prefillValue,
  className,
}) => {
  const [internalValue, setInternalValue] = useState(getInitialValue(isSelected, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, isSelected, isDirty);

  useEffect(() => {
    if (!prefillValue) {
      setInternalValue(isSelected);
    }
  }, [isSelected, prefillValue]);

  const toggleEventHandler = (e) => {
    const targValue = e.target.checked;

    setIsDirty(true);
    setInternalValue(targValue);

    if (handleChange) {
      handleChange({ id, value: targValue });
    }
  };

  return (
    <div invalid={validationMessage && validationMessage.length > 0}>
      <StyledWrap>
        <StyledHiddenInput
          id={id}
          name={id}
          type="checkbox"
          role="checkbox"
          disabled={disabled}
          onChange={toggleEventHandler}
          checked={internalValue}
          aria-checked={internalValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <StyledLabel
          disabled={disabled}
          htmlFor={id}
        >
          <StyledCheckbox
            className={className}
            invertColour={invertColour}
            checked={internalValue}
            isAutofill={isAutofill}
            disabled={disabled}
            invalid={validationMessage && validationMessage.length > 0}
          >
            {renderIcon(icon, internalValue)}
          </StyledCheckbox>
          {label
            && (
              <StyledContent>
                {label}
              </StyledContent>
            )}
        </StyledLabel>
      </StyledWrap>
      <FieldValidation message={validationMessage} />
    </div>

  );
};

Checkbox.propTypes = {
  /**
   * The checkbox ID. This is required, as it informs the label and the value of the checkbox.
   */
  id: PropTypes.string.isRequired,
  /**
   * The label for the Checkbox
   */
  label: PropTypes.string,
  /**
   * Defines the icon needed for the checkbox.
   */
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array,
    }),
    PropTypes.string,
  ]),
  /**
   * Defines if the checkbox is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * Defines the checkbox checked state.
   */
  isSelected: PropTypes.bool,
  /**
   * Prefills the checkbox and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Changes the color of the checked state - blue bg, white tick, or white bg, blue tick.
   */
  invertColour: PropTypes.bool,
  /**
   * Called on change with { id, value }.
   */
  handleChange: PropTypes.func,
  /**
   * Called on focus of the checkbox
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the checkbox
   */
  handleBlur: PropTypes.func,
  /**
   * Classes to be applied to the Checkbox component
   */
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  icon: faCheck,
  label: null,
  disabled: false,
  isSelected: false,
  prefillValue: '',
  validationMessage: '',
  invertColour: false,
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
  className: '',
};

export default Checkbox;
