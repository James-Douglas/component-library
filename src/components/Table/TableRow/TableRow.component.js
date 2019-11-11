import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Table/styles';
import Tablelvl2Context from '../Table/Tablelvl2Context';


const TableRow = ({
  className,
  component,
  hover,
  children,
}) => {
  const tablelvl2 = React.useContext(Tablelvl2Context);
  const tableHead = tablelvl2 && tablelvl2.variant === 'head' ? 'head' : '';
  const tableFoot = tablelvl2 && tablelvl2.variant === 'footer' ? 'footer' : '';
  const hoverClass = hover ? 'root-table-row-hover' : '';
  const Component = component || 'tr';
  return (
    <>
      <style jsx>{styles}</style>
      <Component className={`root-table-row ${tableHead} ${tableFoot} ${hoverClass} ${className}`}>{children}</Component>
    </>
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
