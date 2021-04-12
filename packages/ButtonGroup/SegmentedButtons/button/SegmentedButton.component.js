import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { Typography } from '@comparethemarketau/manor-typography';
import BaseButton from '../BaseButton';
import ButtonLabel from '../ButtonLabel';

import {
  StyledSegmentedButtonContent,
  StyledWrapper,
} from './SegmentedButton.styles';

const SegmentedButton = ({
  id: propsId,
  title,
  value,
  name,
  contentWidth,
  selectedValue,
  invalid,
  disabled,
  handleToggle,
  handleFocus,
  handleBlur,
  handleClick,
  fixed,
}) => {
  const id = useId(propsId);
  const toggleHandler = () => {
    if (handleToggle) {
      handleToggle(value);
    }
  };
  return (
    <BaseButton
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
    >
      <ButtonLabel id={id}>
        <StyledWrapper disabled={disabled}>
          <StyledSegmentedButtonContent
            fixed={fixed}
            contentWidth={contentWidth}
          >
            <Typography variant="body1" component="div">{title}</Typography>
          </StyledSegmentedButtonContent>
        </StyledWrapper>
      </ButtonLabel>
    </BaseButton>
  );
};

SegmentedButton.propTypes = {
  /**
   * Unique identifier for the button
   */
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /**
   * The text content to render in the button
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
   * Sets the width of the content container for the SegmentedButton
   * Typically you would set the `contentWidth` prop on the `SegmentedButtonGroup` component which passes it in here,
   * rather then setting this prop on each `SegmentedButton`
   */
  contentWidth: PropTypes.string,
  /**
   * The value of the currently selected (toggled on) button.
   * (`SegmentedButtonGroup` will override any value provided to this prop if in use)
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
   * Disables the button when true.
   */
  disabled: PropTypes.bool,
  /**
   * Handler function called when a toggle is toggled on with the value of the button.
   */
  handleToggle: PropTypes.func,
  /**
   * Handler function call on focus of the button
   */
  handleFocus: PropTypes.func,
  /**
   * Handler function call on blur of the button
   */
  handleBlur: PropTypes.func,
  /**
   * Handler function called on click of the button
   */
  handleClick: PropTypes.func,
  /**
   * Whether or not the button with a fixed width.
   */
  fixed: PropTypes.bool,
};

SegmentedButton.defaultProps = {
  id: null,
  name: '',
  title: '',
  contentWidth: null,
  selectedValue: null,
  invalid: false,
  disabled: false,
  handleToggle: null,
  handleFocus: null,
  handleBlur: null,
  handleClick: null,
  fixed: false,
};

export default SegmentedButton;
