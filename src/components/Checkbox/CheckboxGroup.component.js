import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';

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
  groupId, colSize, handleChange, children,
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

  return (
    <>
      <div id={groupId} className="checkbox-group">
        <Row>
          {generateGroup(colSize, children, handleCheckboxClick)}
        </Row>
      </div>
    </>
  );
}

CheckboxGroup.propTypes = {
  groupId: PropTypes.string.isRequired,
  colSize: PropTypes.string,
  handleChange: PropTypes.func,
  children: (props, propname, componentName) => componentName === 'Checkbox',
};

CheckboxGroup.defaultProps = {
  colSize: '6',
  handleChange: () => { },
  children: [],
};

export default CheckboxGroup;
