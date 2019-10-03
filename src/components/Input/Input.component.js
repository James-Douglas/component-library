import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useValueState from '../../hooks/useValueState';
import Icon from '../Icon/Icon.component';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from './styles.js';

const renderClearIcon = (value, clearInput, isAutofill, label) => {
  if (value.length) {
    return (
      <>
        <style jsx>{styles}</style>
        <button
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

const renderPrefix = (prefix, bordered, isAutofill, disabled) => {
  if (prefix) {
    return (
      <>
        <style jsx>{styles}</style>
        <span className={`
          prefix 
          ${!bordered ? 'prefix-no-border' : ''}
          ${isAutofill && !disabled ? 'manor-prefilled' : ''}
        `}
        >
          {prefix}
        </span>
      </>
    );
  }
  return null;
};

const renderSuffix = (suffix, bordered, isAutofill, disabled) => {
  if (suffix) {
    return (
      <>
        <style jsx>{styles}</style>
        <span className={`
          suffix 
          ${!bordered ? 'prefix-no-border' : ''}
          ${isAutofill && !disabled ? 'manor-prefilled' : ''}
        `}
        >
          {suffix}
        </span>
      </>
    );
  }
  return null;
};

const renderOptionalElement = (required) => {
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
  id, type, placeholder, prefillValue, autofill, required, disabled, bordered, invalid, prefix, suffix, label, tooltip,
}) => {
  const [value, setValue, clearValue] = useValueState(prefillValue || '');
  const [ isAutofill, setIsAutofill ] = useState(autofill)
  const inputWrapElement = useRef(null);
  
  const clearInput = () => {
    clearValue();
    setIsAutofill(false);
  };

  const handleChange = (e) => {
    setIsAutofill(false);
    setValue(e);
  }

  const addFocus = () => {
    inputWrapElement.current.classList.add('input-wrap-focus');
  };

  const removeFocus = () => {
    inputWrapElement.current.classList.remove('input-wrap-focus');
  };

  return (
    <>
      <Fieldset label={label} tooltip={tooltip}>
        <style jsx>{styles}</style>
        <div className="input-container">
          <div
            ref={inputWrapElement}
            className={`
            input-wrap
            ${isAutofill && !disabled ? 'manor-prefilled-border' : ''}
            ${bordered ? 'input-border' : ''}
            ${invalid ? 'invalid' : ''}
            ${disabled ? 'disabled' : ''}
          `}
          >

            {renderPrefix(prefix, bordered, isAutofill, disabled)}

            <div className="input-clear-wrap">
              <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={handleChange}
                autoComplete="off"
                onFocus={addFocus}
                onBlur={removeFocus}
                className={`
                  input-default
                  ${isAutofill && !disabled ? 'manor-prefilled' : ''}
                `}
              />

              {renderClearIcon(value, clearInput, isAutofill, label)}

            </div>

            {renderSuffix(suffix, bordered, isAutofill, disabled)}

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
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autofill: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  invalid: PropTypes.bool,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  label: PropTypes.string,
  tooltip: PropTypes.object,
};

Input.defaultProps = {
  type: 'text',
  autofill: false,
  required: true,
  disabled: false,
  bordered: true,
  invalid: false,
};

export default Input;
