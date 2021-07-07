import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
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
  StyledAffix, StyledClearIcon, StyledInput, StyledMaskInput, StyledInputClearWrap, StyledInputContainer, StyledInputWrap, StyledWrapper,
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
        prefixBlock={prefixBlock}
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

const unwantedSymbols = ['e', 'E', '+', '-'];

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({
  trackingLabel,
  id: propsId,
  label,
  ariaLabelledBy,
  ariaDescribedBy,
  inFieldLabel,
  tooltip,
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
  handleKeyDown,
  handleKeyUp,
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
  gtmPidAnonymous,
  disableInteractionTracking,
  trackingFieldType,
  controlled,
}, ref) => {
  const id = useId(propsId);
  const [ariaLabelledByIds, setAriaLabelledByIds] = useState({});
  const [ariaDescribedByIds, setAriaDescribedByIds] = useState({});
  const [internalValue, setInternalValue] = useState(getInitialValue(value, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const [isFocusActive, setFocusActive] = useState(false);
  const { breakpoint, trackInteraction } = useContext(ManorContext);
  const localRef = ref || useRef(null);
  const [tooltipOptions, setTooltipOptions] = useState(tooltip);
  const gtmPidAnonymousClass = gtmPidAnonymous ? 'data-hj-suppress' : null;

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

  const doTrackEvent = (action, val) => {
    if (!disableInteractionTracking) {
      trackInteraction(action, 'Input', trackingFieldType, trackingLabel, val);
    }
  };

  const debouncedTrack = useDebouncedCallback(
    (newValue) => doTrackEvent('Input', newValue),
    1500,
  );

  const clearInput = () => {
    setIsDirty(true);
    setInternalValue('');
    handleChange('');
    doTrackEvent('Clear', '');
  };

  const changeHandler = (e) => {
    setIsDirty(true);
    const { value: newValue } = e.target;
    handleChange(newValue);
    if (!controlled) setInternalValue(newValue);
    debouncedTrack(newValue);
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

  const focusHandler = (e) => {
    if (handleFocus) {
      handleFocus(e);
    }
    setFocusActive(true);
    doTrackEvent('Focus', internalValue);
  };

  const blurHandler = (e) => {
    if (handleBlur) {
      handleBlur(e);
    }
    setFocusActive(false);
  };

  const keyDownHandler = (e) => {
    // disallow number characters such as "e", "E", "+", "-" if input type is number
    if (type === 'number') {
      unwantedSymbols.includes(e.key) && e.preventDefault();
    }
    if (handleKeyDown) {
      handleKeyDown(e);
    }
  };

  const keyUpHandler = (e) => {
    if (handleKeyUp) {
      handleKeyUp(e);
    }
  };

  const affixClick = () => {
    localRef.current.inputElement.focus();
  };

  // render a masked component if prop is there
  const Component = mask ? StyledMaskInput : StyledInput;

  // throw error if we're using a mask + number type input (check the docs page for more info on this)
  if (Component.displayName === 'Inputstyles__StyledMaskInput' && type === 'number') {
    throw new Error('input type="number" is not supported by masking libraries. Set the mask to false and add your own custom masking with the handleChange function. Check out manor storybook for an example https://services.dev.comparethemarket.cloud/manor/?path=/story/welcome--page');
  }

  // Prevent: Warning: Received `false` for a non-boolean attribute `mask`.
  function getMask() {
    if (mask) {
      return mask;
    }
    return undefined;
  }

  return (
    <StyledWrapper className="input-wrap" inputValue={internalValue} inFieldLabel={inFieldLabel} breakpoint={breakpoint} removeGutters={removeGutters}>
      {!expressive
        && <Label htmlFor={id} text={label} id={ariaLabelledByIds.label} tooltip={tooltipOptions} removeGutters={removeGutters} />}
      <StyledInputContainer className={`input-container${gtmPidAnonymous ? ' data-hj-suppress' : ''}`}>
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
            <Component
              mask={getMask()}
              guide={guide}
              id={id}
              name={id}
              type={type}
              inputMode={inputMode}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readonly}
              value={controlled ? value : internalValue}
              aria-labelledby={[...ariaLabelledBy, Object.entries(ariaLabelledByIds).map(([_, ariaLabelledById]) => ariaLabelledById)].join(',')}
              aria-describedby={[...ariaDescribedBy, Object.entries(ariaDescribedByIds).map(([_, ariaDescribedById]) => ariaDescribedById)].join(',')}
              onChange={changeHandler}
              autoComplete={autocomplete}
              onClick={handleOnClick}
              onFocus={focusHandler}
              onBlur={blurHandler}
              onKeyDown={keyDownHandler}
              onKeyUp={keyUpHandler}
              maxLength={maxlength}
              isAutofill={isAutofill}
              ref={localRef}
              className={`input-default ${className}`}
              expressive={expressive}
              breakpoint={breakpoint}
              style={style}
              disableClearIcon={disableClearIcon}
            />
            {renderClearIcon(internalValue, clearInput, isAutofill, label, disabled, disableClearIcon, expressive, breakpoint)}
          </StyledInputClearWrap>
          {renderAffix('suffix', suffixContent, isAutofill, disabled, affixClick, prefixBlock, expressive, breakpoint, ariaDescribedByIds.suffix)}
        </StyledInputWrap>
        <SupportingElements required={required} disabled={disabled} label={label} validationMessage={validationMessage} />
      </StyledInputContainer>
      {dataList && <div className={gtmPidAnonymousClass}>{dataList()}</div>}
      <FieldValidation message={validationMessage} />
    </StyledWrapper>
  );
});

Input.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool,
  ]),
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
   * The inputmode for the input
   */
  inputMode: PropTypes.string,
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
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
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
   * Function called when keyup is pressed
   */
  handleKeyUp: PropTypes.func,
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
   * Display the Block style - is called prefix but works for suffix as well (grey background)
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
  /**
   * Used to indicate if a field contains personally identifying data which needs to remain anonymous from google analytics
   */
  gtmPidAnonymous: PropTypes.bool,
  /**
   * Set automatically by other Manor components that render the Input so they handle interaction
   * tracking within themselves. You should never need to set this.
   */
  disableInteractionTracking: PropTypes.bool,
  /**
   * Set automatically by parent Manor components that render an input so the interaction type is tracked correctly.
   * If using the Input you can omit this and it will default to the correct value.
   */
  trackingFieldType: PropTypes.oneOf(['Input', 'Date', 'Expressive', 'Currency']),
  /**
   * Manually set this prop to true if you intend to controll the value/add custom masking
   */
  controlled: PropTypes.bool,
};

Input.defaultProps = {
  id: null,
  label: '',
  inFieldLabel: false,
  tooltip: null,
  ariaLabelledBy: [],
  ariaDescribedBy: [],
  mask: false,
  guide: false,
  maxlength: null,
  type: 'text',
  inputMode: 'text',
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
  handleKeyUp: null,
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
  gtmPidAnonymous: false,
  disableInteractionTracking: false,
  trackingFieldType: 'Input',
  controlled: false,
};

export default Input;
