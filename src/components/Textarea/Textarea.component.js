import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Fieldset from '../Fieldset/Fieldset.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';

import styles from './styles';

export function getRemainingLimit(value, charLimit) {
  return value ? charLimit - value.length : charLimit;
}

export function getOptionalFieldContent(required, id, label) {
  if (!required) {
    return (
      <span className="manor-optional-indicator manor-subscript" id={`${id}-optional-indicator`}>
        <style jsx>{styles}</style>
        <span className="sr-only">
          {`The ${label} field is `}
        </span>
          Optional
      </span>
    );
  }
  return null;
}

export function getRemainingCharsContent(maxChars, maxLength, id, textAreaRemainChars, label) {
  if (maxChars || maxLength) {
    return (
      <span id={`${id}-maxlength-indicator`} className={`manor-maxlength-indicator manor-subscript ${textAreaRemainChars < 0 ? 'max-chars-exceeded' : ''} `}>
        <style jsx>{styles}</style>
        <span className="sr-only">
          {`${textAreaRemainChars && textAreaRemainChars < 0 ? ' Exceeded character limit' : ' Remaining allowed characters'} for the ${label} field `}
        </span>
        {textAreaRemainChars}
      </span>
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
  invalid,
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

  const supportingElements = (
    <div className="supporting-elements">
      <style jsx>{styles}</style>
      {getRemainingCharsContent(maxChars, maxLength, id, textAreaRemainChars, label)}
      {getOptionalFieldContent(required, id, label)}
    </div>
  );

  const prefillStyles = isPrefill && !isDirty && !disabled ? 'manor-prefilled' : '';

  return (
    <Fieldset
      label={label}
      tooltip={tooltip}
      forceFullWidth={forceFullWidth}
      validationMessage={validationMessageToDisplay}
      supportingElements={supportingElements}
    >
      <div className={`manor-textarea-wrapper ${prefillStyles} ${disabled ? 'disabled' : ''} ${!bordered ? 'borderless-field' : ''} `}>
        <style jsx>{styles}</style>
        <div className={`pull-tab ${prefillStyles} ${disabled ? 'manor-disabled' : ''} `} />

        <textarea
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
          className={`
            manor-textarea-default manor-body2 
            ${bordered ? 'manor-textarea-border' : ''} 
            ${prefillStyles} 
            ${invalid || (textAreaRemainChars < 0) ? 'invalid' : ''}
          `}
          aria-describedby={`${!required ? `${id}-optional-indicator` : ''} ${maxLength || maxChars ? `${id}-maxlength-indicator` : ''}  `}
        />

      </div>
    </Fieldset>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  forceFullWidth: PropTypes.bool,
  validationMessage: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  isPrefill: PropTypes.bool,
  rows: PropTypes.string,
  wrap: PropTypes.string,
  readonly: PropTypes.bool,
  maxChars: PropTypes.string,
  maxLength: PropTypes.string,
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
  bordered: false,
  disabled: false,
  required: false,
  invalid: false,
  isPrefill: false,
  rows: '',
  wrap: '',
  readonly: false,
  maxLength: '',
  maxChars: '',
  onChange: null,
};

export default Textarea;
