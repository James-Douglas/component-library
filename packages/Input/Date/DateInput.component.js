import React from 'react';
import PropTypes from 'prop-types';
import { faCalendarAlt } from '@fortawesome/pro-regular-svg-icons';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import Input from '../Input.component';

import StyledFontAwesomeIcon from './DateInput.styles';

const DateInput = ({
  id: propsId,
  label,
  value,
  prefillValue,
  handleChange,
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
  format,
  theme,
}) => {
  const id = useId(propsId);
  const mask = format.split('').map((x) => (x === '/' ? x : /\d/));
  return (
    <ManorProvider theme={theme}>
      <Input
        id={id}
        label={label}
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
        validationMessage={validationMessage}
        autocomplete={autocomplete}
        tooltip={tooltip}
        className={className}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        disableClearIcon={disableClearIcon}
      />
    </ManorProvider>
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
  format: PropTypes.oneOfType([
    'DD/MM/YYYY',
    'DD/MM/YY',
    'MM/YYYY',
    'MM/YY',
    'YYYY',
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

DateInput.defaultProps = {
  id: null,
  value: '',
  tooltip: {},
  validationMessage: null,
  prefillValue: null,
  autocomplete: 'off',
  required: true,
  disabled: false,
  label: '',
  className: '',
  handleFocus: null,
  handleBlur: null,
  prefixContent: <StyledFontAwesomeIcon icon={faCalendarAlt} />,
  suffixContent: '',
  disableClearIcon: false,
  format: 'DD/MM/YYYY',
  theme: undefined,
};

export default DateInput;
