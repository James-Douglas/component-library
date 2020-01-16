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
`;

const StyledClearIcon = styled.button`
  position: absolute;
  top: 0.3rem;
  right:${({ theme }) => theme.spacing[4]};
  width: ${({ theme }) => theme.spacing[40]};
  height: ${({ theme }) => theme.spacing[40]};
  transition: .2s ease-in-out all;
  :hover {
    color: ${({ theme }) => theme.input.clearButton.hoverColor};
  }
  color: ${({ theme, isAutofill }) => (isAutofill ? theme.input.clearButton.colorAutofill : theme.input.clearButton.color)};
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
  :hover:not(.disabled) {
    border: ${({ theme }) => theme.borders.hover};
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
  :webkit-autofill,
  -webkit-autofill:hover,
  -webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.input.color};
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

export const renderClearIcon = (value, clearInput, isAutofill, label) => {
  if (value && value.length) {
    return (
      <StyledClearIcon
        isAutofill={isAutofill}
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

const Input = ({
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
}) => {
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

  const handleOnChange = (e) => {
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

  const onFocus = () => {
    if (handleFocus) {
      handleFocus();
    }
    setFocusActive(true);
  };

  const onBlur = () => {
    if (handleBlur) {
      handleBlur();
    }
    setFocusActive(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Label forId={id} text={label} tooltip={tooltip} fullWidth={forceFullWidth} />
      <StyledRow>
        <Column cols={desktop && !forceFullWidth ? '10' : '12'}>
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
                  onChange={handleOnChange}
                  autoComplete={autocomplete}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  maxLength={maxlength}
                  isAutofill={isAutofill}
                  className="input-default"
                />
                {renderClearIcon(internalValue, clearInput, isAutofill, label)}
              </StyledInputClearWrap>
              {renderAffix('suffix', suffixContent, bordered, isAutofill, disabled)}
            </StyledInputWrap>
            <SupportingElements required={required} label={label} />
            {dataList && <div>{dataList()}</div>}
          </StyledInputContainer>
          <FieldValidation message={validationMessage} />
        </Column>
        {desktop && hasTooltipContent(tooltip)
          && (
          <Column cols={2}>
            <InlineTooltip
              title={tooltip.title}
              body={tooltip.body}
              boundingElementSelector={tooltip.boundingElementSelector || null}
              screenReaderLabel={getScreenReaderLabel(tooltip.screenReaderLabel, label)}
              justifyEnd={tooltip.justifyEnd}
            />
          </Column>
          )}
      </StyledRow>
    </ThemeProvider>
  );
};

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
};

export default Input;
