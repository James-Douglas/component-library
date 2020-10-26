import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { usePrefill, useId } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { Label } from '@comparethemarketau/manor-label';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import { SupportingElements } from '@comparethemarketau/manor-supporting-elements';

import {
  StyledAffix, StyledClearIcon, StyledInput, StyledInputClearWrap, StyledInputContainer, StyledInputWrap, StyledWrapper,
} from './Input.styles';

export const renderClearIcon = (value, clearInput, isAutofill, label, disabled, disableClearIcon, expressive, breakpoint) => {
  if (value && value.length && !disableClearIcon) {
    return (
      <StyledClearIcon
        isAutofill={isAutofill}
        disabled={disabled}
        type="button"
        onClick={clearInput}
        className={`
          input-clear-button
        `}
        breakpoint={breakpoint}
        expressive={expressive}
      >
        <Typography variant="srOnly">Clears the{label}{' '}field.</Typography>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" />
      </StyledClearIcon>
    );
  }
  return null;
};

export const renderAffix = (affixType, affixContent, isAutofill, disabled, affixClick, prefixBlock, expressive, breakpoint, ariaDescribedById) => {
  if (affixType && affixContent) {
    return (
      <StyledAffix
        affixType={affixType}
        isAutofill={isAutofill}
        disabled={disabled}
        onClick={affixClick}
        prefixBlock={affixType === 'prefix' && prefixBlock}
        expressive={expressive}
        breakpoint={breakpoint}
        id={ariaDescribedById}
      >
        {affixContent}
      </StyledAffix>
    );
  }
  return null;
};

export const getInitialValue = (value, prefillValue) => value || prefillValue || '';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({
  id: propsId,
  label,
  ariaLabelledBy,
  ariaDescribedBy,
  inFieldLabel,
  tooltip,
  validationMessage,
  type,
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
  handleKeyDown,
  mask,
  guide,
  dataList,
  handleOnClick,
  className,
  disableClearIcon,
  expressive,
  bordered,
  removeGutters,
  disableFocusStyles,
  style,
}, ref) => {
  const id = useId(propsId);
  const [ariaLabelledByIds, setAriaLabelledByIds] = useState({});
  const [ariaDescribedByIds, setAriaDescribedByIds] = useState({});
  const [internalValue, setInternalValue] = useState(getInitialValue(value, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const [isFocusActive, setFocusActive] = useState(false);
  const { breakpoint } = useContext(ManorContext);
  const localRef = ref || useRef(null);
  const [tooltipOptions, setTooltipOptions] = useState(tooltip);

  useEffect(() => {
    const describedBy = {};
    const labelledBy = {
      label: `${id}-label`,
    };
    if (prefixContent) {
      describedBy.prefix = `${id}-prefix`;
    }
    if (suffixContent) {
      describedBy.suffix = `${id}-suffix`;
    }
    if (tooltip) {
      const tooltipId = `${id}-tooltip`;
      setTooltipOptions({ ...tooltip, id: tooltipId });
      describedBy.tooltip = tooltipId;
    }
    setAriaDescribedByIds({ ...describedBy });
    setAriaLabelledByIds({ ...labelledBy });
  }, [tooltip, setTooltipOptions, setAriaDescribedByIds, id, setAriaLabelledByIds, prefixContent, suffixContent]);

  const clearInput = () => {
    setIsDirty(true);
    setInternalValue('');
    handleChange('');
  };

  const changeHandler = (e) => {
    setIsDirty(true);
    setInternalValue(e.target.value);
    handleChange(e.target.value);
  };

  useEffect(() => {
    let valueToUse = '';
    if (value && value.length) {
      valueToUse = value;
    } else if (prefillValue && prefillValue.length) {
      valueToUse = prefillValue;
    }
    setInternalValue(valueToUse);
  }, [prefillValue, value]);

  const focusHandler = () => {
    if (handleFocus) {
      handleFocus();
    }
    setFocusActive(true);
  };

  const blurHandler = () => {
    if (handleBlur) {
      handleBlur();
    }
    setFocusActive(false);
  };

  const keyDownHandler = (e) => {
    if (handleKeyDown) {
      handleKeyDown(e);
    }
  };

  const affixClick = () => {
    localRef.current.inputElement.focus();
  };

  return (
    <StyledWrapper className="input-wrap" inputValue={internalValue} inFieldLabel={inFieldLabel} breakpoint={breakpoint} removeGutters={removeGutters}>
      {!expressive
        && <Label htmlFor={id} text={label} id={ariaLabelledByIds.label} tooltip={tooltipOptions} removeGutters={removeGutters} />}
      <StyledInputContainer className="input-container">
        <StyledInputWrap
          isAutofill={isAutofill}
          disabled={disabled}
          invalid={validationMessage && validationMessage.length > 0}
          isFocusActive={isFocusActive}
          expressive={expressive}
          inputValue={internalValue}
          bordered={bordered}
          disableFocusStyles={disableFocusStyles}
        >
          {renderAffix('prefix', prefixContent, isAutofill, disabled, affixClick, prefixBlock, expressive, breakpoint, ariaDescribedByIds.prefix)}
          <StyledInputClearWrap className="input-clear-wrap" expressive={expressive} inputValue={internalValue} breakpoint={breakpoint}>
            {expressive
              && <Label htmlFor={id} text={label} removeGutters={removeGutters} inFieldLabel={inFieldLabel} prefixContent={prefixContent} breakpoint={breakpoint} />}
            <StyledInput
              mask={mask}
              guide={guide}
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readonly}
              value={internalValue}
              aria-labelledby={[...ariaLabelledBy, Object.entries(ariaLabelledByIds).map(([_, ariaLabelledById]) => ariaLabelledById)].join(',')}
              aria-describedby={[...ariaDescribedBy, Object.entries(ariaDescribedByIds).map(([_, ariaDescribedById]) => ariaDescribedById)].join(',')}
              onChange={changeHandler}
              autoComplete={autocomplete}
              onClick={handleOnClick}
              onFocus={focusHandler}
              onBlur={blurHandler}
              onKeyDown={keyDownHandler}
              maxLength={maxlength}
              isAutofill={isAutofill}
              ref={localRef}
              className={`input-default ${className}`}
              expressive={expressive}
              breakpoint={breakpoint}
              style={style}
            />
            {renderClearIcon(internalValue, clearInput, isAutofill, label, disabled, disableClearIcon, expressive, breakpoint)}
          </StyledInputClearWrap>
          {renderAffix('suffix', suffixContent, isAutofill, disabled, affixClick, prefixBlock, expressive, breakpoint, ariaDescribedByIds.suffix)}
        </StyledInputWrap>
        <SupportingElements required={required} disabled={disabled} label={label} validationMessage={validationMessage} />
      </StyledInputContainer>
      {dataList && <div>{dataList()}</div>}
      <FieldValidation message={validationMessage} />
    </StyledWrapper>
  );
});

