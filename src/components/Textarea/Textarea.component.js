import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import { hasTooltipContent, getScreenReaderLabel } from 'utils/form';
import { InlineTooltip, tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Row from '../Grid/Row/Row.component';
import Label from '../Label/Label.component';
import Column from '../Grid/Column/Column.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import SupportingElements from '../SupportingElements/SupportingElements';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledRow = styled(Row)`
  margin-bottom: ${({ theme }) => theme.spacing[16]};
`;

const StyledOptionalIndicator = styled.span`
  margin-left: 1rem;
`;

const StyledmaxlengthIndicator = styled.span`
  margin-right: 0.4rem;
`;

const StyledTextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  display: block;
  padding: 1.6rem;
  border: ${({ theme }) => theme.borders.transparent};
  min-height: ${({ theme }) => theme.spacing[44]};
  font-size: ${({ theme }) => theme.fontSize.base};
  ::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })}
  }
  ${({ bordered, theme }) => bordered && css`
    border: ${theme.borders.component};
  `}
  ${({
    isPrefill, isDirty, disabled, theme,
  }) => (isPrefill && !isDirty && !disabled) && css`
    background: ${theme.colors.prechecked};
    border: ${theme.borders.prefill};
  `}
  ${({ validation, textAreaRemainChars, theme }) => (validation || textAreaRemainChars < 0) && css`
    border: ${theme.borders.invalid};
  `}
  :focus,
  :hover {
    border: ${({ theme }) => theme.borders.hover};
  }
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
  `}
`;

export function getRemainingLimit(value, charLimit) {
  return value ? charLimit - value.length : charLimit;
}

export function getOptionalFieldContent(required, id, label) {
  if (!required) {
    return (
      <StyledOptionalIndicator className="subscript" id={`${id}-optional-indicator`}>
        <span className="sr-only">
          {`The ${label} field is `}
        </span>
          Optional
      </StyledOptionalIndicator>
    );
  }
  return null;
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
  forceFullWidth,
  validationMessage,
  id,
  name,
  placeholder,
  value,
  bordered,
  disabled,
  required,
  isPrefill,
  rows,
  wrap,
  readonly,
  maxChars,
  maxLength,
  onChange,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const [charsExceed, setCharsExceed] = useState(false);
  const [charLimit, setCharLimit] = useState(null);
  const [stateValue, setStateValue] = useState(value);
  const [textAreaRemainChars, setTextAreaRemainChars] = useState(charLimit);
  const textAreaElement = useRef(null);
  const desktop = useIsDesktop(false);

  useEffect(() => {
    setStateValue(value);
  }, [value]);

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

  const handleChange = (event) => {
    event.preventDefault();
    setIsDirty(true);
    setStateValue(event.target.value);
  };

  useEffect(() => {
    if (onChange) {
      onChange({ id, stateValue });
    }
  }, [onChange, id, stateValue]);

  let validationMessageToDisplay = validationMessage;

  if (charsExceed && !validationMessage) {
    validationMessageToDisplay = 'Maximum characters exceeded';
  }

  const prefillStyles = isPrefill && !isDirty && !disabled ? 'manor-prefilled' : '';
  const validation = validationMessageToDisplay && validationMessageToDisplay.length;

  return (
    <ThemeProvider theme={getTheme()}>
      <>
        <Label forId={id} text={label} tooltip={tooltip} fullWidth={forceFullWidth} />
        <StyledRow>
          <Column cols={desktop && !forceFullWidth ? '10' : '12'}>
            <StyledTextAreaWrapper className={`manor-textarea-wrapper ${prefillStyles} ${disabled ? 'disabled' : ''} ${!bordered ? 'borderless-field' : ''} `}>
              <StyledTextArea
                ref={textAreaElement}
                value={stateValue}
                onChange={handleChange}
                id={id}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                rows={rows}
                wrap={wrap}
                readOnly={readonly}
                maxLength={maxLength}
                isPrefill={isPrefill}
                isDirty={isDirty}
                validation={validation}
                textAreaRemainChars={textAreaRemainChars}
                bordered={bordered}
                aria-describedby={`${!required ? `${id}-optional-indicator` : ''} ${maxLength || maxChars ? `${id}-maxlength-indicator` : ''}  `}
              />
              <SupportingElements label={label} required={required} additionalContent={getRemainingCharsContent(maxChars, maxLength, id, textAreaRemainChars, label)} />
            </StyledTextAreaWrapper>
            <FieldValidation message={validationMessage} />
          </Column>
          {desktop && hasTooltipContent(tooltip)
          && (
            <Column cols={2}>
              <InlineTooltip
                title={tooltip.title}
                body={tooltip.body}
                screenReaderLabel={getScreenReaderLabel(tooltip.screenReaderLabel, label)}
                justifyEnd={tooltip.justifyEnd}
              />
            </Column>
          )}
        </StyledRow>
      </>
    </ThemeProvider>
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
   * Forces the Textarea to expand to 12 columns
   */
  forceFullWidth: PropTypes.bool,
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
   * Adds custom styling for prefilled elements.
   */
  isPrefill: PropTypes.bool,
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
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  name: '',
  value: '',
  placeholder: '',
  bordered: true,
  disabled: false,
  required: false,
  isPrefill: false,
  rows: '',
  wrap: 'soft',
  readonly: false,
  maxLength: '',
  maxChars: '',
  onChange: null,
};

export default Textarea;
