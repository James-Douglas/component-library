import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import StyledTableRow from './TableRow.styles';

const TableRow = ({
  className,
  component,
  hover,
  children,
  theme,
}) => {
  const Component = component || 'tr';
  return (
    <ManorProvider theme={theme}>
      <StyledTableRow
        as={Component}
        hover={hover}
        className={className}
      >
        {children || null}
      </StyledTableRow>
    </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};
TableRow.defaultProps = {
  className: '',
  component: 'tr',
  hover: false,
  children: '',
  theme: undefined,
};

export default TableRow;
