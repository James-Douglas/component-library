import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css, ThemeProvider, createGlobalStyle } from 'styled-components';
import getTheme from 'utils/getTheme';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import usePrefill from '../../hooks/usePrefill';
import UseFieldset from '../../hooks/useFieldset';

const StyledSupportingElements = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top:  ${(props) => props.theme.spacing['8']};
`;

const StyledFullWidth = styled.div`
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  .manor-subscript {
    line-height: ${(props) => props.theme.lineHeight.snug};
    font-family: SourceSansPro, Arial, sans-serif;
    font-size: ${(props) => props.theme.fontSize['2xs']};
    letter-spacing: 0.15rem;
    font-weight: ${(props) => props.theme.fontWeight.normal};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.greyDarkest};
  }
`;

const StyledOption = styled.option`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  &.default {
    font-style: italic;
  }
  &:disabled {
    color: ${(props) => props.theme.colors.disabledText};
  }
`;


const StyledPrefix = styled.div`
  display: flex;
  border: 1px solid transparent;
  height: 100%;
  &:hover {
    border: ${(props) => `1px solid ${props.theme.colors.blueLight}`};
  }
  &:focus {
    border: ${(props) => `1px solid ${props.theme.colors.blueLight}`};
  }
  &:hover select {
    border: 1px solid transparent;
    border-width: 1px;
    outline: none;
  }
  &:focus select {
    border: 1px solid transparent;
    border-width: 1px;
    outline: none;
  }

   ${(props) => props.isFocusActive && css`
      border:${`1px solid ${props.theme.colors.blueLight}`};
  `}
}`;

const StyledPrefixRight = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  align-items: center;
  padding-right: ${(props) => props.theme.spacing['20']};
  padding-left: ${(props) => props.theme.spacing['20']};
  min-width: 4rem;
  border: none;
  &:focus  {
    outline: none;
  }
}`;


const sharedStylePrefilled = css`
  border: ${(props) => `1px solid ${props.theme.colors.precheckedDarker}`};
  background-color: ${(props) => `1px solid ${props.theme.colors.white}`};
  -webkit-text-fill-color: theme('colors.black');
  -webkit-box-shadow: 0 0 0 100rem rgba(255, 255, 255, 0) inset;
  transition: background-color 5000s ease-in-out 0s;
  background-image: ${(props) => `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, theme(${props.theme.colors.white}) 0%, theme('colors.prechecked') 100%)`};
  background-repeat: no-repeat, repeat;
  background-position: right 1.12rem top 49%, 0 0; 
  background-size: 1.04rem auto, 100%;          
`;


