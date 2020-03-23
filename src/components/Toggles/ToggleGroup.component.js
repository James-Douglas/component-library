import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledToggleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const StyledValidationWrapper = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

export const getChildren = (children, name, selectedToggleValue, handleToggle, handleClick, validationMessage, contentWidth, contentHeight) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id || index}`;
    const propsToAdd = {
      key,
      name,
      selectedValue: selectedToggleValue,
      handleToggle,
      handleClick,
      invalid: !!validationMessage && validationMessage.length > 0,
      contentWidth,
      contentHeight,
    };
    if (!child.props.id) {
      propsToAdd.id = key;
    }
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  label,
  tooltip,
  validationMessage,
  id,
  name,
  handleToggle,
  handleClick,
  selectedValue,
  children,
  contentWidth,
  contentHeight,
  className,
}) => {
  const [selectedToggleValue, setSelectedToggleValue] = useState(selectedValue);

  const toggleHandler = (value) => {
    setSelectedToggleValue(value);
    if (handleToggle) {
      handleToggle(value);
    }
  };

  return (
    <>
      <Label htmlFor={id} text={label} tooltip={tooltip} />
      <StyledToggleGroup id={id} className={className}>
        {getChildren(children, name, selectedToggleValue, toggleHandler, handleClick, validationMessage, contentWidth, contentHeight)}
      </StyledToggleGroup>
      <StyledValidationWrapper>
        <FieldValidation message={validationMessage} />
      </StyledValidationWrapper>
    </>
  );
};

ToggleGroup.propTypes = {
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
   * Unique identifier for the toggle group
   */
  id: PropTypes.string,
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
};

ToggleGroup.defaultProps = {
  label: '',
  handleClick: null,
  tooltip: {},
  validationMessage: null,
  id: null,
  selectedValue: null,
  children: [],
  contentWidth: null,
  contentHeight: null,
  className: '',
};

export default ToggleGroup;
