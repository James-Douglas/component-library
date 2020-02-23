import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import TableContext from '../Table/TableContext';

const StyledComponent = styled.div`
  display: table-cell;
  text-align: ${({ align }) => align};
  vertical-align: ${({ valign }) => valign};
  padding: ${({ padding, theme }) => {
    if (padding === 'checkbox' || padding === 'medium') {
      return theme.spacing['8'];
    }
    if (padding === 'small') {
      return theme.spacing['4'];
    }
    return 'none';
  }
};
`;

const TableCell = ({
  className,
  component,
  children,
  align,
  valign,
  colspan,
  rowspan,
  padding,
}) => {
  const table = React.useContext(TableContext);
  const tablelvl2 = React.useContext(Tablelvl2Context);

  let Component;
  if (component) {
    Component = component;
  } else if (tablelvl2 && tablelvl2.variant === 'head') {
    Component = 'th';
  } else {
    Component = 'td';
  }

  return (
    <StyledComponent
      as={Component}
      padding={padding || table.size}
      valign={valign}
      align={align}
      className={className}
      colSpan={colspan}
      rowSpan={rowspan}
    >
      {children || null}
    </StyledComponent>
  );
};


TableCell.propTypes = {
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
  /**
   *  'td' contents.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * This attribute contains a non-negative integer value that indicates for how many columns the cell extends.
   * Its default value is 1.
   *  Values higher than 1000 will be considered as incorrect and will be set to the default value (1)
   */
  colspan: PropTypes.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * This attribute contains a non-negative integer value that indicates for how many rows the cell extends.
   * Its default value is 1
   */
  rowspan: PropTypes.number,
  /**
   * This attribute contains 'default', 'checkbox', 'none'
   */
  padding: PropTypes.oneOf(['checkbox', 'none']),
  /**
   * This attribute specifies the vertical alignment of the content in a cell.
   */
  valign: PropTypes.oneOf(['top', 'middle', 'bottom', 'baseline']),
};
TableCell.defaultProps = {
  children: '',
  align: 'inherit',
  colspan: null,
  rowspan: null,
  className: null,
  component: '',
  padding: null,
  valign: 'top',
};

export default TableCell;