Input.propTypes = {
  /**
   * Unique identifier for the Input
   */
  id: PropTypes.string,
  /**
   * Custom handler to attach to the input field - used to get the value of the field for example.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * Space separated List of ids of elements used to label the component ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute )
   */
  ariaLabelledBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Space separated List of ids of elements used to describe the component (tooltips etc) ( see this link for usage info https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute )
   */
  ariaDescribedBy: PropTypes.arrayOf(PropTypes.string),
  /**
   * Places the label within the field (used in expressive inputs)
   */
  inFieldLabel: PropTypes.bool,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
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
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Prefills the input and applies browser autocomplete styles
   */
  prefillValue: PropTypes.string,
  /**
   * Type of input (such as number, text, tel etc).
   */
  type: PropTypes.string,
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
   * Specifies that an input should be read-only.
   */
  readonly: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Turn the browsers implementation of autocompletion/memory of forms on or off.
   */
  autocomplete: PropTypes.string,
  /**
   * Function called when the input gains focus
   */
  handleFocus: PropTypes.func,
  /**
   * Function called when input loses focus
   */
  handleBlur: PropTypes.func,
  /**
   * Function called when the input is clicked
   */
  handleOnClick: PropTypes.func,
  /**
   * Function called when keydown is pressed
   */
  handleKeyDown: PropTypes.func,
  /**
   * Content to be displayed as a prefix for the input
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Display the Block style prefix (grey background)
   */
  prefixBlock: PropTypes.bool,
  /**
   * Content to be displayed as  suffix for the input
   */
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Used for the combo component, this is the list of options that is displayed on input.
   */
  dataList: PropTypes.func,
  /**
   * Classes to be applied to the Input component
   */
  className: PropTypes.string,
  /**
   * Disables the clear icon when true
   */
  disableClearIcon: PropTypes.bool,
  /**
   * Adds the 'expressive input' styling, used in conjuction with the 'infield label' prop
   */
  expressive: PropTypes.bool,
  /**
   * Turn the border on or off
   */
  bordered: PropTypes.bool,
  /**
   * Turn margins (top and bottom) on or off
   */
  removeGutters: PropTypes.bool,
  /**
   * Turn off the focus border (used for combo tags)
   */
  disableFocusStyles: PropTypes.bool,
  /**
   * Extra styles for the input
   */
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
};

Input.defaultProps = {
  id: null,
  label: '',
  inFieldLabel: false,
  tooltip: {},
  ariaLabelledBy: [],
  ariaDescribedBy: [],
  // there is a bug in text-mask where disabling the mask (setting to false) causes the input value to not
  // reset when the clear icon is clicked (PR:https://github.com/text-mask/text-mask/pull/831)
  mask: (value) => Array(value.length).fill(/./),
  guide: false,
  maxlength: null,
  type: 'text',
  placeholder: '',
  value: '',
  prefillValue: '',
  prefixContent: '',
  prefixBlock: false,
  suffixContent: '',
  autocomplete: 'off',
  handleFocus: null,
  handleBlur: null,
  handleKeyDown: null,
  required: true,
  disabled: false,
  readonly: false,
  validationMessage: '',
  dataList: null,
  handleOnClick: null,
  className: '',
  disableClearIcon: false,
  expressive: false,
  bordered: true,
  removeGutters: false,
  disableFocusStyles: false,
  style: {},
};

export default Input;
