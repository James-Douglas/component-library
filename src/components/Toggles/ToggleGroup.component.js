import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import FieldValidation from '../FieldValidation/FieldValidation.component';
import useId from '../../hooks/useId';
import { StyledToggleGroup, StyledValidationWrapper } from './ToggleGroup.styles';

export const getChildren = (
  groupId,
  children,
  name,
  selectedToggleValue,
  handleToggle,
  handleClick,
  validationMessage,
  contentWidth,
  contentHeight,
  buttons,
) => (
  children.map((child, index) => {
    const key = `toggle-${groupId}-${index}`;
    const propsToAdd = {
      key,
      name,
      selectedValue: selectedToggleValue,
      handleToggle,
      handleClick,
      invalid: !!validationMessage && validationMessage.length > 0,
      contentWidth,
      contentHeight,
      button: buttons,
    };
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  id: propsId,
  label,
  tooltip,
  validationMessage,
  name,
  handleToggle,
  handleClick,
  selectedValue,
  children,
  contentWidth,
  contentHeight,
  className,
  buttons,
}) => {
  const groupId = useId(propsId);
  const [selectedToggleValue, setSelectedToggleValue] = useState(selectedValue);
  const toggleHandler = useCallback((value) => {
    setSelectedToggleValue(value);
    if (handleToggle) {
      handleToggle(value);
    }
  }, [setSelectedToggleValue, handleToggle]);
  // If the selected value externally changes we want to reflect this in our toggle selection state
  useEffect(() => {
    setSelectedToggleValue(selectedValue);
  }, [selectedValue, setSelectedToggleValue]);
  return (
    <>
      <Label htmlFor={groupId} text={label} tooltip={tooltip} />
      <StyledToggleGroup id={groupId} className={className} buttons={buttons} contentWidth={contentWidth}>
        {getChildren(groupId, children, name, selectedToggleValue, toggleHandler, handleClick, validationMessage, contentWidth, contentHeight, buttons)}
      </StyledToggleGroup>
      <StyledValidationWrapper>
        <FieldValidation message={validationMessage} />
      </StyledValidationWrapper>
    </>
  );
};

ToggleGroup.propTypes = {
  /**
   * Unique identifier for the toggle group
   */
  id: PropTypes.string,
  /**
   * Name property to be passed to the toggles - required for the underlying radio buttons
   */
  name: PropTypes.string.isRequired,
  /**
   * Handler function called when a toggle is toggled on with the value of the toggle.
   */
  handleToggle: PropTypes.func.isRequired,
  /**
   * Handler function called when a toggle is clicked with the value of the toggle.
   */
  handleClick: PropTypes.func,
  /**
   * Label for the ToggleGroup.
   */
  label: PropTypes.string,
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
   * The toggles to be rendered. They should all be the same type of toggle (`TextToggle`, `IconToggle`, etc).
   * Mixing toggles will result in undefined behaviour and violate the design system. Please don't.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOf([
      PropTypes.string,
      PropTypes.array,
      PropTypes.node,
    ])),
  ]),
  /**
   * For use with TextToggles (setting this prop has no effect for other toggle types)
   * Controls the width of the content container within the TextToggle, this can be used to ensure all
   * TextToggles maintain the same width.
   */
  contentWidth: PropTypes.string,
  /**
   * For use with TextToggles (setting this prop has no effect for other toggle types)
   * Controls the height of the content container within the TextToggle, this can be used to ensure all
   * TextToggles maintain the same height.
   */
  contentHeight: PropTypes.string,
  /**
   * Classes to be applied to the ToggleGroup component
   */
  className: PropTypes.string,
  /**
   * Whether or not the group should be rendered as segmented buttons.
   */
  buttons: PropTypes.oneOfType(['Flex', PropTypes.bool]),
};

ToggleGroup.defaultProps = {
  id: null,
  label: '',
  handleClick: null,
  tooltip: {},
  validationMessage: null,
  selectedValue: null,
  children: [],
  contentWidth: null,
  contentHeight: null,
  className: '',
  buttons: null,
};

export default ToggleGroup;
