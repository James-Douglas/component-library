import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import FieldValidation from '../FieldValidation/FieldValidation.component';
import { StyledContainer, StyledInnerRow } from './CheckboxGroup.styles';
import useId from '../../hooks/useId';

export const generateGroup = (colSize, children, callback, selectedCheckboxes) => {
  if (children) {
    return children.map((child) => {
      const component = React.cloneElement(child, { handleChange: callback, isSelected: selectedCheckboxes.includes(child.props.id) });
      return (
        <Column cols={colSize} key={`key-${child.props.id}`}>
          {component}
        </Column>
      );
    });
  }
  return null;
};

const CheckboxGroup = ({
  label,
  tooltip,
  validationMessage,
  groupId: propsGroupId,
  colSize,
  handleChange,
  selected,
  children,
}) => {
  const groupId = useId(propsGroupId);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(selected);
  const desktop = useIsDesktop(false);
  const didMount = useRef(false);

  const handleCheckboxClick = useCallback((id) => {
    const exists = selectedCheckboxes.includes(id);
    if (!exists) {
      const newSelectedCheckboxes = [...selectedCheckboxes, id];
      setSelectedCheckboxes(newSelectedCheckboxes);
    } else {
      const newSelectedCheckboxes = selectedCheckboxes.filter((selectedCheckbox) => selectedCheckbox !== id);
      setSelectedCheckboxes(newSelectedCheckboxes);
    }
  }, [selectedCheckboxes]);

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
        <Column cols={desktop ? 10 : 12}>
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
   * Unique identifier for the CheckboxGroup.
   */
  groupId: PropTypes.string,
  /**
   * Label for the CheckboxGroup.
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
   * Called whenever a checkbox is selected or deselected. It is called with an array of ids representing the currently
   selected checkboxes)
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
  groupId: null,
  label: '',
  tooltip: {},
  validationMessage: null,
  colSize: '6',
  handleChange: () => { },
  selected: [],
  children: [],
};

export default CheckboxGroup;
