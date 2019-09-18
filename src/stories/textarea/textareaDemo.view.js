import React from 'react';
import PropTypes from 'prop-types';
import ManorTextarea from '../../components/Textarea/Textarea.component';
import styles from './textarea.module.css';

/*
Note: That the Textarea field background color is transparent, the bordered parameter is used
in situations where the field is to be displayed on a grey background, for display purpose
the bordered var is used in this mock to change between a grey or white
background - additional padding added for display purposes also. The developer
will be expected to set bordered accordingly.
*/

const TextareaDemoView = ({
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
}) => (
  <>
    <div className={`${!bordered < 0 ? `${styles['grey-background']}` : ''} `}>
      <div className={`${styles['add-padding-around-field-for-display-purposes']}`}>

        <ManorTextarea
          id={id}
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          bordered={bordered}
          disabled={disabled}
          required={required}
          invalid={invalid}
          autofill={autofill}
          hidden={hidden}
          rows={rows}
          wrap={wrap}
          readonly={readonly}
          maxChars={maxChars}
          maxLength={maxLength}
        />
      </div>
    </div>
    <div className="scrollable w-auto" />
  </>
);

TextareaDemoView.propTypes = {
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

TextareaDemoView.defaultProps = {
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

export default TextareaDemoView;
