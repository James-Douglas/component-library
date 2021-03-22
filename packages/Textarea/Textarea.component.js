import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { usePrefill, useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { Label } from '@comparethemarketau/manor-label';
import { SupportingElements } from '@comparethemarketau/manor-supporting-elements';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import { Typography } from '@comparethemarketau/manor-typography';
import {
  StyledmaxlengthIndicator,
  StyledTextAreaWrapper,
  StyledTextArea,
} from './Textarea.styles';

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
        <Typography variant="srOnly">
          {`${textAreaRemainChars && textAreaRemainChars < 0 ? ' Exceeded character limit' : ' Remaining allowed characters'} for the ${label} field `}
        </Typography>
        <Typography variant="caption">{textAreaRemainChars}</Typography>
      </StyledmaxlengthIndicator>
    );
  }
  return null;
}

const Textarea = ({
  label,
  tooltip,
  validationMessage,
  id: propsId,
  name,
  placeholder,
  value,
  prefillValue,
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
  gtmPidAnonymous,
  className,
}) => {
  const id = useId(propsId);
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const [charsExceed, setCharsExceed] = useState(false);
  const [charLimit, setCharLimit] = useState(null);
  const [stateValue, setStateValue] = useState(getInitialValue(value, prefillValue));
  const [textAreaRemainChars, setTextAreaRemainChars] = useState(charLimit);
  const textAreaElement = useRef(null);
  const gtmPidAnonymousClass = gtmPidAnonymous ? 'data-hj-suppress' : null;

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
      handleChange(event.target.value);
    }
  };

  let validationMessageToDisplay = validationMessage;

  if (charsExceed && !validationMessage) {
    validationMessageToDisplay = 'Maximum characters exceeded';
  }

  const validation = validationMessageToDisplay && validationMessageToDisplay.length;
  return (
    <>
      <Label htmlFor={id} text={label} tooltip={tooltip} />
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
          aria-describedby={`${!required ? `${id}-optional-indicator` : ''} ${maxLength || maxChars ? `${id}-maxlength-indicator` : ''}  `}
          className={gtmPidAnonymousClass}
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
   * Unique identifier for the Textarea
   */
  id: PropTypes.string,
  /**
   * Label for the Textarea.
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
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
  /**
   * Used to indicate if a field contains personally identifying data which needs to remain anonymous from google analytics
  */
  gtmPidAnonymous: PropTypes.bool,
};

Textarea.defaultProps = {
  id: null,
  label: '',
  tooltip: {},
  validationMessage: null,
  name: '',
  value: '',
  placeholder: '',
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
  gtmPidAnonymous: false,
};

export default Textarea;
