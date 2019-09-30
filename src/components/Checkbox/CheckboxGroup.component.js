import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

const CheckboxGroup = ({
  groupId, colSize, handleClick, handleKeyUp, children,
}) => {
  const generateGroup = () => children.map((child) => (
    <Column col={colSize} key={`key-${child.props.id}`}>
      {child}
    </Column>
  ));

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div id={groupId} className="checkbox-group" onClick={handleClick} onKeyUp={handleKeyUp}>
        <Row>
          {generateGroup()}
        </Row>
      </div>
    </>
  );
};

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
  handleClick: () => {},
  handleKeyUp: () => {},
  children: [],
};

export default CheckboxGroup;
