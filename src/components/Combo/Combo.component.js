import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input/Input.component';
import Button from '../Button/Button.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';

const StyledDropdownList = styled.div`
  position: ${({ position }) => (position === 'absolute' ? 'absolute' : 'relative')}; 
  width: 100%;
  display:  ${({ position }) => (position === 'hidden' ? 'none' : 'block')}; 
  z-index: ${({ theme }) => (theme.zIndex[20])}; 
  background: ${({ theme }) => (theme.combo.list.background)};  
  box-shadow: ${({ theme }) => (theme.combo.list.shadow)};  
  margin-top: ${({ theme }) => (theme.spacing[8])};
  &:focus {
    outline: none;
  }
`;

const StyledList = styled.ul`
  width:  100%;
  padding: 0;
  margin-top: ${({ theme }) => (theme.spacing[8])};  
  z-index: ${({ theme }) => (theme.zIndex[30])}; 
  color: ${({ theme }) => (theme.combo.list.color)}; 
`;

const StyledListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  border: ${({ theme }) => theme.borders.transparent};
  padding:  ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[12]}`};  
  font-size: ${({ theme }) => (theme.fontSize.base)}; 
  color: ${({ theme }) => (theme.combo.list.item.color)}; 
  transition: background-color 0.4s ease;
  &:nth-last-child(1) {
    padding-bottom:  ${({ theme }) => theme.spacing[20]};  
  }
  &:hover {
    background: ${({ theme }) => theme.combo.list.item.backgroundHover}; 
  }
  &:focus {
    outline: none;
    border: ${({ theme }) => theme.combo.list.item.borderFocus};
  }
`;

const StyledButtonWrap = styled.div`
  justify-content: space-around;
  text-align: center;
  border: ${({ theme }) => theme.combo.list.border};
  padding:  ${({ theme }) => `${theme.spacing[8]} 0`};  
  background: ${({ theme }) => (theme.combo.button.background)};
  &:focus {
    outline: none;
    border: ${({ theme }) => theme.combo.button.borderFocus};  
    border-width: ${({ theme }) => theme.spacing.px}; /* IE 11 specific fix */ 
  }
  &:hover {
    background: ${({ theme }) => (theme.combo.button.backgroundHover)};  
  }
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const StyledDiv = styled.div`
  width: 100%;
`;

export function comboDropdownList(linkText, linkHref, bottomButton, currentPrefillValue, characterMinimum, filteredValues, handleSelectItem, filteredValuesRefs, listVisible) {
  return (
    <StyledDropdownList position={`${!listVisible || currentPrefillValue.length < characterMinimum ? 'hidden' : 'absolute'}`} role="listwrap">
      {comboDataList(filteredValues, handleSelectItem, filteredValuesRefs)}
      {blueBottomBand(linkText, currentPrefillValue, characterMinimum, linkHref, bottomButton)}
    </StyledDropdownList>
  );
}

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


export function blueBottomBand(linkText, currentPrefillValue, characterMinimum, linkHref, bottomButton) {
  return (
    <>
      {linkText && linkHref && currentPrefillValue.length >= characterMinimum
      && (
        <StyledButtonWrap ref={bottomButton} tabIndex="0" role="buttonOption" aria-selected={false}>
          <Button
            id="text-btn01"
            variant="text"
            disabled={false}
            href={linkHref}
            target="_blank"
          >
            {linkText}
          </Button>
        </StyledButtonWrap>
      )}
    </>
  );
}

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
  className,
  handleChange,
  handleInput,
  handleFocus,
  handleBlur,
}) => {
  const [listVisible, setListVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(value && value.length ? value : prefillValue);
  const bottomButton = React.createRef();

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
    if (handleChange) {
      handleChange(selectedValue);
    }
  };

  const comboHandleChange = (valueInput) => {
    setCurrentValue(valueInput);
    setListVisible(!!valueInput.length);
    if (handleInput) {
      handleInput(valueInput);
    }
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
    if (handleFocus) {
      handleFocus();
    }
  };
  const handleOnBlur = (event) => {
    if (!(bottomButton.current && bottomButton.current.contains(event.relatedTarget))) {
      setListVisible(false);
      if (handleBlur) {
        handleBlur();
      }
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
              if (document.activeElement === bottomButton.current) {
                setFocusedRef(filteredValues.length - 1);
                filteredValuesRefs[filteredValues.length - 1].current.focus();
              } else {
                setFocusedRef(null);
                bottomButton.current.focus();
              }
            } else {
              setFocusedRef(filteredValues.length - 1);
              filteredValuesRefs[filteredValues.length - 1].current.focus();
            }
          } else if (focusedRef === 0) {
            if (linkText && linkHref) {
              setFocusedRef(null);
              bottomButton.current.focus();
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
              bottomButton.current.focus();
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
        handleChange={comboHandleChange}
        className={className}
        tabIndex="0"
        role="comboField"
        dataList={() => comboDropdownList(linkText,
          linkHref,
          bottomButton,
          currentValue,
          characterMinimum,
          filteredValues,
          handleSelectItem,
          filteredValuesRefs,
          listVisible)}
      />
    </StyledDiv>
  );
};

Combo.propTypes = {
  /**
   * The Combo ID. Required as it informs the label and value of the underlying input.
   */
  id: PropTypes.string.isRequired,
  /**
   * Custom handler to attach to the combo field - used to get the value of the selected combo item.
   */
  handleChange: PropTypes.func.isRequired,
  /**
   * Custom handler to attach to the combo field - used to get the value of the combo on each input.
   */
  handleInput: PropTypes.func,
  /**
   * Called on focus of the checkbox
   */
  handleFocus: PropTypes.func,
  /**
   * Called on blur of the checkbox
   */
  handleBlur: PropTypes.func,
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
   * Classes to be applied to the Combo component
   */
  className: PropTypes.string,
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
  className: '',
  handleInput: null,
  handleFocus: null,
  handleBlur: null,
};

export default Combo;
