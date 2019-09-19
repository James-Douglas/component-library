import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

const ManorTextarea = ({
  id,
  name,
  label,
  placeholder,
  value,
  bordered,
  disabled,
  required,
  invalid,
  autofill,
  hidden,
  rows,
  wrap,
  readonly,
  maxChars,
  maxLength,
}) => {
  let isDirty = false;
  let charsExceed = false;
  let charLimit;
  let textareaRemainChars;
  let optionalField;
  let maxlengthIndicator;


  if (maxLength || maxChars) {
    charLimit = maxChars || maxLength;
    textareaRemainChars = value ? charLimit - value.length : charLimit;
  }

  const [stateValue, setStateValue] = useState(value);

  const handleChange = (event) => {
    isDirty = true;
    console.log("hello");
    if (maxLength || maxChars) {
      charLimit = maxChars || maxLength;
      textareaRemainChars = event.target.value ? charLimit - event.target.value.length : charLimit;
      console.log(textareaRemainChars);
      if (textareaRemainChars < 0) {
        event.target.setCustomValidity('Maximum Characters exceeded');
        charsExceed = true;
      } else {
        if (charsExceed) {
          event.target.setCustomValidity('');
        }
        charsExceed = false;
      }
      maxlengthIndicator = (
          <span id={`${id}-maxlength-indicator`} className={`manor-maxlength-indicator manor-subscript ${textareaRemainChars < 0 ? `${styles['max-chars-exceeded']}` : ''} `}>
        <span className="sr-only">
          {`${textareaRemainChars && textareaRemainChars < 0 ? ' Exceeded character limit' : ' Remaining allowed characters'} for the ${label} field `}
        </span>
            {textareaRemainChars}
      </span>
      );
    }
    console.log("hello there");
    setStateValue(event.target.value);
  };

  if (!required) {
    optionalField = (
      <span className={`${styles['manor-optional-indicator']} manor-subscript`} id={`${id}-optional-indicator`}>
        <span className="sr-only">
          {`The ${label} field is `}
        </span>
        Optional
      </span>
    );
  }

  if (maxLength || maxChars) {
    maxlengthIndicator = (
      <span id={`${id}-maxlength-indicator`} className={`manor-maxlength-indicator manor-subscript ${textareaRemainChars < 0 ? `${styles['max-chars-exceeded']}` : ''} `}>
        <span className="sr-only">
          {`${textareaRemainChars && textareaRemainChars < 0 ? ' Exceeded character limit' : ' Remaining allowed characters'} for the ${label} field `}
        </span>
        {textareaRemainChars}
      </span>
    );
  }

  return (
    <>
      <div className={`${styles['manor-textarea-wrapper']} ${disabled ? `${styles.disabled}` : ''} ${hidden ? `${styles.hidden}` : ''} ${!bordered ? `${styles['borderless-field']}` : ''} `}>
        <label htmlFor={id}>

          {label.length > 0
            && <div className={`manor-textarea-label ${styles['label-default']} manor-body1 manor-spacing-label-to-field ${disabled && bordered ? `${styles['manor-bordered-field-disabled-label']}` : ''} `}>{`${label}`}</div>}

          <div className={`${styles['pull-tab']} ${(autofill && !isDirty) ? `${styles['manor-prefilled']}` : ''} ${disabled ? `${styles['manor-disabled']}` : ''} `} />

          <textarea
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
            className={`${styles['manor-textarea-default']} manor-body2 ${bordered ? `${styles['manor-textarea-border']}` : ''}  ${(autofill && !isDirty) ? `${styles['manor-prefilled']}` : ''}  ${invalid || (textareaRemainChars < 0) ? `${styles.invalid}` : ''} `}
            aria-describedby={`${!required ? `${id}-optional-indicator` : ''} ${maxLength || maxChars ? `${id}-maxlength-indicator` : ''}  `}
          />
        </label>

        <div className={`${styles['supporting-elements']}`}>
          {maxlengthIndicator}
          {' '}
          {optionalField}
        </div>

      </div>
    </>
  );
};

ManorTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  invalid: PropTypes.bool,
  autofill: PropTypes.bool,
  hidden: PropTypes.bool,
  rows: PropTypes.string,
  wrap: PropTypes.string,
  readonly: PropTypes.bool,
  maxChars: PropTypes.string,
  maxLength: PropTypes.string,
};

ManorTextarea.defaultProps = {
  name: '',
  value: '',
  label: '',
  placeholder: '',
  bordered: false,
  disabled: false,
  required: false,
  invalid: false,
  autofill: false,
  hidden: false,
  rows: '',
  wrap: '',
  readonly: false,
  maxLength: '',
  maxChars: '',
};

export default ManorTextarea;
