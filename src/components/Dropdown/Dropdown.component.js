import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import styled, { css, ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import { hasTooltipContent, getScreenReaderLabel } from 'utils/form';
import { InlineTooltip, tooltipPropTypes } from '../Tooltip/Tooltip.component';
import SupportingElements from '../SupportingElements/SupportingElements';
import Label from '../Label/Label.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledRow = styled(Row)`
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  margin-left: 0;
  margin-right: 0;
`;

const StyledColumn = styled(Column)`
  padding-left: 0;
  padding-right: 0;
`;

const StyledOption = styled.option`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.dropdown.color};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  &.default {
    font-style: italic;
  }
  &:disabled {
    color: ${({ theme }) => theme.dropdown.colorDisabled};
  }
`;

const sharedStyleNoBorder = css`
  border: ${({ theme }) => theme.borders.transparent};
  border-width: ${({ theme }) => theme.spacing.px};
  outline: none;
`;

const StyledPrefix = styled.div`
  display: flex;
  border: ${({ theme }) => theme.borders.transparent};
  height: 100%;
  width: 100%;
  &:hover {
    border: ${({ theme }) => theme.borders.hover};
  }
  &:hover select {
    border: ${({ theme }) => theme.borders.transparent};
    border-width: ${({ theme }) => theme.spacing.px};
    outline: none;
  }
  &:focus select {
    border: ${({ theme }) => theme.borders.transparent};
    border-width: ${({ theme }) => theme.spacing.px};
    outline: none;
  }
   ${({ isFocusActive, theme }) => isFocusActive && css`
      border: ${theme.borders.hover};
  `}
`;

const StyledPrefixRight = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background: ${({ theme }) => theme.dropdown.prefixBackground};
  align-items: center;
  padding-right: ${({ theme }) => theme.spacing['20']};
  padding-left: ${({ theme }) => theme.spacing['20']};
  min-width: ${({ theme }) => theme.spacing[4]};
  border: none;
  &:focus  {
    outline: none;
  }
  img {
    max-width: 100%;
  }
`;

const StyledChevron = styled.div`
  z-index: 1;
  position: absolute;
  right: ${({ theme }) => theme.spacing[20]};
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize['3xs']};
`;

const StyledSelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledSelectWrap = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.dropdown.background};
`;

const StyledSelect = styled.select`
  color: ${({ theme }) => theme.colors.black};
  background: transparent;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  max-width: 100%;
  border-radius: 0;
  font-size: ${({ theme }) => theme.fontSize.base};
  box-shadow: none;
  margin: 0;
  position: relative;
  z-index: ${({ theme }) => (theme.zIndex[10])};
  appearance: none;
  width: 100%;
  line-height: ${({ theme }) => theme.lineHeight.tighter};
  height: ${({ theme }) => theme.spacing['42']};
  padding: ${({ theme }) => `${theme.spacing['8']} ${theme.spacing['40']} ${theme.spacing['8']} ${theme.spacing['12']}`};
  box-sizing: border-box;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: ${({ theme }) => theme.borders.component};
  &:disabled {
    border: ${({ theme }) => theme.borders.component};
    opacity: ${({ theme }) => theme.dropdown.disabledOpacity};
  }
  &:disabled:hover {
    border: ${({ theme }) => theme.borders.component};
  }
   &:disabled + div svg{
    opacity: ${({ theme }) => theme.dropdown.disabledSvgOpacity};
   }
  &.manor-dropdown::-ms-expand {
   display: none;
  }
  &:hover {
    ${sharedStyleNoBorder};
  }
  &:focus {
     ${sharedStyleNoBorder};
  }
  ${({ isPrefix, theme }) => !isPrefix && css`
    &:hover {
      border: ${theme.borders.hover};
    }
    &:focus {
      border: ${theme.borders.hover};
    }
  `}
 ${({ bordered, theme }) => !bordered && css`
   border: ${theme.borders.transparent};
  `}
  ${({ invalidClass, theme }) => invalidClass && css`
    border: ${theme.borders.invalid};
  `}

  /* **********************************************************************
  invalid styles
  ************************************************************************* */
  /* .manor-dropdown:invalid, */    /* Note: Required fields would have red around them on page load if :invalid was used */
  ${({ invalidClass, theme }) => invalidClass && css`
    &.invalid{
      border: ${theme.borders.invalid};
    }
    &[aria-invalid=true] {
      border: ${theme.borders.invalid};
    }
  `}
`;

const WithPrefixContent = ({ children, isFocusActive, prefixContent }) => (prefixContent
  ? (
    <ThemeProvider theme={getTheme()}>
      <StyledPrefix isFocusActive={isFocusActive} isPrefix={Boolean(prefixContent)}>
        <StyledPrefixRight tabIndex="-1">{prefixContent}</StyledPrefixRight>
        {children}
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
  bordered,
  disabled,
  required,
  options,
  onChange,
  className,
  prefixContent,
}) => {
  const invalidClass = validationMessage && validationMessage.length > 0;
  const isOptionExist = options && options.length;
  const isDisabled = isOptionExist ? disabled : !isOptionExist;
  const [isFocusActive, setFocusActive] = useState(false);
  const desktop = useIsDesktop(false);

  let valueDropdown;
  if (options && options.length) {
    const valueOption = options ? options.find((i) => i.selected) : false;
    valueDropdown = valueOption ? valueOption.value : options[0].value;
  } else {
    valueDropdown = '';
    // eslint-disable-next-line no-console
    console.warn('Invalid prop \'options\' supplied to Dropdown. Validation failed.');
  }
  const [selectValue, setSelectValue] = useState(valueDropdown);

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

  return (
    <ThemeProvider theme={getTheme()}>
      <>
        <Label forId={id} text={label} tooltip={tooltip} fullWidth={forceFullWidth} />
        <StyledRow>
          <StyledColumn cols={desktop && !forceFullWidth ? '10' : '12'}>
            <WithPrefixContent isFocusActive={isFocusActive} prefixContent={prefixContent}>
              <StyledSelectContainer>
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
                    {options.map((option) => (
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
                    <FontAwesomeIcon icon={faChevronDown} size="2x" />
                  </StyledChevron>
                </StyledSelectWrap>
                <SupportingElements required={required} disabled={disabled} label={label} />
              </StyledSelectContainer>
            </WithPrefixContent>
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
              />
            </StyledColumn>
          )}
        </StyledRow>
      </>
    </ThemeProvider>
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
   * Classes to be applied to the select element
   */
  className: PropTypes.string,
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
