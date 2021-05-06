import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import Input from '../Input.component';

const ExpressiveInput = ({
  trackingLabel,
  id: propsId,
  label,
  ariaLabelledBy,
  ariaDescribedBy,
  validationMessage,
  type,
  inputMode,
  placeholder,
  value,
  prefillValue,
  required,
  disabled,
  readonly,
  prefixContent,
  prefixBlock,
  suffixContent,
  autocomplete,
  maxlength,
  handleChange,
  handleFocus,
  handleBlur,
  mask,
  guide,
  className,
  disableClearIcon,
}) => {
  const id = useId(propsId);
  return (
    <Input
      id={id}
      label={label}
      ariaLabelledBy={ariaLabelledBy}
      ariaDescribedBy={ariaDescribedBy}
      inFieldLabel
      expressive
      type={type}
      inputMode={inputMode}
      handleChange={handleChange}
      prefixContent={prefixContent}
      prefixBlock={prefixBlock}
      suffixContent={suffixContent}
      placeholder={placeholder}
      required={required}
      maxlength={maxlength}
      value={value}
      prefillValue={prefillValue}
      disabled={disabled}
      readonly={readonly}
      validationMessage={validationMessage}
      autocomplete={autocomplete}
      className={className}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      mask={mask}
      guide={guide}
      disableClearIcon={disableClearIcon}
      trackingLabel={trackingLabel}
      trackingFieldType="Expressive"
    />
  );
};

ExpressiveInput.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   *  Unique id for the expressive input
   */
  id: PropTypes.string,
  /**
   * Custom handler to attach to the input field - used to get the value of the field for example.
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
   * Type of input (such as number, text, tel etc).
   */
  type: PropTypes.string,
  /**
   * The inputmode for the input
   */
  inputMode: PropTypes.string,
  /**
   * Sets the value of the input
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * The placeholder text for the input.
   */
  placeholder: PropTypes.string,
  /**
   * Adds/removes a supporting element, `<span>OPTIONAL</span>` to show the field is optional.
   */
  required: PropTypes.bool,
  /**
   * Disables the button via a class on its wrapper, and an attribute on the input.
   */
  disabled: PropTypes.bool,
  /**
   * Specifies that the expressive input should be read-only.
   */
  readonly: PropTypes.bool,
  /**
   * Maximum length for the input element
   */
  maxlength: PropTypes.number,
  /**
   * Mask to be applied to the input, see https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
   * Supported input types Please note that Text Mask supports input type of text, tel, url, password, and search.
   * Due to a limitation in browser API, other input types, such as email or number, cannot be supported.
   * However, it is normal to let the user enter an email or a number in an input type text combined the appropriate input mask.
   */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  /**
   * Sets the guide mode
   */
  guide: PropTypes.bool,
  /**
   * Turn the browsers implementation of autocompletion/memory of forms on or off.
   */
  autocomplete: PropTypes.string,
  /**
   * Display the Block style prefix (grey background)
   */
  prefixBlock: PropTypes.bool,
  /**
   * icon to be displayed within the input prefix
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
   * Disables the clear icon when true
   */
  disableClearIcon: PropTypes.bool,
  /**
   * Classes to be applied to the Expressive component
   */
  className: PropTypes.string,
};

ExpressiveInput.defaultProps = {
  id: null,
  label: '',
  maxlength: null,
  // there is a bug in text-mask where disabling the mask (setting to false) causes the input value to not
  // reset when the clear icon is clicked (PR:https://github.com/text-mask/text-mask/pull/831)
  mask: (value) => Array(value.length).fill(/./),
  guide: false,
  type: 'text',
  inputMode: 'text',
  value: null,
  validationMessage: '',
  ariaLabelledBy: [],
  ariaDescribedBy: [],
  prefillValue: '',
  placeholder: '',
  autocomplete: 'off',
  prefixContent: '',
  prefixBlock: false,
  suffixContent: '',
  required: true,
  disabled: false,
  readonly: false,
  disableClearIcon: false,
  className: '',
  handleFocus: null,
  handleBlur: null,
};

export default ExpressiveInput;
