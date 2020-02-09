import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import { hasTooltipContent, getScreenReaderLabel } from 'utils/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

import SRonly from '../Typography/SRonly/SRonly.component';
import { InlineTooltip, tooltipPropTypes } from '../Tooltip/Tooltip.component';
import usePrefill from '../../hooks/usePrefill';
import Label from '../Label/Label.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import FieldValidation from '../FieldValidation/FieldValidation.component';
import SupportingElements from '../SupportingElements/SupportingElements';

const StyledRow = styled(Row)`
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  margin-left: 0;
  margin-right: 0;
`;

const StyledColumn = styled(Column)`
  padding-left: 0;
  padding-right: 0;
  position: relative;
`;

const StyledClearIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ theme }) => theme.spacing[44]};
  height: ${({ theme }) => theme.spacing[44]};
  transition: .2s ease-in-out all;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ theme, isAutofill }) => (isAutofill ? theme.input.clearButton.colorAutofill : theme.input.clearButton.color)};
  :hover {
    color: ${({ theme }) => theme.input.clearButton.hoverColor};
  }
`;

const StyledAffix = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[12]}`};
  height: ${({ theme }) => theme.input.height};
  padding-right: ${({ affixType }) => (affixType === 'prefix' ? '0.5rem' : '')};
  padding-left: ${({ affixType }) => (affixType === 'suffix' ? '0.5rem' : '')};
  background: ${({ theme }) => theme.input.background};

  ${({ theme, isAutofill, disabled }) => (isAutofill && !disabled) && css`
    background: ${theme.colors.prechecked};
  `}
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputWrap = styled.div`
  display: flex;
  border: ${({ theme }) => theme.borders.transparent};
  :hover {
    border: ${({ theme, disabled }) => (disabled ? '' : theme.borders.hover)};
  }
  ::placeholder {
    ${({ theme }) => ({ ...theme.placeholder })};
  }
  [disabled] {
    background: ${({ theme }) => theme.input.background};
  }
  ${({ theme, bordered }) => bordered && css`
    border: ${theme.borders.component};
  `}
  ${({
    theme, bordered, isAutofill, disabled,
  }) => (bordered && isAutofill && !disabled) && css`
    border: ${theme.borders.prefill};
  `}
  ${({ theme, invalid }) => invalid && css`
    border: ${theme.borders.invalid};
  `}
  ${({ disabled }) => (disabled) && css`
    opacity: 0.5;
  `}
  ${({ theme, isFocusActive }) => isFocusActive && css`
    border: ${theme.borders.hover};
  `}
`;

const StyledInputClearWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: ${({ theme }) => theme.input.height};
`;

const StyledInput = styled.input`
  padding-left: ${({ theme }) => theme.spacing[12]};
  padding-right: ${({ theme }) => theme.spacing[36]};
  display: block;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: ${({ theme }) => theme.borders.transparent};
  height: ${({ theme }) => theme.input.height};
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-ms-clear {
    display: none;
  }
  :focus,
  :active,
  :hover {
    outline: 0;
  }
  ${({ theme, isAutofill, disabled }) => isAutofill && !disabled && css`
    background: ${theme.colors.prechecked};
  `}
