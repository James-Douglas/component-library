import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Input from '../Input/Input.component';
import Button from '../Button/Button.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';


const StyledDropdownList = styled.div`
  position: ${(props) => (props.position === 'absolute' ? 'absolute' : 'relative')}; 
  width: 100%;
  display:  ${(props) => (props.position === 'hidden' ? 'none' : 'block')}; 
  z-index: ${(props) => (props.theme.zIndex[20])}; 
  background: ${(props) => (props.theme.colors.white)};  
  box-shadow: ${(props) => (props.theme.boxShadow.md)};  
  margin-top: ${(props) => (props.theme.spacing[8])};
  &:focus {
    outline: none;
  }
`;

export function comboDropdownList(linkText, linkHref, blueButton, currentPrefillValue, characterMinimum, filteredValues, handleSelectItem, filteredValuesRefs, listVisible) {
  return (
    <StyledDropdownList position={`${!listVisible || currentPrefillValue.length < characterMinimum ? 'hidden' : 'absolute'}`} role="listwrap">
      {comboDataList(filteredValues, handleSelectItem, filteredValuesRefs)}
      {blueBottomBand(linkText, currentPrefillValue, characterMinimum, linkHref, blueButton)}
    </StyledDropdownList>
  );
}

const StyledList = styled.ul`
  width:  100%;
  padding: 0;
  margin-top: ${(props) => (props.theme.spacing[8])};  
  z-index: ${(props) => (props.theme.zIndex[30])}; 
  color: ${(props) => (props.theme.colors.black)}; 
`;

const StyledListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding:  ${(props) => `${props.theme.spacing[8]} ${props.theme.spacing[12]}`};  
  font-size: ${(props) => (props.theme.fontSize.base)}; 
  color: ${(props) => (props.theme.colors.greyDarker)}; 
  transition: background-color 0.4s ease;
  &:nth-last-child(1) {
    padding-bottom:  ${(props) => props.theme.spacing[20]};  
  }
  &:hover {
    background: ${(props) => props.theme.colors.greyLighter}; 
  }
  &:focus {
    outline: none;
    border: ${(props) => `1px solid ${props.theme.colors.blueLight}`};
  }
`;


export function comboDataList(filteredValues, handleSelectItem, filteredValuesRefs) {
  return (
    <StyledList>
      {filteredValues.map((filteredValue, index) => (
        <StyledListItem
          tabIndex="0"
          key={`option-${filteredValue}`}
          role="option"
          data-type="list"
          aria-selected={false}
          onMouseDown={() => handleSelectItem(filteredValue)}
          ref={filteredValuesRefs[index]}
        >
          {filteredValue}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledButtonWrap = styled.div`
  justify-content: space-around;
  text-align: center;
  border: 1px solid transparent;
  padding:  ${(props) => `${props.theme.spacing[8]} 0`};  
  background: ${(props) => (props.theme.colors.whiteLight)};
  &:focus {
    outline: none;
    border: ${(props) => (`1px solid ${props.theme.colors.blueLight}`)};  
    border-width: 1px; /* IE 11 specific fix */ 
  }
  &:hover {
    background: ${(props) => (props.theme.colors.whiteLight)};  
  }
  font-size: ${(props) => props.theme.fontSize.base};
`;

export function blueBottomBand(linkText, currentPrefillValue, characterMinimum, linkHref, blueButton) {
  return (
    <>
      {linkText && linkHref && currentPrefillValue.length >= characterMinimum
      && (
        <StyledButtonWrap ref={blueButton} tabIndex="0" role="buttonOption" aria-selected={false}>
          <Button
            id="text-btn01"
            variant="text"
            content={linkText}
            disabled={false}
            href={linkHref}
            target="_blank"
          />
        </StyledButtonWrap>
      )}
    </>
  );
}


const StyledDiv = styled.div`
  width: 100%;