const StyledSelect = styled.select`
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  max-width: 100%;
  border: 1px solid transparent;
  border-radius: 0;
  font-size: ${(props) => props.theme.fontSize.base};
  box-shadow: none;
  margin: 0;
  position: relative;
  appearance: none;
  width: 100%;
  line-height: ${(props) => props.theme.lineHeight.tighter};
  height: ${(props) => props.theme.spacing['42']};
  padding: ${(props) => `${props.theme.spacing['8']} ${props.theme.spacing['24']} ${props.theme.spacing['8']} ${props.theme.spacing['12']}`};
  box-sizing: border-box;
  -moz-appearance: none;
  -webkit-appearance: none;

  background-image: ${(props) => `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, theme(${props.theme.colors.white}) 0%, theme(${props.theme.colors.prechecked}) 100%)`};
  background-repeat: no-repeat, repeat;
  background-position: right 1.12rem top 49%, 0 0;
  background-size: 1.04rem auto, 100%;
  &.manor-dropdown::-ms-expand {
   display: none;
  }
  &:hover {
    border: ${(props) => `1px solid ${props.theme.colors.blueLight}`};
    background-image: ${(props) => `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%231780F3%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, theme(${props.theme.colors.white}) 0%, theme(${props.theme.colors.white}) 100%)`};
  }
   &:focus {
    background-image: ${(props) => `url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%231780F3%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, theme(${props.theme.colors.white}) 0%, theme(${props.theme.colors.white}) 100%)`};
    box-shadow: none;
    outline: none;
  }
  &:-webkit-autofill {
     ${sharedStylePrefilled}
  }
  &:-webkit-autofill:hover {
     ${sharedStylePrefilled}
  }
  &:-webkit-autofill:focus {
     ${sharedStylePrefilled}
  }
  /* **********************************************************************
  invalid styles
  ************************************************************************* */
  /* .manor-dropdown:invalid, */    /* Note: Required fields would have red around them on page load if :invalid was used */
  ${(props) => props.showDefaultStyle && props.isUsePrefill && css`
    font-style: italic;
    -webkit-text-fill-color: ${props.theme.colors.disabledText};
    &:focus {
      font-style: italic;
      -webkit-text-fill-color: ${props.theme.colors.disabledText};
    }
    &:hover {
      font-style: italic;
      -webkit-text-fill-color: ${props.theme.colors.disabledText};
    }
  `}

  ${(props) => props.invalidClass && css`
    &.invalid{
      border: ${`1px solid ${props.theme.colors.invalid}`};
    }
    &[aria-invalid=true] {
     border: ${`1px solid ${props.theme.colors.invalid}`};
    }
  `}

  ${(props) => props.isUsePrefill && css`
    ${sharedStylePrefilled}
  `}
  ${(props) => props.showDefaultStyle && css`
    color: ${props.theme.colors.disabledText};
    font-style: italic;
    &:disabled {
      font-style: italic;
    }
    &[aria-disabled=true] {
      font-style: italic;
    }
    &:-webkit-autofill {
      font-style: italic;
      -webkit-text-fill-color: ${props.theme.colors.disabledText};
    }
    &:-webkit-autofill:hover {
      font-style: italic;
      -webkit-text-fill-color: ${props.theme.colors.disabledText};
    }
    &:-webkit-autofill:focus {
      font-style: italic;
      -webkit-text-fill-color: ${props.theme.colors.disabledText};
    }
  `}
  ${(props) => props.bordered && css`
    border: ${`1px solid ${props.theme.colors.greyLightest}`};
    &:disabled:focus {
      border: ${`1px solid ${props.theme.colors.greyLightest}`};
    }
    &[aria-disabled=true]:focus {
      border: ${`1px solid ${props.theme.colors.greyLightest}`};
    }
    &:disabled:hover {
      border: ${`1px solid ${props.theme.colors.greyLightest}`};
    }
    &[aria-disabled=true]:hover {
      border: ${`1px solid ${props.theme.colors.greyLightest}`};
    }
    &:disabled {
      background-image: ${`url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%231780F3%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, theme(${props.theme.colors.greyLightest}) 0%, theme(${props.theme.colors.greyLightest}) 100%)`};
      border: ${`1px solid ${props.theme.colors.greyLightest}`};
      opacity: 0.5;
    }
    &[aria-disabled=true] {
      background-image: ${`url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244px%22%20height%3D%2244px%22%3E%3Cpath%20fill%3D%22%231780F3%22%20d%3D%22M41.5%2C11.3c-1.3-1.3-3.5-1.3-4.9-0.1L22%2C25.4L7.4%2C11.2C6%2C9.9%2C3.9%2C10%2C2.5%2C11.3c-1.3%2C1.3-1.4%2C3.4-0.1%2C4.8l17.1%2C16.6c1.4%2C1.3%2C3.6%2C1.3%2C5%2C0l17.1-16.6C42.8%2C14.7%2C42.8%2C12.6%2C41.5%2C11.3z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, theme(${props.theme.colors.greyLightest}) 0%, theme(${props.theme.colors.greyLightest}) 100%)`};
      border: ${`1px solid ${props.theme.colors.greyLightest}`};
      opacity: 0.5;
    }
  `}
}`;


export const getSupportingElements = (required) => {
  if (required) return null;
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledFullWidth>
        <StyledSupportingElements>
          <div className="manor-subscript">OPTIONAL</div>
        </StyledSupportingElements>
      </StyledFullWidth>
    </ThemeProvider>
  );
};


