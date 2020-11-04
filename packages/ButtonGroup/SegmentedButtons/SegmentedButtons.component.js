/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { Label } from '@comparethemarketau/manor-label';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import {
  StyledSegmentedButtons,
  StyledValidationWrapper,
  StyledEvenDivWrapper,
} from './SegmentedButtons.styles';
import SegmentedButton from './button/SegmentedButton.component';

export const generateButtons = (
  groupId,
  name,
  selectedButtonValue,
  handleToggle,
  handleClick,
  validationMessage,
  buttonsContent,
  fixed,
  contentWidth,
) => {
  const buttonArray = buttonsContent.map((entry, index) => {
    const key = `toggle-${groupId}-${index}`;
    const propsToAdd = {
      name,
      title: entry.label,
      value: entry.value,
      id: entry.id,
      selectedValue: selectedButtonValue,
      handleToggle,
      handleClick,
      invalid: !!validationMessage && validationMessage.length > 0,
      contentWidth,
      fixed,
    };
    return <SegmentedButton key={key} {...propsToAdd} />;
  });
  return buttonArray;
};

export const formatEvenOrOddButtons = (buttonArray, fixed, contentWidth) => {
  const evenButtonArray = [];
  let divWidth = 'auto';

  if (fixed) {
    if (contentWidth) {
      const contentWidthInt = parseInt(contentWidth.slice(0, -2), 10);
      divWidth = `${((contentWidthInt * 2 + 64) / 10).toString()}rem`;
    } else {
      divWidth = `${((175 * 2 + 64) / 10).toString()}rem`;
    }
  }

  if (buttonArray.length % 2 === 0) {
    for (let i = 0; i <= buttonArray.length / 2; i += 2) {
      evenButtonArray.push(
        <StyledEvenDivWrapper
          key={evenButtonArray.length + 1}
          divWidth={divWidth}
        >
          {[buttonArray[i], buttonArray[i + 1]]}
        </StyledEvenDivWrapper>,
      );
    }
    return evenButtonArray;
  }
  return buttonArray;
};

const SegmentedButtons = ({
  id: propsId,
  label,
  tooltip,
  validationMessage,
  name,
  handleToggle,
  handleClick,
  selectedValue,
  contentWidth,
  className,
  buttonsContent,
  flex,
  fixed,
}) => {
  const groupId = useId(propsId);
  const [selectedButtonValue, setSelectedButtonValue] = useState(selectedValue);
  const buttonHandler = useCallback(
    (value) => {
      setSelectedButtonValue(value);
      if (handleToggle) {
        handleToggle(value);
      }
    },
    [setSelectedButtonValue, handleToggle],
  );
  // If the selected value externally changes we want to reflect this in our toggle selection state
  useEffect(() => {
    setSelectedButtonValue(selectedValue);
  }, [selectedValue, setSelectedButtonValue]);

  const buttonArray = generateButtons(
    groupId,
    name,
    selectedButtonValue,
    buttonHandler,
    handleClick,
    validationMessage,
    buttonsContent,
    fixed,
    contentWidth,
  );

  return (
    <>
      <Label htmlFor={groupId} text={label} tooltip={tooltip} />
      <StyledSegmentedButtons
        id={groupId}
        className={className}
        contentWidth={contentWidth}
        flex={flex}
        fixed={fixed}
        cols={buttonArray.length}
      >
        {formatEvenOrOddButtons(buttonArray, fixed, contentWidth)}
      </StyledSegmentedButtons>
      <StyledValidationWrapper>
        <FieldValidation message={validationMessage} />
      </StyledValidationWrapper>
    </>
  );
};

SegmentedButtons.propTypes = {
  /**
   * Unique identifier for the segmented button group
   */
  id: PropTypes.string,
  /**
   * Name property to be passed to the buttons - required for the underlying radio buttons
   */
  name: PropTypes.string.isRequired,
  /**
   * Handler function called when a button is selected on with the value of the button.
   */
  handleToggle: PropTypes.func.isRequired,
  /**
   * Handler function called when a button is clicked with the value of the button.
   */
  handleClick: PropTypes.func,
  /**
   * Label for the SegementedButtonGroup.
   */
  label: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Value of the currently selected toggle (use to pre-select)
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * For use with TextToggles (setting this prop has no effect for other toggle types)
   * Controls the width of the content container within the TextToggle, this can be used to ensure all
   * TextToggles maintain the same width.
   */
  contentWidth: PropTypes.string,
  /**
   * Classes to be applied to the SegementedButtonGroup component
   */
  className: PropTypes.string,
  /**
   * Drives how many buttons will render and their content.
   */
  buttonsContent: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    }),
  ),
  /**
   * Whether or not the group should be rendered as fixed width segmented buttons.
   */
  fixed: PropTypes.bool,
  /**
   * Whether or not the group should be rendered as flex width segmented buttons.
   */
  flex: PropTypes.bool,
};

SegmentedButtons.defaultProps = {
  id: null,
  label: '',
  handleClick: null,
  tooltip: {},
  validationMessage: null,
  selectedValue: null,
  contentWidth: null,
  className: '',
  buttonsContent: [],
  fixed: false,
  flex: false,
};

export default SegmentedButtons;