`;

export const renderClearIcon = (value, clearInput, isAutofill, label, disabled, disableClearIcon) => {
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
      >
        <SRonly>Clears the{label}{' '}field.</SRonly>
        <FontAwesomeIcon icon={faTimesCircle} size="lg" />
      </StyledClearIcon>
    );
  }
  return null;
};

export const renderAffix = (affixType, affixContent, bordered, isAutofill, disabled) => {
  if (affixType && affixContent) {
    return (
      <StyledAffix
        affixType={affixType}
        bordered={bordered}
        isAutofill={isAutofill}
        disabled={disabled}
      >
        {affixContent}
      </StyledAffix>
    );
  }
  return null;
};

export const getInitialValue = (valueMasking, value, prefillValue) => {
  if (valueMasking && value && value.length) {
    return valueMasking(value);
  }
  if (valueMasking && prefillValue && prefillValue.length) {
    return valueMasking(prefillValue);
  }
  if (value) {
    return value;
  }
  if (prefillValue) {
    return prefillValue;
  }
  return '';
};

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  type,
  placeholder,
  value,
  prefillValue,
  required,
  disabled,
  bordered,
  prefixContent,
  suffixContent,
  autocomplete,
  maxlength,
  handleChange,
  handleFocus,
  handleBlur,
  valueMasking,
  dataList,
  handleOnClick,
  className,
  disableClearIcon,
}, ref) => {
  const [internalValue, setInternalValue] = useState(getInitialValue(valueMasking, value, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const [isFocusActive, setFocusActive] = useState(false);
  const theme = getTheme();
  const desktop = useIsDesktop(false);

  const clearInput = () => {
    setIsDirty(true);
    setInternalValue('');
    handleChange('');
  };

  const changeHandler = (e) => {
    setIsDirty(true);

    if (valueMasking) {
      const { raw, parsed } = valueMasking(e.target.value);
      setInternalValue(parsed || '');
      handleChange(parsed, raw);
    } else {
      setInternalValue(e.target.value);
      handleChange(e.target.value);
    }
  };

  useEffect(() => {
    let valueToUse = '';
    if (value && value.length) {
      valueToUse = value;
    } else if (prefillValue && prefillValue.length) {
      valueToUse = prefillValue;
    }
    if (valueMasking) {
      const { parsed } = valueMasking(valueToUse);
      setInternalValue(parsed);
    } else {
      setInternalValue(valueToUse);
    }
  }, [prefillValue, value, valueMasking]);

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

  return (
    <ThemeProvider theme={theme}>
      <div className="input-label-container">
        <Label forId={id} text={label} tooltip={tooltip} fullWidth={forceFullWidth} />
        <StyledRow>
          <StyledColumn cols={desktop && !forceFullWidth ? '10' : '12'}>
            <StyledInputContainer className="input-container">
              <StyledInputWrap
                isAutofill={isAutofill}
                disabled={disabled}
                bordered={bordered}
                invalid={validationMessage && validationMessage.length > 0}
                isFocusActive={isFocusActive}
              >
                {renderAffix('prefix', prefixContent, bordered, isAutofill, disabled)}
                <StyledInputClearWrap className="input-clear-wrap">
                  <StyledInput
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={internalValue}
                    onChange={changeHandler}
                    autoComplete={autocomplete}
                    onClick={handleOnClick}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                    maxLength={maxlength}
                    isAutofill={isAutofill}
                    ref={ref}
                    className={`input-default ${className}`}
                  />
                  {renderClearIcon(internalValue, clearInput, isAutofill, label, disabled, disableClearIcon)}
                </StyledInputClearWrap>
                {renderAffix('suffix', suffixContent, bordered, isAutofill, disabled)}
              </StyledInputWrap>
              <SupportingElements required={required} disabled={disabled} label={label} />
            </StyledInputContainer>
            {dataList && <div>{dataList()}</div>}
            <FieldValidation message={validationMessage} />
          </StyledColumn>
          {desktop && !forceFullWidth && hasTooltipContent(tooltip)
            && (
            <StyledColumn cols={2}>
              <InlineTooltip
                title={tooltip.title}
                body={tooltip.body}
                screenReaderLabel={getScreenReaderLabel(tooltip.screenReaderLabel, label)}
                justifyEnd={tooltip.justifyEnd}
                iconSmall={tooltip.iconSmall}
              />
            </StyledColumn>
            )}
        </StyledRow>
      </div>
    </ThemeProvider>
  );
});

Input.propTypes = {
  /**
   * Unique id for the component. Required.
   */
  id: PropTypes.string.isRequired,
  /**
   * Custom handler to attach to the input field - used to get the value of the field for example.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Label for the input
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Forces the ToggleGroup to expand to 12 columns
   */
  forceFullWidth: PropTypes.bool,
  /**
   * Maximum length for the input element
   */
  maxlength: PropTypes.number,
  /**
   * Function called with the value to apply an input mask
   */
  valueMasking: PropTypes.func,
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
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * The input field border style.
   */
  bordered: PropTypes.bool,
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
   * Function called when click on input
   */
  handleOnClick: PropTypes.func,
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
   * Used for the combo component, this is the list of options that is displayed on input.
   */
  dataList: PropTypes.func,
  /**
   * Classes to be applied to the Input component
   */
  className: PropTypes.string,
  /**
   * Props to be applied to cancel close button
   */
  disableClearIcon: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  valueMasking: null,
  maxlength: null,
  type: 'text',
  placeholder: '',
  value: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  handleFocus: null,
  handleBlur: null,
  required: true,
  disabled: false,
  validationMessage: '',
  bordered: true,
  dataList: null,
  handleOnClick: null,
  className: '',
  disableClearIcon: false,
};

export default Input;
