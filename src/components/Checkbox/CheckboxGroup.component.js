import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hasTooltipContent, getScreenReaderLabel } from 'utils/form';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import { InlineTooltip, tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Label from '../Label/Label.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledRow = styled(Row)`
  margin-bottom: ${(props) => props.theme.spacing[16]};
`;

export const generateGroup = (colSize, children, callback) => {
  if (children) {
    return children.map((child) => {
      const component = React.cloneElement(child, { handleChange: callback });
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
  forceFullWidth,
  validationMessage,
  groupId,
  colSize,
  handleChange,
  children,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const desktop = useIsDesktop(false);

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
    <>
      <Label forId={groupId} text={label} tooltip={tooltip} fullWidth={forceFullWidth} />
      <StyledRow>
        <Column cols={desktop && !forceFullWidth ? '10' : '12'}>
          <StyledContainer id={groupId}>
            <Row>
              {generateGroup(colSize, children, handleCheckboxClick)}
            </Row>
          </StyledContainer>
          <FieldValidation message={validationMessage} />
        </Column>
        {desktop && hasTooltipContent(tooltip)
        && (
          <Column cols={2}>
            <InlineTooltip
              title={tooltip.title}
              body={tooltip.body}
              screenReaderLabel={getScreenReaderLabel(tooltip.screenReaderLabel, label)}
              justifyEnd={tooltip.justifyEnd}
            />
          </Column>
        )}
      </StyledRow>
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
};

CheckboxGroup.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: false,
  validationMessage: null,
  colSize: '6',
  handleChange: () => { },
  children: [],
};

export default CheckboxGroup;
