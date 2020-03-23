import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledInnerRow = styled(Row)`
  margin: 0;
`;

const StyledColumn = styled(Column)`
  padding-left: 0;
  padding-right: 0;
`;

export const generateGroup = (colSize, children, callback, selectedCheckboxes) => {
  if (children) {
    return children.map((child) => {
      const component = React.cloneElement(child, { handleChange: callback, isSelected: selectedCheckboxes.includes(child.props.id) });
      return (
        <StyledColumn cols={colSize} key={`key-${child.props.id}`}>
          {component}
        </StyledColumn>
      );
    });
  }
  return null;
};

const CheckboxGroup = ({
  label,
  tooltip,
  validationMessage,
  groupId,
  colSize,
  handleChange,
  selected,
  children,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(selected);
  const desktop = useIsDesktop(false);
  const didMount = useRef(false);

  const handleCheckboxClick = (id) => {
    const exists = selectedCheckboxes.includes(id);
    if (!exists) {
      const newSelectedCheckboxes = [...selectedCheckboxes, id];
      setSelectedCheckboxes(newSelectedCheckboxes);
    } else {
      const newSelectedCheckboxes = selectedCheckboxes.filter((selectedCheckbox) => selectedCheckbox !== id);
      setSelectedCheckboxes(newSelectedCheckboxes);
    }
  };

  useEffect(() => {
    if (didMount.current) {
      handleChange(selectedCheckboxes);
    } else {
      didMount.current = true;
    }
  }, [handleChange, selectedCheckboxes]);

  return (
    <>
      <Label htmlFor={groupId} text={label} tooltip={tooltip} />
      <Row removeMarginBottom>
        <Column cols={desktop ? '10' : '12'}>
          <StyledContainer id={groupId}>
            <StyledInnerRow>
              {generateGroup(colSize, children, handleCheckboxClick, selectedCheckboxes)}
            </StyledInnerRow>
          </StyledContainer>
          <FieldValidation message={validationMessage} />
        </Column>
      </Row>
    </>
  );
};

CheckboxGroup.propTypes = {
  /**
   * The checkbox ID. This is required, as it informs the label and the value of the checkbox.
   */
  groupId: PropTypes.string.isRequired,
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
   * Defines the sizing of the columns to wrap the checkboxes in.
   */
  colSize: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Called whenever a checkbox is selected or deselected. Is called with an array of objects representing the currently
   selected checkboxes (in the form `{id, value}`)
   */
  handleChange: PropTypes.func,
  /**
   * Sets the selected checkboxes
   */
  selected: PropTypes.arrayOf(PropTypes.string),
  /**
   * The child Checkbox components to render in the CheckboxGroup
   */
  children: (props, propname, componentName) => componentName === 'Checkbox',
};

CheckboxGroup.defaultProps = {
  label: '',
  tooltip: {},
  validationMessage: null,
  colSize: '6',
  handleChange: () => { },
  selected: [],
  children: [],
};

export default CheckboxGroup;
