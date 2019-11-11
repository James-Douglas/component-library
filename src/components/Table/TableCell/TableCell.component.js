import React from 'react';
import PropTypes from 'prop-types';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import TableContext from '../Table/TableContext';
import styles from '../Table/styles';


const TableCell = ({
  className,
  component,
  children,
  align,
  colspan,
  rowspan,
  padding,
}) => {
  const table = React.useContext(TableContext);
  const tablelvl2 = React.useContext(Tablelvl2Context);
  const alignClass = (align && align !== 'inherit') ? `text-${align}` : '';
  const paddingFromTable = table.size && table.size === 'small' ? 'table-padding-small' : 'table-padding-medium';
  let paddingCell;
  if (padding === 'checkbox') {
    paddingCell = 'padding-checkbox';
  } else if (padding === 'none') {
    paddingCell = 'padding-none';
  } else {
    paddingCell = null;
  }

  let Component;
  if (component) {
    Component = component;
  } else if (tablelvl2 && tablelvl2.variant === 'head') {
    Component = 'th';
  } else {
    Component = 'td';
  }

  return (
    <>
      <style jsx>{styles}</style>
      <Component className={`root-table-cell ${paddingCell} ${paddingFromTable} ${alignClass} ${className}`} colSpan={colspan} rowSpan={rowspan}>{children}</Component>
    </>
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
};
TableCell.defaultProps = {
  children: '',
  align: 'inherit',
  colspan: null,
  rowspan: null,
  className: null,
  component: '',
  padding: null,
};

export default TableCell;
