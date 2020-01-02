import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';
import styled, { css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import UseFieldset from '../../hooks/useFieldset';


const StyledSupportingElements = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: ${(props) => props.theme.spacing['8']};
`;

const StyledFullWidth = styled.div`
  width: 100%;
`;

const StyledRequiredStatus = styled.div`
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
  width: 100%;
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
  img {
    max-width: 100%;
  }
}`;
const StyledChevron = styled.div`
  z-index: 1;
  position: absolute;
  right: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
}`;

const StyledSelectWrap = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
}`;


const StyledSelect = styled.select`
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  max-width: 100%;
  border-radius: 0;
  font-size: ${(props) => props.theme.fontSize.base};
  box-shadow: none;
  margin: 0;
  position: relative;
  appearance: none;
  width: 100%;
  line-height: ${(props) => props.theme.lineHeight.tighter};
  height: ${(props) => props.theme.spacing['42']};
  padding: ${(props) => `${props.theme.spacing['8']} ${props.theme.spacing['40']} ${props.theme.spacing['8']} ${props.theme.spacing['12']}`};
  box-sizing: border-box;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: ${(props) => `1px solid ${props.theme.colors.greyLight}`};
  &:disabled {
    border: ${(props) => `1px solid ${props.theme.colors.greyLight}`};
    opacity: 0.5;
  }
  &:disabled:hover {
    border: ${(props) => `1px solid ${props.theme.colors.greyLight}`};
  }
   &:disabled + div svg{
    opacity: 0.3;
   }
  &.manor-dropdown::-ms-expand {
   display: none;
  }
  &:hover {
    border: ${(props) => `1px solid ${props.theme.colors.blueLight}`};
  }
  &:focus {
    box-shadow: none;
    outline: none;
  }
  ${(props) => !props.isPrefix && css`
    &:focus {
      border: ${`1px solid ${props.theme.colors.blueLight}`};
    }
  `}

  /* **********************************************************************
  invalid styles
  ************************************************************************* */
  /* .manor-dropdown:invalid, */    /* Note: Required fields would have red around them on page load if :invalid was used */
  ${(props) => props.invalidClass && css`
    &.invalid{
      border: ${`1px solid ${props.theme.colors.invalid}`};
    }
    &[aria-invalid=true] {
     border: ${`1px solid ${props.theme.colors.invalid}`};
    }
  `}
  ${(props) => !props.bordered && css`
   border: 1px solid transparent;
  `}
}`;


export const getSupportingElements = (required) => {
  if (required) return null;
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledFullWidth>
        <StyledSupportingElements>
          <StyledRequiredStatus>OPTIONAL</StyledRequiredStatus>
        </StyledSupportingElements>
      </StyledFullWidth>
    </ThemeProvider>
  );
};


export const renderSelectField = (
  id,
  name,
  isDisabled,
  required,
  selectValue,
  prefixContent,
  handleChange,
  handleFocus,
  handleBlur,
  options,
  invalidClass,
  bordered,
  className,
  isFocusActive,
) => (
  <ThemeProvider theme={getTheme()}>
    <StyledSelectWrap>
      <StyledSelect
        id={id}
        name={name}
        disabled={isDisabled}
        required={required}
        value={selectValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        invalidClass={invalidClass}
        bordered={bordered}
        className={className}
        isPrefix={Boolean(prefixContent)}
      >
        {options && options.map((option) => (
          <StyledOption
            key={option.value}
            value={option.value}
            id={`${id}_${option.value}`}
            disabled={option.disabled}
          >
            {option.title}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledChevron>
        <FontAwesomeIcon icon={isFocusActive ? faChevronDown : faChevronUp} size="2x" />
      </StyledChevron>
    </StyledSelectWrap>
  </ThemeProvider>
);


const PrefixContent = ({
  children,
  prefixContent,
  isFocusActive,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledPrefix isFocusActive={isFocusActive}>
      <StyledPrefixRight tabIndex="-1">{prefixContent}</StyledPrefixRight>{children}
    </StyledPrefix>
  </ThemeProvider>
);

const WithPrefixContent = ({ children, isFocusActive, prefixContent }) => (prefixContent
  ? (
    <PrefixContent
      isFocusActive={isFocusActive}
      prefixContent={prefixContent}
    >
      {children}
    </PrefixContent>
  ) : children
);


const Dropdown = ({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  name,
  bordered,
  disabled,
  required,
  options,
  onChange,
  disableFieldset,
  className,
  prefixContent,
}) => {
  const invalidClass = validationMessage && validationMessage.length;
  let valueDropdown;
  if (options && options.length) {
    const valueOption = options ? options.find((i) => i.selected) : false;
    valueDropdown = valueOption ? valueOption.value : options[0].value;
  } else {
    valueDropdown = '';
    console.warn(`Invalid prop 'options' supplied to Dropdown. Validation failed.`);
  }
  const [selectValue, setSelectValue] = useState(valueDropdown);
  const [isFocusActive, setFocusActive] = useState(false);
  const handleFocus = () => {
    setFocusActive(true);
  };
  const handleBlur = () => {
    setFocusActive(false);
  };
  const handleChange = (event) => {
    event.preventDefault();
    const selectedValue = event.target.value;
    setSelectValue(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };
  const isOptionExist = options && options.length;
  const isDisabled = isOptionExist ? disabled : !isOptionExist;
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
        {renderSelectField(id, name, isDisabled, required, selectValue, prefixContent, handleChange, handleFocus, handleBlur, options, invalidClass, bordered, className, isFocusActive)}
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
   * Onchange function, called with the selected value
   */
  onChange: PropTypes.func,
  /**
   * The dropdown options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
  })).isRequired,

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
  bordered: true,
  disabled: false,
  required: false,
  onChange: null,
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

PrefixContent.propTypes = {
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

PrefixContent.defaultProps = {
  children: '',
  isFocusActive: false,
  prefixContent: '',
};


export default Dropdown;
