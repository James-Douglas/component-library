import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

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
}) => (
  <>
    <div id={groupId} className="checkbox-group">
      <Row>
        {generateGroup(colSize, children, handleClick)}
      </Row>
    </div>
  </>
);

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
