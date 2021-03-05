import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { usePrefill, useId } from '@comparethemarketau/manor-hooks';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';

import {
  StyledCheckbox,
  StyledContent,
  StyledHiddenInput,
  StyledLabel,
  StyledWrap,
  StyledImg,
} from './Checkbox.styles';

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
  id: propsId,
  icon,
  label,
  disabled,
  validationMessage,
  invalid,
  invertColour,
  handleClick,
  handleChange,
  handleFocus,
  handleBlur,
  isSelected,
  prefillValue,
  className,
  variant,
  image,
}) => {
  const [internalValue, setInternalValue] = useState(getInitialValue(isSelected, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, isSelected, isDirty);
  const id = useId(propsId);
  const [isFocused, setIsFocused] = useState(false);

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
      handleChange(id, targValue);
    }
  };

  const focusHandler = () => {
    setIsFocused(true);
    if (handleFocus) {
      handleFocus();
    }
  };

  const blurHandler = () => {
    setIsFocused(false);
    if (handleBlur) {
      handleBlur();
    }
  };

  return (
    <>
      <StyledWrap onClick={variant === 'boxed' && !disabled ? toggleEventHandler : null} isFocused={isFocused} className={className} variant={variant} disabled={disabled}>
        <StyledHiddenInput
          id={id}
          name={id}
          type="checkbox"
          role="checkbox"
          disabled={disabled}
          onClick={handleClick}
          onChange={toggleEventHandler}
          checked={internalValue}
          aria-checked={internalValue}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        <StyledLabel
          disabled={disabled}
          htmlFor={variant !== 'boxed' ? id : null}
          variant={variant}
        >
          <StyledCheckbox
            invertColour={invertColour}
            checked={internalValue}
            isAutofill={isAutofill}
            disabled={disabled}
            invalid={invalid || (validationMessage && validationMessage.length > 0)}
            variant={variant}
          >
            {renderIcon(icon, internalValue)}
          </StyledCheckbox>
          {image
            && (
              <StyledImg src={image} />
            )}
          {label
            && (
              <StyledContent>
                {label}
              </StyledContent>
            )}
        </StyledLabel>
      </StyledWrap>
      <FieldValidation message={validationMessage} />
    </>
  );
};

Checkbox.propTypes = {
  /**
   * Unique identifier for the checkbox.
   */
  id: PropTypes.string,
  /**
   * The label for the Checkbox
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The FontAwesome icon for the checkbox.
   */
  icon: PropTypes.oneOfType([
    PropTypes.object, // eslint-disable-line
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
  prefillValue: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Used to display the invalid state of the component without specifying a validationMessage
   */
  invalid: PropTypes.bool,
  /**
   * Changes the color of the checked state - blue bg, white tick, or white bg, blue tick.
   */
  invertColour: PropTypes.bool,
  /**
   * Called on click
   */
  handleClick: PropTypes.func,
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
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['default', 'boxed']),
  /**
   * Image
   */
  image: PropTypes.string,
};

Checkbox.defaultProps = {
  id: null,
  icon: faCheck,
  label: null,
  disabled: false,
  isSelected: false,
  prefillValue: false,
  validationMessage: '',
  invalid: false,
  invertColour: false,
  handleClick: null,
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
  className: '',
  variant: 'default',
  image: '',
};

export default Checkbox;
