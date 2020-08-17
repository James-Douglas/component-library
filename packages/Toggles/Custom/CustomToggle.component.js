import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';

const CustomToggle = ({
  id: propsId,
  value,
  name,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
  children,
  theme,
}) => {
  const id = useId(propsId);
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  return (
    <ManorProvider theme={theme}>
      <BaseToggle
        id={id}
        type="custom"
        value={value}
        name={name}
        selectedValue={selectedValue}
        invalid={invalid}
        disabled={disabled}
        handleToggle={toggleHandler}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleClick={handleClick}
        theme={theme}
      >
        <ToggleLabel id={id} theme={theme}>
          {children}
        </ToggleLabel>
      </BaseToggle>
    </ManorProvider>
  );
};

CustomToggle.propTypes = {
  /**
   * Unique identifier for the CustomToggle
   */
  id: PropTypes.string,
  /**
   * Value applied to the input field
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * The value of the currently selected (toggled on) toggle.
   * (`ToggleGroup` will override any value provided to this prop if in use)
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name to be applied to the input field.
   */
  name: PropTypes.string,
  /**
   * Applies invalid styling when true.
   */
  invalid: PropTypes.bool,
  /**
   * Disables the toggle when true.
   */
  disabled: PropTypes.bool,
  /**
   * Handler function called when a toggle is toggled on with the value of the toggle.
   */
  handleToggle: PropTypes.func,
  /**
   * Handler function call on focus of the toggle
   */
  handleFocus: PropTypes.func,
  /**
   * Handler function call on blur of the toggle
   */
  handleBlur: PropTypes.func,
  /**
   * Handler function called on click of the toggle
   */
  handleClick: PropTypes.func,
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

CustomToggle.defaultProps = {
  id: null,
  name: '',
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  children: [],
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
  theme: undefined,
};

export default CustomToggle;
