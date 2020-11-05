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
  invertColour,
  handleClick,
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
  const id = useId(propsId);

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

  return (
    <>
      <StyledWrap className={className}>
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
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <StyledLabel
          disabled={disabled}
          htmlFor={id}
        >
          <StyledCheckbox
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
   * Defines the icon needed for the checkbox.
   */
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      prefix: PropTypes.string,
      iconName: PropTypes.string,
      icon: PropTypes.array, // eslint-disable-line
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
  prefillValue: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
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
};

Checkbox.defaultProps = {
  id: null,
  icon: faCheck,
  label: null,
  disabled: false,
  isSelected: false,
  prefillValue: false,
  validationMessage: '',
  invertColour: false,
  handleClick: null,
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
  className: '',
};

export default Checkbox;
