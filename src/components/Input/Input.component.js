import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useValueState from 'hooks/useValueState';
import Icon from '../Icon/Icon.component';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from './styles';

/* Input will need to accept children for the custom combo */

export const renderClearIcon = (value, clearInput, isAutofill, label) => {
  if (value.length) {
    return (
      <>
        <style jsx>{styles}</style>
        <button
          type="button"
          onClick={clearInput}
          className={`
          input-clear-button
          ${isAutofill ? 'darker' : 'lighter'}
        `}
        >
          <div className="sr-only">
Clears the
            {label}
            {' '}
field.
          </div>
          <Icon name="closeCircle" size={1.6} />
        </button>
      </>
    );
  }
  return null;
};

export const renderAffix = (affixType, affixContent, bordered, isAutofill, disabled) => {
  const affixTypeClass = `${affixType === 'prefix' ? 'prefix' : 'suffix'}`;
  const borderClass = `${!bordered && affixType ? `${affixType}-no-border` : ''}`;
  const prefillClass = `${isAutofill && !disabled ? 'manor-prefilled' : ''}`;

  if (affixType && affixContent) {
    return (
      <>
        <style jsx>{styles}</style>
        <span className={`${affixTypeClass} ${borderClass} ${prefillClass}
        `}
        >
          {affixContent}
        </span>
      </>
    );
  }
  return null;
};

export const renderOptionalElement = (required) => {
  if (!required) {
    return (
      <>
        <span className="manor-subscript">Optional</span>
      </>
    );
  }
  return null;
};

const Input = ({
  id, type, placeholder, prefillValue, required, disabled, bordered, invalid, prefixContent, suffixContent, label, tooltip, autocomplete, handleChange,
}) => {
  const [value, setValue, clearValue] = useValueState(prefillValue || '');
  const [isAutofill, setIsAutofill] = useState(!!prefillValue);

  const inputWrapElement = useRef(null);

  const clearInput = () => {
    clearValue();
    setIsAutofill(false);
  };

  const handleOnChange = (e) => {
    setIsAutofill(false);
    setValue(e.target.value);
  };

  useEffect(() => {
    handleChange(value);
  }, [handleChange, value]);

  const addFocus = () => {
    inputWrapElement.current.classList.add('input-wrap-focus');
  };

  const removeFocus = () => {
    inputWrapElement.current.classList.remove('input-wrap-focus');
  };

  const prefillClass = `${isAutofill && !disabled ? 'manor-prefilled-border' : ''}`;
  const borderClass = `${bordered ? 'input-border' : ''}`;
  const invalidClass = `${invalid ? 'invalid' : ''}`;
  const disabledClass = `${disabled ? 'disabled' : ''}`;
  return (
    <>
      <Fieldset label={label} tooltip={tooltip}>
        <style jsx>{styles}</style>
        <div className="input-container">
          <div
            ref={inputWrapElement}
            className={`input-wrap ${prefillClass} ${borderClass} ${invalidClass} ${disabledClass}`}
          >

            {renderAffix('prefix', prefixContent, bordered, isAutofill, disabled)}

            <div className="input-clear-wrap">
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={handleOnChange}
                autoComplete={autocomplete}
                onFocus={addFocus}
                onBlur={removeFocus}
                className={`
                  input-default
                  ${isAutofill && !disabled ? 'manor-prefilled' : ''}
                `}
              />

              {renderClearIcon(value, clearInput, isAutofill, label)}

            </div>

            {renderAffix('suffix', suffixContent, bordered, isAutofill, disabled)}

          </div>
          <div className="supporting-elements">
            {renderOptionalElement(required)}
          </div>
        </div>

      </Fieldset>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  prefillValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  invalid: PropTypes.bool,
  autocomplete: PropTypes.string,
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  label: PropTypes.string,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    boundingElementSelector: PropTypes.string,
    screenReaderLabel: PropTypes.string,
  }),
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  required: true,
  disabled: false,
  bordered: true,
  invalid: false,
  label: '',
  tooltip: {},
};

export default Input;