`;


const Combo = ({
  id,
  label,
  apiData,
  placeholder,
  validationMessage,
  value,
  prefillValue,
  bordered,
  prefixContent,
  suffixContent,
  autocomplete,
  required,
  disabled,
  characterMinimum,
  renderLimit,
  linkText,
  linkHref,
  tooltip,
  disableFieldset,
}) => {
  const [listVisible, setListVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(value && value.length ? value : prefillValue);
  const blueButton = React.createRef();

  const filteredValues = useMemo(
    () => {
      if (currentValue.length < characterMinimum) {
        return [];
      }
      return apiData.filter((item) => item.includes(currentValue)).slice(0, renderLimit);
    },
    [currentValue, characterMinimum, apiData, renderLimit],
  );

  const filteredValuesRefs = useMemo(
    () => filteredValues.map((item) => React.createRef()),
    [filteredValues],
  );

  const [focusedRef, setFocusedRef] = useState(null);

  const handleSelectItem = (selectedValue) => {
    setCurrentValue(selectedValue);
    setListVisible(false);
    setFocusedRef(null);
  };

  const onChange = (valueInput) => {
    setCurrentValue(valueInput);
    setListVisible(!!valueInput.length);
  };

  const handleOnFocus = (event) => {
    if (
      // ignore tooltip icon
      event.target.getAttribute('role') === 'tooltip'
      // ignore clear button
      || event.target.tagName === 'BUTTON'
    ) {
      return;
    }
    setListVisible(!!currentValue.length);
  };
  const handleOnBlur = (event) => {
    if (!(blueButton.current && blueButton.current.contains(event.relatedTarget))) {
      setListVisible(false);
    }
  };
  const keyboardAccessibility = (event) => {
    const closestLink = event.target.getElementsByTagName('a')[0];
    switch (event.key) {
      case 'Tab':
        break;
      case 'Escape':
        setListVisible(false);
        break;
      case 'Enter':
        if (focusedRef !== null) {
          handleSelectItem(event.target.innerHTML);
        } else if (closestLink) {
          closestLink.focus();
          closestLink.click();
        }
        break;
      case 'ArrowUp':
        if (currentValue.length >= characterMinimum) {
          if (focusedRef === null) {
            if (linkText && linkHref) {
              if (document.activeElement === blueButton.current) {
                setFocusedRef(filteredValues.length - 1);
                filteredValuesRefs[filteredValues.length - 1].current.focus();
              } else {
                setFocusedRef(null);
                blueButton.current.focus();
              }
            } else {
              setFocusedRef(filteredValues.length - 1);
              filteredValuesRefs[filteredValues.length - 1].current.focus();
            }
          } else if (focusedRef === 0) {
            if (linkText && linkHref) {
              setFocusedRef(null);
              blueButton.current.focus();
            } else {
              setFocusedRef(filteredValues.length - 1);
              filteredValuesRefs[filteredValues.length - 1].current.focus();
            }
          } else {
            setFocusedRef(focusedRef - 1);
            filteredValuesRefs[focusedRef - 1].current.focus();
          }
        }
        break;
      case 'ArrowDown':
        if (currentValue.length >= characterMinimum) {
          if (focusedRef === filteredValues.length - 1) {
            if (linkText && linkHref) {
              setFocusedRef(null);
              blueButton.current.focus();
            } else {
              setFocusedRef(0);
              filteredValuesRefs[0].current.focus();
            }
          } else if (focusedRef === null) {
            setFocusedRef(0);
            filteredValuesRefs[0].current.focus();
          } else {
            setFocusedRef(focusedRef + 1);
            filteredValuesRefs[focusedRef + 1].current.focus();
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <ThemeProvider theme={getTheme()}>
      <StyledDiv
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onKeyDown={keyboardAccessibility}
      >
        <Input
          id={id}
          tooltip={tooltip}
          placeholder={placeholder}
          label={label}
          value={currentValue}
          prefillValue={prefillValue}
          bordered={bordered}
          required={required}
          disabled={disabled}
          validationMessage={validationMessage}
          prefixContent={prefixContent}
          suffixContent={suffixContent}
          autocomplete={autocomplete}
          handleChange={onChange}
          tabIndex="0"
          role="comboField"
          disableFieldset={disableFieldset}
          dataList={() => comboDropdownList(linkText,
            linkHref,
            blueButton,
            currentValue,
            characterMinimum,
            filteredValues,
            handleSelectItem,
            filteredValuesRefs,
            listVisible)}
        />
      </StyledDiv>
    </ThemeProvider>
  );
};

Combo.propTypes = {
  /**
   * The Combo ID. Required as it informs the label and value of the underlying input.
   */
  id: PropTypes.string.isRequired,
  /**
   * Label for the Combo.
   */
  label: PropTypes.string,
  /**
   * The supplied data to populate a datalist. Only accepts formatted data - logic would be provided for this in its
   * context. See the Combo component story for a rough and ready example.
   */
  apiData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Placeholder value to be displayed in the Combo component.
   */
  placeholder: PropTypes.string,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Sets the value of the input
   */
  value: PropTypes.string,
  /**
   * Prefill a value and apply prefill styles (this is used to emulate browser autocomplete styles)
   */
  prefillValue: PropTypes.string,
  /**
   * Styles the input with a border
   */
  bordered: PropTypes.bool,
  /**
   * Sets the autocomplete attribute on the input element
   */
  autocomplete: PropTypes.string,
  /**
   * Defines content as a prefix for the combo
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Defines content as a suffix for the combo
   */
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * Define whether this is a required field
   */
  required: PropTypes.bool,
  /**
   * Disables the input
   */
  disabled: PropTypes.bool,
  /**
   * Define a minimum number of characters to be typed before showing the list
   */
  characterMinimum: PropTypes.number,
  /**
   * Defines a limit for the number of options to display in the dropdown list
   */
  renderLimit: PropTypes.number,
  /**
   * Defines text content for the blue bar link at the bottom of the list
   */
  linkText: PropTypes.string,
  /**
   * Defines href for the for linkText
   */
  linkHref: PropTypes.string,
  /**
   * Define a tooltip to be displayed alongside this component. See Tooltip props for details.
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Used for disableFieldset wrap component.
   */
  disableFieldset: PropTypes.bool,
};

Combo.defaultProps = {
  label: '',
  apiData: [],
  placeholder: '',
  validationMessage: null,
  bordered: true,
  required: false,
  disabled: false,
  value: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  characterMinimum: 3,
  renderLimit: 10,
  linkHref: '',
  linkText: '',
  tooltip: {},
  disableFieldset: false,
};

export default Combo;
