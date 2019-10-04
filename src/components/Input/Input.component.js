import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useValueState from '../../hooks/useValueState';
import Icon from '../Icon/Icon.component';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from './styles.js';

/* Input will need to accept children for the custom combo */

export const renderClearIcon = (value, clearInput, isAutofill, label) => {
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
          <div className="sr-only">Clears the {label}{' '}field.</div>
          <Icon name="closeCircle" size={1.6} />
        </button>
      </>
    );
  }
  return null;
};

export const renderAffix = (affixType, affixContent, bordered, isAutofill, disabled) => {
  
  if ( affixType && affixContent ) {

    return (
      <>
        <style jsx>{styles}</style>
        <span className={`
          ${affixType === 'prefix' ? 'prefix' : 'suffix'}
          ${!bordered && affixType === 'prefix' ? 'prefix-no-border' : ''}
          ${!bordered && affixType === 'suffix' ? 'suffix-no-border' : ''}
          ${isAutofill && !disabled ? 'manor-prefilled' : ''}
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
  id, type, placeholder, prefillValue, autofill, required, disabled, bordered, invalid, prefixContent, suffixContent, label, tooltip,
}) => {
  const [ value, setValue, clearValue ] = useValueState(prefillValue || '');
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

            {renderAffix('prefix', prefixContent, bordered, isAutofill, disabled)}

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
