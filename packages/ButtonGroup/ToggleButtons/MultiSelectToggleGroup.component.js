import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { useId, useMountEffect } from '@comparethemarketau/manor-hooks';
import { tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { Label } from '@comparethemarketau/manor-label';
import { FieldValidation } from '@comparethemarketau/manor-field-validation';
import { StyledToggleGroup, StyledValidationWrapper } from './ToggleGroup.styles';

export const getChildren = (
  groupId,
  children,
  name,
  selectedToggleValues,
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
      selectedValues: selectedToggleValues,
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

const MultiSelectToggleGroup = ({
  id: propsId,
  label,
  tooltip,
  validationMessage,
  name,
  handleToggle,
  handleClick,
  selectedValues,
  children,
  contentWidth,
  contentHeight,
  className,
  buttons,
}) => {
  const groupId = useId(propsId);
  const firstUpdate = useRef(true);
  const [selectedToggleValues, setSelectedToggleValues] = useState(selectedValues || []);
  const toggleHandler = useCallback((value) => {
    if (selectedToggleValues.includes(value)) {
      setSelectedToggleValues(selectedToggleValues.filter((item) => item !== value));
    } else {
      setSelectedToggleValues([...selectedToggleValues, value]);
    }
  }, [selectedToggleValues, setSelectedToggleValues]);

  // If the selected value externally changes we want to reflect this in our toggle selection state
  useEffect(() => {
    setSelectedToggleValues(selectedValues);
  }, [selectedValues, setSelectedToggleValues]);

  useEffect(() => {
    if (handleToggle && !firstUpdate.current) {
      handleToggle(selectedToggleValues);
    }
  }, [selectedToggleValues, handleToggle]);

  // block the handleToggle from firing on initial render
  useMountEffect(() => {
    firstUpdate.current = false;
  });
  return (
    <>
      <Label htmlFor={groupId} text={label} tooltip={tooltip} />
      <StyledToggleGroup id={groupId} className={className} buttons={buttons} contentWidth={contentWidth}>
        {getChildren(groupId, children, name, selectedToggleValues, toggleHandler, handleClick, validationMessage, contentWidth, contentHeight, buttons)}
      </StyledToggleGroup>
      <StyledValidationWrapper>
        <FieldValidation message={validationMessage} />
      </StyledValidationWrapper>
    </>
  );
};

MultiSelectToggleGroup.propTypes = {
  /**
   * Unique identifier for the multi-select toggle group
   */
  id: PropTypes.string,
  /**
   * Name property to be passed to the toggles - required for the underlying checkboxes
   */
  name: PropTypes.string.isRequired,
  /**
   * Handler function called when a toggle is toggled
   * signature: () =>
   */
  handleToggle: PropTypes.func.isRequired,
  /**
   * Handler function called when a toggle is clicked with the value of the toggle.
   */
  handleClick: PropTypes.func,
  /**
   * Label for the CheckToggleGroup.
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
   * Values of the currently selected toggles
   */
  selectedValues: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
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
   * Classes to be applied to the CheckToggleGroup component
   */
  className: PropTypes.string,
  /**
   * Whether or not the group should be rendered as segmented buttons.
   */
  buttons: PropTypes.oneOfType([PropTypes.oneOf(['flex']), PropTypes.bool]),
};

MultiSelectToggleGroup.defaultProps = {
  id: null,
  label: '',
  handleClick: null,
  tooltip: {},
  validationMessage: null,
  selectedValues: [],
  children: [],
  contentWidth: null,
  contentHeight: null,
  className: '',
  buttons: null,
};

export default MultiSelectToggleGroup;
