import React from 'react';
import PropTypes from 'prop-types';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import Input from '../Input.component';

import StyledFontAwesomeIcon from './DateInput.styles';

const DateInput = ({
  id: propsId,
  label,
  ariaLabelledBy,
  ariaDescribedBy,
  value,
  prefillValue,
  handleChange,
  required,
  disabled,
  readonly,
  autocomplete,
  tooltip,
  validationMessage,
  className,
  handleFocus,
  handleBlur,
  prefixContent,
  suffixContent,
  disableClearIcon,
  format,
}) => {
  const id = useId(propsId);
  const mask = format.split('').map((x) => (x === '/' ? x : /\d/));
  return (
    <Input
      id={id}
      label={label}
      ariaLabelledBy={ariaLabelledBy}
      ariaDescribedBy={ariaDescribedBy}
      value={value}
      type="text"
      handleChange={handleChange}
      prefixContent={prefixContent}
      suffixContent={suffixContent}
      mask={mask}
      guide
      placeholder={format}
      required={required}
      maxlength={11}
      prefillValue={prefillValue}
      disabled={disabled}
      readonly={readonly}
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
   * Unique id for the Date input
   */
  id: PropTypes.string,
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Array of ids of elements used to label the component ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute )
   */
  ariaLabelledBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Array of ids of elements used to describe the component (tooltips etc) ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute )
   */
  ariaDescribedBy: PropTypes.arrayOf(PropTypes.string),
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
   * Specifies that the date input should be read-only.
   */
  readonly: PropTypes.bool,
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
  /**
   * Format of date string.
   */
  format: PropTypes.oneOf([
    'DD/MM/YYYY',
    'DD/MM/YY',
    'MM/YYYY',
    'MM/YY',
    'YYYY',
  ]),
};

DateInput.defaultProps = {
  id: null,
  value: '',
  tooltip: {},
  ariaLabelledBy: [],
  ariaDescribedBy: [],
  validationMessage: null,
  prefillValue: null,
  autocomplete: 'off',
  required: true,
  disabled: false,
  readonly: false,
  label: '',
  className: '',
  handleFocus: null,
  handleBlur: null,
  prefixContent: <StyledFontAwesomeIcon icon={faCalendarAlt} />,
  suffixContent: '',
  disableClearIcon: false,
  format: 'DD/MM/YYYY',
};

export default DateInput;
