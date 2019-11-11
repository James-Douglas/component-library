import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import UseFieldset from '../../hooks/useFieldset';

export const generateGroup = (colSize, children, callback) => {
  if (children) {
    return children.map((child) => {
      const component = React.cloneElement(child, { handleChange: callback });
      return (
        <Column col={colSize} key={`key-${child.props.id}`}>
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
  forceFullWidth,
  validationMessage,
  groupId,
  colSize,
  handleChange,
  children,
  disableFieldset,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxClick = ({ id, value }) => {
    const exists = selectedCheckboxes.find((checkbox) => checkbox.id === id);
    if (value && !exists) {
      const newSelectedCheckboxes = [...selectedCheckboxes, { id, value }];
      setSelectedCheckboxes(newSelectedCheckboxes);
    } else if (!value && exists) {
      const newSelectedCheckboxes = selectedCheckboxes.filter((selectedCheckbox) => selectedCheckbox.id !== id);
      setSelectedCheckboxes(newSelectedCheckboxes);
    }
  };

  useEffect(() => {
    handleChange(selectedCheckboxes);
  }, [handleChange, selectedCheckboxes]);

  return (
    <UseFieldset
      disableFieldset={disableFieldset}
      label={label}
      tooltip={tooltip}
      validationMessage={validationMessage}
      forceFullWidth={forceFullWidth}
    >
      <div id={groupId} className="checkbox-group">
        <Row>
          {generateGroup(colSize, children, handleCheckboxClick)}
        </Row>
      </div>
    </UseFieldset>
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
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)
   */
  forceFullWidth: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Defines the sizing of the columns to wrap the checkboxes in.
   */
  colSize: PropTypes.string,
  /**
   * Called whenever a checkbox is selected or deselected. Is called with an array of objects representing the currently
   selected checkboxes (in the form `{id, value}`)
   */
  handleChange: PropTypes.func,
  /**
   * The child Checkbox components to render in the CheckboxGroup
   */
  children: (props, propname, componentName) => componentName === 'Checkbox',
  disableFieldset: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  colSize: '6',
  handleChange: () => { },
  children: [],
  disableFieldset: false,
};

export default CheckboxGroup;
