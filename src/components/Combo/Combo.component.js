import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Input from '../Input/Input.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import Container from '../Grid/Container/Container.component';

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
}) => {
  const linkTextString = "Can't find your address?";
  const [listVisible, setListVisible] = useState(false);
  const [currentPrefillValue, setCurrentPrefillValue] = useState(prefillValue);
  const filteredValues = useMemo(
    () => apiData.filter((item) => item.includes(currentPrefillValue)).slice(0, renderLimit),
    [apiData, renderLimit, currentPrefillValue],
  );

  const handleSelectItem = (value) => {
    setCurrentPrefillValue(value);
    setListVisible(false);
  };

  const onChange = (valueInput) => {
    setCurrentPrefillValue(valueInput);
    if (valueInput.length > 1) {
      setListVisible(true);
    } else {
      setListVisible(false);
    }
  };

  const onToggleFocus = (state) => {
    if (!state) {
      setTimeout(() => setListVisible(false), 250);
    }
  };

  return (
    <Container>
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
        toggleFocus={(state) => onToggleFocus(state)}
      />
      <div className={`row-view section-hide ${!listVisible ? 'hidden' : ''}`} role="listbox">
        <Row>
          <Column className="col-view" col="10">
            <ul>
              {filteredValues.map((filteredValue, index) => (
                <li tabIndex="0" className={`item-${index} item`} key={`option-${filteredValue}`} role="option" aria-selected={false} onClick={() => handleSelectItem(filteredValue)} onKeyDown={() => handleSelectItem(filteredValue)}>{filteredValue}</li>
              ))}
              <li className="item-manual-lookup item" role="option" aria-selected={false}>
                {linkTextString}
              </li>
            </ul>
          </Column>
        </Row>
      </div>
    </Container>
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
};

Combo.defaultProps = {
  id: '',
  label: '',
  apiData: [],
  placeholder: '',
  invalid: false,
  bordered: false,
  required: false,
  disabled: false,
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  characterMinimum: 1,
  renderLimit: 10,
};

export default Combo;
