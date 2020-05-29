import React from 'react';
import PropTypes from 'prop-types';
import BaseToggle from '../BaseToggle';
import ToggleLabel from '../ToggleLabel';
import useId from '../../../hooks/useId';

import { StyledContent, StyledTextToggleContent, StyledWrapper } from './TextToggle.styles';

const TextToggle = ({
  id: propsId,
  title,
  value,
  name,
  contentWidth,
  contentHeight,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
  button,
}) => {
  const id = useId(propsId);
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  return (
    <BaseToggle
      id={id}
      value={value}
      name={name}
      selectedValue={selectedValue}
      invalid={invalid}
      disabled={disabled}
      handleToggle={toggleHandler}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleClick={handleClick}
      button={button}
    >
      <ToggleLabel id={id} button={button}>
        <StyledWrapper button={button}>
          <StyledTextToggleContent contentWidth={contentWidth} contentHeight={contentHeight}>
            <StyledContent button={button}>{title}</StyledContent>
          </StyledTextToggleContent>
        </StyledWrapper>
      </ToggleLabel>
    </BaseToggle>
  );
};


TextToggle.propTypes = {
  /**
   * Unique identifier for the toggle
   */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /**
   * The text content to render in the toggle
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  /**
   * The value to be applied to the input field.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Sets the width of the content container for the TextToggle
   * Typically you would set the `contentWidth` prop on the `ToggleGroup` component which passes it in here,
   * rather then setting this prop on each `TextToggle`
   */
  contentWidth: PropTypes.string,
  /**
   * Sets the height of the content container for the TextToggle
   * Typically you would set the `contentHeight` prop on the `ToggleGroup` component which passes it in here,
   * rather then setting this prop on each `TextToggle`
   */
  contentHeight: PropTypes.string,
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
  /**
   * Whether or not to render the container as a button.
   */
  button: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

TextToggle.defaultProps = {
  id: null,
  name: '',
  title: '',
  contentWidth: null,
  contentHeight: null,
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
  button: null,
};

export default TextToggle;
