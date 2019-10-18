import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import Fieldset, { defaultFieldsetProps, fieldsetPropTypes } from '../Fieldset/Fieldset.component';

const styles = css`
  .checkbox-group {
    @apply mb-16;
  }
`;

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
  fieldsetProps, groupId, colSize, handleChange, children,
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

  useDidUpdateEffect(handleChange, [selectedCheckboxes], [handleChange, selectedCheckboxes]);

  const {
    label, tooltip, validationMessage, supportingElements,
  } = fieldsetProps;

  return (
    <Fieldset
      label={label}
      tooltip={tooltip}
      forceFullWidth
      validationMessage={validationMessage}
      supportingElements={supportingElements}
    >
      <style jsx="true">{styles}</style>
      <div id={groupId} className="checkbox-group">
        <Row>
          {generateGroup(colSize, children, handleCheckboxClick)}
        </Row>
      </div>
    </Fieldset>
  );
};

CheckboxGroup.propTypes = {
  fieldsetProps: PropTypes.shape(fieldsetPropTypes),
  groupId: PropTypes.string.isRequired,
  colSize: PropTypes.string,
  handleChange: PropTypes.func,
  children: (props, propname, componentName) => componentName === 'Checkbox',
};

CheckboxGroup.defaultProps = {
  fieldsetProps: defaultFieldsetProps,
  colSize: '6',
  handleChange: () => { },
  children: [],
};

export default CheckboxGroup;
