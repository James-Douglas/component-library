import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import Checkbox from './Checkbox.component';

export const generateGroup = (colSize, children, callback) => {
  if (children) {
    return children.map((child) => {
      const component = React.cloneElement(child, { handleChange: callback })
      return (
        <Column col={colSize} key={`key-${child.props.id}`}>
          {component}
        </Column>
      )
    });
  }
  return null;
};

const CheckboxGroup = ({
  groupId, colSize, handleClick, handleKeyUp, children,
}) => (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div id={groupId} className="checkbox-group" onKeyUp={handleKeyUp}>
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
  handleKeyUp: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

CheckboxGroup.defaultProps = {
  colSize: '6',
  handleClick: () => { },
  handleKeyUp: () => { },
  children: [],
};

export default CheckboxGroup;