export const selectField = (
  id,
  name,
  disabled,
  required,
  readonly,
  selectValue,
  handleChange,
  handleFocus,
  handleBlur,
  optionsModified,
  invalidClass,
  isUsePrefill,
  bordered,
  showDefaultStyle,
  className,
) => (
  <ThemeProvider theme={getTheme()}>
    <GlobalStyle />
    <StyledSelect
      id={id}
      name={name}
      disabled={disabled}
      required={required}
      readOnly={readonly}
      value={selectValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      invalidClass={invalidClass}
      isUsePrefill={isUsePrefill}
      bordered={bordered}
      className={className}
      showDefaultStyle={showDefaultStyle}
    >
      {optionsModified.map((option) => (
        <StyledOption
          key={option.value}
          value={option.value}
          id={`${id}_${option.value}`}
          disabled={option.disabled}
          hidden={option.hidden}
          data-default={option.defaultOption}
          className={option.className}
        >
          {option.title}
        </StyledOption>
      ))}
    </StyledSelect>
  </ThemeProvider>
);

const WithPrefixContent = ({ children, isFocusActive, prefixContent }) => (prefixContent
  ? (
    <ThemeProvider theme={getTheme()}>
      <StyledPrefix isFocusActive={isFocusActive}>
        <StyledPrefixRight tabIndex="-1">{prefixContent}</StyledPrefixRight>{children}
      </StyledPrefix>
    </ThemeProvider>
  ) : children
);


const Dropdown = ({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  name,
  prefillValue,
  bordered,
  disabled,
  required,
  readonly,
  options,
  value,
  onChange,
  disableFieldset,
  className,
  prefixContent,
}) => {
  const invalidClass = validationMessage && validationMessage.length;
  const [isDirty, setIsDirty] = useState(false);
  const [stateValue, setStateValue] = useState(value);
  const isUsePrefill = usePrefill(prefillValue, value, isDirty);
  const selectValue = isUsePrefill ? prefillValue : stateValue;
  const valueOption = options.find((i) => i.value === selectValue);
  const [showDefaultStyle, setshowDefaultStyle] = useState(valueOption ? !!valueOption.defaultOption : !!options[0].defaultOption);
  const [isFocusActive, setFocusActive] = useState(false);
  const handleFocus = () => {
    setFocusActive(true);
  };
  const handleBlur = () => {
    setFocusActive(false);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setIsDirty(true);
    const selectedValue = event.target.value;
    setshowDefaultStyle(event.target.options[event.target.selectedIndex].getAttribute('data-default'));
    setStateValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <UseFieldset
      disableFieldset={disableFieldset}
      label={label}
      tooltip={tooltip}
      forceFullWidth={forceFullWidth}
      validationMessage={validationMessage}
      supportingElements={getSupportingElements(required)}
    >
      <WithPrefixContent isFocusActive={isFocusActive} prefixContent={prefixContent}>
        {selectField(id, name, disabled, required, readonly, selectValue, handleChange, handleFocus, handleBlur, options, invalidClass, isUsePrefill, bordered, showDefaultStyle, className)}
      </WithPrefixContent>
    </UseFieldset>
  );
};

Dropdown.propTypes = {
  /**
   * Label for the Dropdown.
   */
  label: PropTypes.string,
  /**
   *  Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Forces the ToggleGroup to expand to 12 columns
   */
  forceFullWidth: PropTypes.bool,
  /**
   *  Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Specifies a unique id for an element
   */
  id: PropTypes.string.isRequired,
  /**
   * Defines a name for the drop-down list
   */
  name: PropTypes.string,
  /**
   * Prefill a value and apply prefill styles (this is used to emulate browser autocomplete styles)
   */
  prefillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Styles the input with a border
   */
  bordered: PropTypes.bool,
  /**
   * Disables the input
   */
  disabled: PropTypes.bool,
  /**
   * Define whether this is a required field
   */
  required: PropTypes.bool,
  /**
   * Whether the dropdown is read only
   */
  readonly: PropTypes.bool,
  /**
   * Onchange function, called with the selected value
   */
  onChange: PropTypes.func,
  /**
   * Set the value of the dropdown
   */
  value: PropTypes.string,
  /**
   * The dropdown options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Allows a default option to be added to the dropdown
     */
    defaultOption: PropTypes.bool,
  })),
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  /**
   * Specifies disableFieldset wrap component.
   */
  disableFieldset: PropTypes.bool,
  /**
   * Content to be displayed as a prefix for the dropdown
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Dropdown.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: '',
  name: '',
  value: '',
  prefillValue: null,
  bordered: false,
  disabled: false,
  required: false,
  readonly: false,
  onChange: null,
  options: [],
  disableFieldset: false,
  className: '',
  prefixContent: '',
};

WithPrefixContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  isFocusActive: PropTypes.bool,
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
WithPrefixContent.defaultProps = {
  children: '',
  isFocusActive: false,
  prefixContent: '',
};

export default Dropdown;
