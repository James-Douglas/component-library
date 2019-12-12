import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import getTheme from 'utils/getTheme';
import Icon from '../Icon/Icon.component';
import Subscript from '../Typography/Subscript/Subscript.component';
import UseFieldset from '../../hooks/useFieldset';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import usePrefill from '../../hooks/usePrefill';

const StyledClearIcon = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.2rem;
  width: 4rem;
  height: 4rem;
  transition: .2s ease-in-out all;
  :hover {
    color: ${(props) => props.theme.colors.blueLight}
  }
  color: ${(props) => {
    let color;
    if (props.isAutofill) {
      color = `${props.theme.colors.greyDark}`;
    } else {
      color = `${props.theme.colors.greyLight}`;
    }
    return color;
  }};
`;

const StyledAffix = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  height: 4.4rem;
  padding-right: ${(props) => (props.affixType === 'prefix' ? '0.5rem' : '')};
  padding-left: ${(props) => (props.affixType === 'suffix' ? '0.5rem' : '')};

  ${(props) => (!props.bordered && props.affixType) && css`
    background: ${props.theme.colors.white};
  `}
  ${(props) => (props.isAutofill && !props.disabled) && css`
    background: ${props.theme.colors.prechecked};
  `}
`;

const StyledSupportingElements = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 0.8rem;
`;

const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputWrap = styled.div`
  display: flex;
  border: 1px solid transparent;
  :hover:not(.disabled) {
    border: 1px solid ${(props) => props.theme.colors.blueLight};
  }
  input::placeholder {
    font-style: italic;
    font-size: ${(props) => props.theme.fontSize.base};
    color: ${(props) => props.theme.colors.grey};
  }
  [disabled] {
    background ${(props) => props.theme.colors.white};
  }

  ${(props) => props.bordered && css`
    border: 1px solid ${props.theme.colors.greyLight};
  `}

  ${(props) => (props.bordered && props.isAutofill && !props.disabled) && css`
    border: 1px solid ${props.theme.colors.precheckedDarker};
  `}

  ${(props) => (props.validationMessage && props.validationMessage.length) && css`
    border: 1px solid ${props.theme.colors.invalid};
  `}

  ${(props) => (props.disabled) && css`
    opacity: 0.5;
  `}
`;

const StyledInputClearWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 4.4rem;
`;

const StyledInput = styled.input`
  padding-left: 1.2rem;
  padding-right: 3.6rem;
  display: block;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.base};
  border: 1px solid transparent;
  height: 4.4rem;
  :webkit-autofill,
  -webkit-autofill:hover,
  -webkit-autofill:focus {
    -webkit-text-fill-color: ${(props) => props.theme.colors.black};
  }
  ::-ms-clear {
    display: none;
  }
  :focus,
  :active,
  :hover {
    outline: 0;
  }

  ${(props) => props.isAutofill && !props.disabled && css`
    background: ${props.theme.colors.prechecked}
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
        <div className="sr-only">Clears the{label}{' '}field.</div>
        <Icon name="closeCircle" size={1.6} />
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

export const getSupportingElements = (required) => {
  if (required) return null;

  return (
    <StyledSupportingElements className="supporting-elements">
      <Subscript>Optional</Subscript>
    </StyledSupportingElements>
  );
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
  disableFieldset,
}) => {
  const [internalValue, setInternalValue] = useState(getInitialValue(valueMasking, value, prefillValue));
  const [isDirty, setIsDirty] = useState(false);
  const isAutofill = usePrefill(prefillValue, value, isDirty);
  const inputWrapElement = useRef(null);
  const theme = getTheme();

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
    const { current } = inputWrapElement;

    if (handleFocus) {
      handleFocus();
    }
    current.setAttribute('style', `border: 1px solid ${theme.colors.blueLight}`);
  };

  const onBlur = () => {
    const { current } = inputWrapElement;
    if (handleBlur) {
      handleBlur();
    }
    if (bordered && isAutofill) {
      current.setAttribute('style', `border: 1px solid ${theme.colors.precheckedDarker}`);
    } else if (bordered) {
      current.setAttribute('style', `border: 1px solid ${theme.colors.greyLight}`);
    } else {
      current.setAttribute('style', 'border: 1px solid transparent');
    }
  };

  return (
    <>
      <UseFieldset
        disableFieldset={disableFieldset}
        label={label}
        tooltip={tooltip}
        forceFullWidth={forceFullWidth}
        validationMessage={validationMessage}
        supportingElements={getSupportingElements(required)}
      >
        <ThemeProvider theme={theme}>

          <StyledInputContainer className="input-container">
            <StyledInputWrap
              ref={inputWrapElement}
              isAutofill={isAutofill}
              disabled={disabled}
              bordered={bordered}
              validationMessage={validationMessage}
              className={`
                input-wrap 
              `}
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
                  className={`
                    input-default
                  `}
                />

                {renderClearIcon(internalValue, clearInput, isAutofill, label)}

              </StyledInputClearWrap>

              {renderAffix('suffix', suffixContent, bordered, isAutofill, disabled)}

            </StyledInputWrap>

            {dataList && <div>{dataList()}</div>}

          </StyledInputContainer>
        </ThemeProvider>
      </UseFieldset>
    </>
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
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
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
  /**
   * Used for disableFieldset wrap component.
   */
  disableFieldset: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
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
  bordered: true,
  dataList: null,
  disableFieldset: false,
};

export default Input;
