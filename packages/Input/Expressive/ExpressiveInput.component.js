import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import Input from '../Input.component';

const ExpressiveInput = ({
  id: propsId,
  label,
  validationMessage,
  type,
  placeholder,
  value,
  prefillValue,
  required,
  disabled,
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
  theme,
}) => {
  const id = useId(propsId);
  return (
    <Input
      id={id}
      label={label}
      inFieldLabel
      expressive
      type={type}
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
      validationMessage={validationMessage}
      autocomplete={autocomplete}
      className={className}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      mask={mask}
      guide={guide}
      disableClearIcon={disableClearIcon}
      theme={theme}
    />
  );
};

ExpressiveInput.propTypes = {
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
  label: PropTypes.string,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Prefills the input and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * Type of input (such as number, text, tel etc).
   */
  type: PropTypes.string,
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
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
  value: null,
  validationMessage: '',
  prefillValue: '',
  placeholder: '',
  autocomplete: 'off',
  prefixContent: '',
  prefixBlock: false,
  suffixContent: '',
  required: true,
  disabled: false,
  disableClearIcon: false,
  className: '',
  handleFocus: null,
  handleBlur: null,
  theme: undefined,
};

export default ExpressiveInput;
