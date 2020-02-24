import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import SupportingElements from '../SupportingElements/SupportingElements';
import FieldValidation from '../FieldValidation/FieldValidation.component';
import usePrefill from '../../hooks/usePrefill';

const StyledmaxlengthIndicator = styled.span`
  margin-right: 0.4rem;
`;

const StyledTextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  display: block;
  padding: 1.6rem;
  border: ${({ theme }) => theme.borders.transparent};
  min-height: ${({ theme }) => theme.spacing[44]};
  font-size: ${({ theme }) => theme.fontSize.base};

  &::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })}
  }

  ${({ bordered, theme }) => bordered && css`
    border: ${theme.borders.component};
  `}
  ${({ theme, isAutofill, disabled }) => isAutofill && !disabled && css`
    background: ${theme.colors.prechecked};
  `}
  ${({
    theme, bordered, isAutofill, disabled,
  }) => (bordered && isAutofill && !disabled) && css`
    border: ${theme.borders.prefill};
  `}

  ${({ validation, textAreaRemainChars, theme }) => (validation || textAreaRemainChars < 0) && css`
    border: ${theme.borders.invalid};
  `}

  &:focus,
  &:hover {
    border: ${({ theme }) => theme.borders.hover};
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
  `}
`;

export const getInitialValue = (value, prefillValue) => value || prefillValue || '';

export function getRemainingLimit(value, charLimit) {
  return value ? charLimit - value.length : charLimit;
}

export function getRemainingCharsContent(maxChars, maxLength, id, textAreaRemainChars, label) {
  if (maxChars || maxLength) {
    return (
      <StyledmaxlengthIndicator
        id={`${id}-maxlength-indicator`}
        textAreaRemainChars={textAreaRemainChars}
        className={`manor-maxlength-indicator subscript ${textAreaRemainChars < 0 ? 'max-chars-exceeded' : ''} `}
      >
        <span className="sr-only">
          {`${textAreaRemainChars && textAreaRemainChars < 0 ? ' Exceeded character limit' : ' Remaining allowed characters'} for the ${label} field `}
        </span>
        {textAreaRemainChars}
      </StyledmaxlengthIndicator>
    );
  }
  return null;
}

const Textarea = ({
  label,
  tooltip,
  validationMessage,
  id,
  name,
  placeholder,
  value,
  prefillValue,
  bordered,
  disabled,
  required,
  rows,
  wrap,
  readonly,
  maxChars,
  maxLength,
  handleChange,
  handleFocus,
  handleBlur,
  className,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const [charsExceed, setCharsExceed] = useState(false);
  const [charLimit, setCharLimit] = useState(null);
  const [stateValue, setStateValue] = useState(getInitialValue(value, prefillValue));
  const [textAreaRemainChars, setTextAreaRemainChars] = useState(charLimit);
  const textAreaElement = useRef(null);

  useEffect(() => {
    let valueToUse = '';
    if (value && value.length) {
      valueToUse = value;
    } else if (prefillValue && prefillValue.length) {
      valueToUse = prefillValue;
    }
    setStateValue(valueToUse);
  }, [prefillValue, value]);

  useEffect(() => {
    setCharLimit(maxChars || maxLength || null);
  }, [maxLength, maxChars]);

  useEffect(() => {
    if (maxLength || maxChars) {
      setTextAreaRemainChars(getRemainingLimit(stateValue, charLimit));
    }
  }, [maxLength, maxChars, stateValue, charLimit]);

  useEffect(() => {
    setCharsExceed(textAreaRemainChars < 0);
  }, [textAreaRemainChars]);

  useEffect(() => {
    textAreaElement.current.setCustomValidity(charsExceed ? 'Maximum characters exceeded' : '');
  }, [charsExceed]);

  const changeHandler = (event) => {
    event.preventDefault();
    setIsDirty(true);
    setStateValue(event.target.value);
    if (handleChange) {
      handleChange({ id, stateValue });
    }
  };

  let validationMessageToDisplay = validationMessage;

  if (charsExceed && !validationMessage) {
    validationMessageToDisplay = 'Maximum characters exceeded';
  }

  const validation = validationMessageToDisplay && validationMessageToDisplay.length;

  return (
    <>
      <Label forId={id} text={label} tooltip={tooltip} />
      <StyledTextAreaWrapper className={`textarea-wrapper ${className}`}>
        <StyledTextArea
          isAutofill={isAutofill}
          ref={textAreaElement}
          value={stateValue}
          onChange={changeHandler}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={id}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          wrap={wrap}
          readOnly={readonly}
          maxLength={maxLength}
          isDirty={isDirty}
          validation={validation}
          textAreaRemainChars={textAreaRemainChars}
          bordered={bordered}
          aria-describedby={`${!required ? `${id}-optional-indicator` : ''} ${maxLength || maxChars ? `${id}-maxlength-indicator` : ''}  `}
        />
        <SupportingElements
          validationMessage={validationMessage}
          label={label}
          required={required}
          disabled={disabled}
          additionalContent={getRemainingCharsContent(maxChars, maxLength, id, textAreaRemainChars, label)}
        />
        <FieldValidation message={validationMessage} />
      </StyledTextAreaWrapper>
    </>
  );
};

Textarea.propTypes = {
  /**
   * Unique id for the component. Required for the label to match the input.
   */
  id: PropTypes.string.isRequired,
  /**
   * Label for the Textarea.
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Defines a name for the texarea list
   */
  name: PropTypes.string,
  /**
   * Defines the current value of the textarea field.
   */
  value: PropTypes.string,
  /**
   * Prefills the textarea and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * The placeholder text for the input.
   */
  placeholder: PropTypes.string,
  /**
   * The input field border style.
   */
  bordered: PropTypes.bool,
  /**
   * Disables the button via a class on its wrapper, and an attribute on the input.
   */
  disabled: PropTypes.bool,
  /**
   * Adds/removes a supporting element, `<sup>OPTIONAL</sup>` to show the field is optional.
   */
  required: PropTypes.bool,
  /**
   * Specifies the height of the textarea (in lines).
   */
  rows: PropTypes.string,
  /**
   * Specifies how the text in a textarea is to be wrapped when submitted in a form.
   * `hard` - specifies that the Text present in the textarea will not be wrapped after submitting the form.
   * `soft` - specifies that the Text in a textarea is wraps when submitting the form.
   */
  wrap: PropTypes.oneOf(['hard', 'soft']),
  /**
   * Specifies that a textarea should be read-only.
   */
  readonly: PropTypes.bool,
  /**
   * Specifies the maximum number of characters allowed in the text area.
   -  Note that the maxlength attribute physically limits users from adding more that the specified limit, this
   means that if a user pastes 1000 chars into a text area that is limited to 500 chars then half of the
   pasted text would be truncated without giving the user any useful feedback. *Use maxchars instead*
   */
  maxChars: PropTypes.string,
  /**
   * Specifies the maximum number of characters allowed in the text area - while providing useful feedback if the
   limit is exceeded
   */
  maxLength: PropTypes.string,
  /**
   * Called when the value of the text area changes. Function will be called with an object consisting of id and value of the text area.
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
   * Classes to be applied to the Textarea component
   */
  className: PropTypes.string,
};

Textarea.defaultProps = {
  label: '',
  tooltip: {},
  validationMessage: null,
  name: '',
  value: '',
  placeholder: '',
  bordered: true,
  disabled: false,
  required: false,
  prefillValue: '',
  rows: '',
  wrap: 'soft',
  readonly: false,
  maxLength: '',
  maxChars: '',
  handleChange: null,
  handleFocus: null,
  handleBlur: null,
  className: '',
};

export default Textarea;
