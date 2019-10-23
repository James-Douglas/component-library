import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Input from '../Input/Input.component';
import Button from '../Button/Button.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';

export function comboDropdownList(linkText, linkHref, blueButton, currentPrefillValue, characterMinimum, filteredValues, handleSelectItem, filteredValuesRefs, listVisible) {
  return (
    <div className={`row-view section-wrap-shadow mt-8 ${!listVisible || currentPrefillValue.length < characterMinimum ? 'hidden' : 'absolute'}`}>
      <style jsx>{styles}</style>
      {comboDataList(filteredValues, handleSelectItem, filteredValuesRefs)}
      {blueBottomBand(linkText, currentPrefillValue, characterMinimum, linkHref, blueButton)}
    </div>
  );
}

export function comboDataList(filteredValues, handleSelectItem, filteredValuesRefs) {
  return (
    <ul>
      <style jsx>{styles}</style>
      {filteredValues.map((filteredValue, index) => (
        <li
          tabIndex="0"
          className={`item-${index} item`}
          key={`option-${filteredValue}`}
          role="option"
          data-type="list"
          aria-selected={false}
          onMouseDown={() => handleSelectItem(filteredValue)}
          ref={filteredValuesRefs[index]}
        >
          {filteredValue}
        </li>
      ))}
    </ul>
  );
}

export function blueBottomBand(linkText, currentPrefillValue, characterMinimum, linkHref, blueButton) {
  return (
    <>
      <style jsx>{styles}</style>
      {linkText && linkHref && currentPrefillValue.length >= characterMinimum
      && (
        <div className="item-manual-lookup item" ref={blueButton} tabIndex="0" role="option" aria-selected={false}>
          <Button
            id="text-btn01"
            btnType="text"
            content={linkText}
            disabled={false}
            href={linkHref}
            target="_blank"
          />
        </div>
      )}
    </>
  );
}

const Combo = ({
  id,
  label,
  apiData,
  placeholder,
  invalid,
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
}) => {
  const [listVisible, setListVisible] = useState(false);
  const [currentPrefillValue, setCurrentPrefillValue] = useState(prefillValue);
  const blueButton = React.createRef();
  const filteredValues = useMemo(
    () => {
      if (currentPrefillValue.length < characterMinimum) {
        return [];
      }
      return apiData.filter((item) => item.includes(currentPrefillValue)).slice(0, renderLimit);
    },
    [currentPrefillValue, characterMinimum, apiData, renderLimit],
  );
  const filteredValuesRefs = useMemo(
    () => filteredValues.map((item) => React.createRef()),
    [filteredValues],
  );

  const [focusedRef, setFocusedRef] = useState(null);

  const handleSelectItem = (value) => {
    setCurrentPrefillValue(value);
    setListVisible(false);
    setFocusedRef(null);
  };

  const onChange = (valueInput) => {
    setCurrentPrefillValue(valueInput);
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
    setListVisible(!!currentPrefillValue.length);
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
        if (currentPrefillValue.length >= characterMinimum) {
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
        if (currentPrefillValue.length >= characterMinimum) {
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
    <div
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onKeyDown={keyboardAccessibility}
      className="w-full"
    >
      <style jsx>{styles}</style>
      <Input
        id={id}
        tooltip={tooltip}
        placeholder={placeholder}
        label={label}
        prefillValue={currentPrefillValue}
        bordered={bordered}
        required={required}
        disabled={disabled}
        invalid={invalid}
        prefixContent={prefixContent}
        suffixContent={suffixContent}
        autocomplete={autocomplete}
        handleChange={(value) => onChange(value)}
        tabIndex="0"
        role="comboField"
        dataList={() => comboDropdownList(linkText,
          linkHref,
          blueButton,
          currentPrefillValue,
          characterMinimum,
          filteredValues,
          handleSelectItem,
          filteredValuesRefs,
          listVisible)}
      />
    </div>
  );
};

Combo.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  apiData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  prefillValue: PropTypes.string,
  bordered: PropTypes.bool,
  autocomplete: PropTypes.string,
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  characterMinimum: PropTypes.number,
  renderLimit: PropTypes.number,
  linkText: PropTypes.string,
  linkHref: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
};

Combo.defaultProps = {
  id: '',
  label: '',
  apiData: [],
  placeholder: '',
  invalid: false,
  bordered: true,
  required: false,
  disabled: false,
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  characterMinimum: 3,
  renderLimit: 10,
  linkHref: '',
  linkText: '',
  tooltip: {},
};

export default Combo;
