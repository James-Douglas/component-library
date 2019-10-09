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
  groupId, colSize, handleClick, children,
}) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxClick = ({ id, value }) => {
    console.warn(`${id} ${value}`)
    if (value) {
      const newSelectedCheckboxes = [...selectedCheckboxes, {id, value}];
      setSelectedCheckboxes(newSelectedCheckboxes);
    } else {
      // setSelectedCheckboxes('poop');
      // setSelectedCheckboxes(selectedCheckboxes.filter((selectedCheckbox) => selectedCheckbox.id !== id));
      const exists = selectedCheckboxes.find((checkbox) => checkbox.id === id);
      if (exists) {
        const newSelectedCheckboxes = selectedCheckboxes.filter((selectedCheckbox) => selectedCheckbox.id !== id);
        setSelectedCheckboxes(newSelectedCheckboxes);
      }
    }
  };

  useDidUpdateEffect(handleClick, [selectedCheckboxes], [handleClick, selectedCheckboxes]);

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
  handleClick: PropTypes.func,
  children: (props, propname, componentName) => componentName === 'Checkbox',
};

CheckboxGroup.defaultProps = {
  colSize: '6',
  handleClick: () => { },
  children: [],
};

export default CheckboxGroup;
