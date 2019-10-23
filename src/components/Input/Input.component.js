import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.component';
import Fieldset from '../Fieldset/Fieldset.component';
import styles from './styles';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';

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
          <div className="sr-only">Clears the{label}{' '}field.</div>
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

export const getSupportingElements = (required) => {
  if (required) return null;

  return (
    <div className="supporting-elements">
      <style jsx>{styles}</style>
      <span className="manor-subscript">Optional</span>
    </div>
  );
};

export const getInitialValue = (valueMasking, prefillValue) => {
  if (valueMasking && prefillValue) {
    const { parsed } = valueMasking(prefillValue);
    return parsed;
  } if (prefillValue) {
    return prefillValue;
  }
  return '';
};

const Input = ({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  type,
  placeholder,
  prefillValue,
  required,
  disabled,
  bordered,
  prefixContent,
  suffixContent,
  autocomplete,
  maxlength,
  handleChange,
  handleFocus,
  handleBlur,
  valueMasking,
  dataList,
}) => {
  const [value, setValue] = useState(getInitialValue(valueMasking, prefillValue));
  const [isAutofill, setIsAutofill] = useState(!!prefillValue);

  const inputWrapElement = useRef(null);

  const clearInput = () => {
    setIsAutofill(false);
    setValue('');
    handleChange('');
  };

  const handleOnChange = (e) => {
    setIsAutofill(false);

    if (valueMasking) {
      const { raw, parsed } = valueMasking(e.target.value);
      setValue(parsed || '');
      handleChange(parsed, raw);
    } else {
      setValue(e.target.value);
      handleChange(e.target.value);
    }
  };

  useEffect(() => {
    if (valueMasking) {
      const { parsed } = valueMasking(prefillValue);
      setValue(parsed || '');
    } else {
      setValue(prefillValue);
    }
  }, [prefillValue, valueMasking]);

  const onFocus = () => {
    if (handleFocus) {
      handleFocus();
    }
    toggleFocus();
  };

  const onBlur = () => {
    if (handleBlur) {
      handleBlur();
    }
    toggleFocus();
  };

  const toggleFocus = () => {
    const { current } = inputWrapElement;
    if (current) {
      current.classList.toggle('input-wrap-focus');
    }
  };

  const prefillClass = `${isAutofill && !disabled ? 'manor-prefilled-border' : ''}`;
  const borderClass = `${bordered ? 'input-border' : ''}`;
  const invalidClass = `${validationMessage && validationMessage.length ? 'invalid' : ''}`;
  const disabledClass = `${disabled ? 'disabled' : ''}`;
  return (
    <>
      <Fieldset label={label} tooltip={tooltip} forceFullWidth={forceFullWidth} validationMessage={validationMessage} supportingElements={getSupportingElements(required)}>
        <style jsx>{styles}</style>
        <div className="input-container">
          <div ref={inputWrapElement} className={`input-wrap ${prefillClass} ${borderClass} ${invalidClass} ${disabledClass}`}>

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
                onFocus={onFocus}
                onBlur={onBlur}
                maxLength={maxlength}
                className={`
                  input-default
                  ${isAutofill && !disabled ? 'manor-prefilled' : ''}
                `}
              />

              {renderClearIcon(value, clearInput, isAutofill, label)}

            </div>

            {renderAffix('suffix', suffixContent, bordered, isAutofill, disabled)}

          </div>

          {dataList && <div>{dataList()}</div>}

        </div>
      </Fieldset>
    </>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  forceFullWidth: PropTypes.bool,
  validationMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  maxlength: PropTypes.number,
  valueMasking: PropTypes.func,
  prefillValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  bordered: PropTypes.bool,
  autocomplete: PropTypes.string,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  dataList: PropTypes.func,
  suffixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

Input.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  valueMasking: null,
  maxlength: null,
  type: 'text',
  placeholder: '',
  prefillValue: '',
  prefixContent: '',
  suffixContent: '',
  autocomplete: 'off',
  handleFocus: null,
  handleBlur: null,
  required: true,
  disabled: false,
  bordered: true,
  dataList: null,
};

export default Input;
