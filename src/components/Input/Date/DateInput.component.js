import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Input from 'components/Input/Input.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { tooltipPropTypes } from '../../Tooltip/Tooltip.component';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.placeholderText};
`;

const DateInput = ({
  id,
  label,
  value,
  prefillValue,
  handleChange,
  bordered,
  required,
  disabled,
  autocomplete,
  tooltip,
  validationMessage,
  className,
  handleFocus,
  handleBlur,
  prefixContent,
  suffixContent,
  disableClearIcon,
}) => {
  const changeHandler = (val) => {
    const parsedDate = moment(val, 'DD/MM/YYYY', true);
    handleChange(parsedDate);
  };

  return (
    <Input
      id={id}
      label={label}
      value={value}
      type="text"
      handleChange={changeHandler}
      prefixContent={prefixContent}
      suffixContent={suffixContent}
      mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
      guide
      placeholder="DD/MM/YYYY"
      bordered={bordered}
      required={required}
      maxlength={11}
      prefillValue={prefillValue}
      disabled={disabled}
      validationMessage={validationMessage}
      autocomplete={autocomplete}
      tooltip={tooltip}
      className={className}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      disableClearIcon={disableClearIcon}
    />
  );
};

DateInput.propTypes = {
  /**
   * Unique id for the component. Required.
   */
  id: PropTypes.string.isRequired,
  /**
   * Handler to be called on change. This is called with a moment instance that may not be valid, you can check via
   * moment#isValid()
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Called on focus of the checkbox
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the checkbox
   */
  handleBlur: PropTypes.func,
  /**
   * Label for the input
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
   * Prefills the input and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional.
   */
  required: PropTypes.bool,
  /**
   * Disables the button via a class on its wrapper, and an attribute on the input.
   */
  disabled: PropTypes.bool,
  /**
   * The input field border style.
   */
  bordered: PropTypes.bool,
  /**
   * Turn the browsers implementation of autocompletion/memory of forms on or off.
   */
  autocomplete: PropTypes.string,
  /**
   * Classes to be applied to the Currency component
   */
  className: PropTypes.string,
  /**
   * Content to be displayed as a prefix for the input
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Content to be displayed as  suffix for the input
   */
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Props to be applied to cancel close button
   */
  disableClearIcon: PropTypes.bool,
};

DateInput.defaultProps = {
  value: '',
  tooltip: {},
  validationMessage: null,
  prefillValue: null,
  autocomplete: 'off',
  required: true,
  disabled: false,
  bordered: true,
  label: '',
  className: '',
  handleFocus: null,
  handleBlur: null,
  prefixContent: '',
  suffixContent: '',
  disableClearIcon: false,
};

export default DateInput;
