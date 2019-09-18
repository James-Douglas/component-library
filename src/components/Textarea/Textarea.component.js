import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.css';

class ManorTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
    this.isDirty = false;
    this.charsExceed = false;
    if (props.maxLength || props.maxChars) {
      this.charLimit = props.maxChars ? props.maxChars : props.maxLength;
      this.textareaRemainChars = props.value ? this.charLimit - props.value.length : this.charLimit;
    }
  }

  handleChange(event) {
    this.isDirty = true;

    const {
      maxChars,
      maxLength,
    } = this.props;

    if (maxLength || maxChars) {
      this.charLimit = maxChars || maxLength;

      /* eslint-disable-next-line max-len */
      this.textareaRemainChars = event.target.value ? this.charLimit - event.target.value.length : this.charLimit;

      if (this.textareaRemainChars < 0) {
        event.target.setCustomValidity('Maximum Characters exceeded');
        this.charsExceed = true;
      } else {
        if (this.charsExceed) {
          event.target.setCustomValidity('');
        }
        this.charsExceed = false;
      }
    }

    this.setState({ value: event.target.value });
  }

  render() {
    let optionalField;
    let maxlengthIndicator;
    const { value } = this.state;

    const {
      id,
      name,
      label,
      placeholder,
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
    } = this.props;

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
        <span id={`${id}-maxlength-indicator`} className={`manor-maxlength-indicator manor-subscript ${this.textareaRemainChars < 0 ? `${styles['max-chars-exceeded']}` : ''} `}>
          <span className="sr-only">
            {`${this.textareaRemainChars && this.textareaRemainChars < 0 ? ' Exceeded character limit' : ' Remaining allowed characters'} for the ${label} field `}
          </span>
          {this.textareaRemainChars}
        </span>
      );
    }

    return (
      <>
        <div className={`${styles['manor-textarea-wrapper']} ${disabled ? `${styles.disabled}` : ''} ${hidden ? `${styles.hidden}` : ''} ${!bordered ? `${styles['borderless-field']}` : ''} `}>
          <label htmlFor={id}>

            {label && label.length > 0
              && <div className={`manor-textarea-label ${styles['label-default']} manor-body1 manor-spacing-label-to-field ${disabled && bordered ? `${styles['manor-bordered-field-disabled-label']}` : ''} `}>{`${label}`}</div>}

            <div className={`${styles['pull-tab']} ${(autofill && !this.isDirty) ? `${styles['manor-prefilled']}` : ''} ${disabled ? `${styles['manor-disabled']}` : ''} `} />

            <textarea
              value={value}
              onChange={this.handleChange}
              id={id}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              rows={rows}
              wrap={wrap}
              readOnly={readonly}
              maxLength={maxLength}
              className={`${styles['manor-textarea-default']} manor-body2 ${bordered ? `${styles['manor-textarea-border']}` : ''}  ${(autofill && !this.isDirty) ? `${styles['manor-prefilled']}` : ''}  ${invalid || (this.textareaRemainChars < 0) ? `${styles.invalid}` : ''} `}
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
  }
}

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
