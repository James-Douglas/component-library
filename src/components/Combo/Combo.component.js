import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Input from '../Input/Input.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

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
  forceFullWidth,
  children,
}) => {
  const [listVisible, setListVisible] = useState(false);
  const [currentPrefillValue, setCurrentPrefillValue] = useState(prefillValue);
  console.log('currentPrefillValue.length', currentPrefillValue.length)
  console.log('characterMinimum', characterMinimum)
  const filteredValues = useMemo(
    () => {
      if (currentPrefillValue.length < characterMinimum) {
        return [];
      }
      return apiData.filter((item) => item.includes(currentPrefillValue)).slice(0, renderLimit);
    },
    [apiData, renderLimit, currentPrefillValue],
  );
  const filteredValuesRefs = useMemo(
    () => filteredValues.map((item) => React.createRef()),
    [filteredValues],
  );
  const [focusedRef, setFocusedRef] = useState(null);

  const handleSelectItem = (value) => {
    setCurrentPrefillValue(value);
    setListVisible(false);
  };

  const onChange = (valueInput) => {
    setCurrentPrefillValue(valueInput);
    setListVisible(!!valueInput.length);
  };
  const handelOnFocus = (event) => {
    setListVisible(!!currentPrefillValue.length);
  };
  const handleOnBlur = (event) => {
    setListVisible(false);
  };
  const keyboardAccessibility = (event) => {
    switch (event.key) {
      case 'Tab':
        break;
      case 'Escape':
        setListVisible(false);
        break;
      case 'Enter':
        setCurrentPrefillValue(event.target.innerHTML);
        setListVisible(false);
        break;
      case 'ArrowUp':
        if (focusedRef === 0) {
          filteredValuesRefs[focusedRef].current.blur();
          setFocusedRef(null);
        } else if (focusedRef === null) {
          setFocusedRef(0);
          filteredValuesRefs[0].current.focus();
        } else {
          setFocusedRef(focusedRef - 1);
          filteredValuesRefs[focusedRef - 1].current.focus();
        }
        break;
      case 'ArrowDown':
        if (focusedRef === filteredValues.length - 1) {
          filteredValuesRefs[focusedRef].current.blur();
          setFocusedRef(null);
        } else if (focusedRef === null) {
          setFocusedRef(0);
          filteredValuesRefs[0].current.focus();
        } else {
          setFocusedRef(focusedRef + 1);
          filteredValuesRefs[focusedRef + 1].current.focus();
        }
        break;
    }
  }

  return (
    <div onFocus={handelOnFocus} onBlur={handleOnBlur} onKeyDown={keyboardAccessibility}>
      <style jsx>{styles}</style>
      <Input
        id={id}
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
      />
      <div className={`row-view section-hide ${!listVisible ? 'hidden' : ''}`} role="listbox" tabIndex="0">
        <Row>
          <Column sm={forceFullWidth ? '12' : '10'} xs="12">
            <ul>
              {filteredValues.map((filteredValue, index) => (
                <li
                  tabIndex="0"
                  className={`item-${index} item`}
                  key={`option-${filteredValue}`}
                  role="option"
                  aria-selected={false}
                  onMouseDown={() => handleSelectItem(filteredValue)}
                  ref={filteredValuesRefs[index]}
                >
                  {filteredValue}
                </li>
              ))}
              {children && currentPrefillValue.length >= characterMinimum && <li className="item-manual-lookup item" role="option" aria-selected={false}>{children}</li>}
            </ul>
          </Column>
        </Row>
      </div>
    </div>
  );
};

Combo.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  apiData: PropTypes.arrayOf(PropTypes.oneOf([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ])),
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  prefillValue: PropTypes.bool,
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
  forceFullWidth: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
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
  forceFullWidth: false,
  children: '',
};

export default Combo;
