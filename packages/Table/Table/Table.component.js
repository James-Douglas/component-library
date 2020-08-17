import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import TableContext from './TableContext';
import StyledTable from './Table.styles';

const Table = ({
  className,
  size,
  children,
  component,
  ariaLabel,
  ariaDescribedby,
  theme,
}) => {
  const Component = component || 'table';
  const table = React.useMemo(() => ({ size }), [
    size,
  ]);

  return (
    <ManorProvider theme={theme}>
      <TableContext.Provider value={table}>
        <StyledTable
          as={Component}
          className={className}
          aria-label={ariaLabel}
          aria-describedby={ariaDescribedby}
        >
          {children || null}
        </StyledTable>
      </TableContext.Provider>
    </ManorProvider>
  );
};

Table.propTypes = {
  /**
   * The content of the table, normally `TableHead` and `TableBody` and `TableFooter`.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Allows TableCells to inherit size of the Table.
   */
  size: PropTypes.oneOf(['small', 'medium']),
  /**
   *Provides an accessible name for the table.
   */
  ariaLabel: PropTypes.string,
  /**
   *  Refers to the element that serves as the caption for the table.
   */
  ariaDescribedby: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Table.defaultProps = {
  className: '',
  component: 'table',
  size: 'medium',
  children: '',
  ariaLabel: null,
  ariaDescribedby: null,
  theme: undefined,
};

export default Table;
