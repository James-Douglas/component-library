import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './TableRow.styles';

const TableRow = ({
  className,
  component,
  hover,
  children,
}) => {
  const Component = component || 'tr';
  return (
    <StyledTableRow
      as={Component}
      hover={hover}
      className={className}
    >
      {children || null}
    </StyledTableRow>
  );
};

TableRow.propTypes = {
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
  /**
   * The content of the table, normally `td` ot `th`.
   */
  component: PropTypes.elementType,
  /**
   * hover on tr.
   */
  hover: PropTypes.bool,
  /**
   * The content of the tr, normally `td`.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
TableRow.defaultProps = {
  className: '',
  component: 'tr',
  hover: false,
  children: '',
};

export default TableRow;
