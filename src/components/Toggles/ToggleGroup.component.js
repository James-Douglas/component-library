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

export const getType = (children) => (children.find(({ props }) => props && props.label && props.label.length > 25) ? 'rectangle' : 'square');

export const getChildren = (children, type, name, selectedToggleValue, handleToggle, rectOptions, validationMessage) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id || index}`;
    const propsToAdd = {
      key,
      name,
      selectedValue: selectedToggleValue,
      handleToggle,
      type,
      invalid: !!validationMessage && validationMessage.length > 0,
    };
    if (!child.props.id) propsToAdd.id = key;
    if (type === 'rectangle') propsToAdd.rectOptions = rectOptions;
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
  selectedValue,
  children,
  rectOptions,
  className,
}) => {
  const [selectedToggleValue, setSelectedToggleValue] = useState(selectedValue);
  const type = getType(children);

  const toggleHandler = (value) => {
    setSelectedToggleValue(value);
    if (handleToggle) {
      handleToggle(value);
    }
  };

  return (
    <>
      <Label forId={id} text={label} tooltip={tooltip} />
      <StyledToggleGroup id={id} className={className}>
        {getChildren(children, type, name, selectedToggleValue, toggleHandler, rectOptions, validationMessage)}
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
   * Options object for rectangular toggles (see Toggle documentation)
   */
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
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
   * Classes to be applied to the ToggleGroup component
   */
  className: PropTypes.string,
};

ToggleGroup.defaultProps = {
  label: '',
  tooltip: {},
  validationMessage: null,
  id: null,
  selectedValue: null,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
  className: '',
};

export default ToggleGroup;
