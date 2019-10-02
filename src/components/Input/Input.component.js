import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useValueState from '../../hooks/useValueState';
import Icon from '../Icon/Icon.component';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from './styles.js';

/* 
  Requires fieldset to handle the label, fieldset not in master yet
*/

const renderClearIcon = (value, clearInput, autoFill) => {
  if (value.length) {
    return (
      <>
      <style jsx>{styles}</style>
      <button 
        onClick={clearInput} 
        className={`
          input-clear-button
          ${autoFill ? 'darker' : 'lighter'}
        `}
        >
          <div className='sr-only'>Clears the label (update to be dynamic) field.</div>
          <Icon name={'closeCircle'} size={1.6}></Icon>
      </button>
      </>
    )
  }
  return null;
}

const renderPrefix = (prefix, bordered, autoFill, disabled) => {
  if (prefix) {
    return (
      <>
        <style jsx>{styles}</style>
        <span className={`
          prefix 
          ${!bordered ? 'prefix-no-border' : ''}
          ${autoFill && !disabled ? 'manor-prefilled' : ''}
        `} 
        >
          {prefix}
        </span>
      </>
    )
  }
  return null;
}

const renderSuffix = (suffix, bordered, autoFill, disabled) => {
  if (suffix) {
    return (
      <>
        <style jsx>{styles}</style>
        <span className={`
          suffix 
          ${!bordered ? 'prefix-no-border' : ''}
          ${autoFill && !disabled ? 'manor-prefilled' : ''}
        `} 
        >
          {suffix}
        </span>
      </>
    )
  }
  return null;
}

const Input = ({
  id, type, placeholder, autoFill, disabled, bordered, invalid, prefix, suffix, label, tooltip, forceFullWidth
}) => {

  const [ value, setValue, clearValue ] = useValueState('');
  const inputWrapElement = useRef(null);
  const inputElement = useRef(null);

  const clearInput = () => {
    clearValue();
  }

  const addFocus = () => {
    inputWrapElement.current.classList.add('fix-wrap-focus');
  }

  const removeFocus = () => {
    inputWrapElement.current.classList.remove('fix-wrap-focus');
  }

  return (
    <>
    <Fieldset label={label} tooltip={tooltip}>
      <style jsx>{styles}</style>
        <div className={'input-container'} >
          <div 
            ref={inputWrapElement}
            className={`
            input-wrap
            ${autoFill && !disabled ? 'manor-prefilled-border' : ''}
            ${bordered ? 'input-border' : ''}
            ${invalid ? 'invalid' : ''}
            ${disabled ? 'disabled' : ''}
          `}
          >
            {renderPrefix(prefix, bordered, autoFill, disabled)}
            <div className='input-clear-wrap'>
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={setValue}
                className='input-default'
                autoComplete='off'
                ref={inputElement}
                onFocus={addFocus}
                onBlur={removeFocus}
              />
              {renderClearIcon(value, clearInput, autoFill)}
            </div>
            {renderSuffix(suffix, bordered, autoFill, disabled)}
          </div>
        </div>
      </Fieldset>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired
};

Input.defaultProps = {
  bordered: true,
};

export default Input;
