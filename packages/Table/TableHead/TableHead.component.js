import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import StyledTableHead from './TableHead.styles';

const tablelvl2 = {
  variant: 'head',
};

const TableHead = ({
  className,
  component,
  children,
  theme,
}) => {
  const Component = component || 'thead';
  return (
    <ManorProvider theme={theme}>
      <Tablelvl2Context.Provider value={tablelvl2}>
        <StyledTableHead
          as={Component}
          className={className}
        >
          {children || null}
        </StyledTableHead>
      </Tablelvl2Context.Provider>
    </ManorProvider>
  );
};

TableHead.propTypes = {
  /**
   * Extend the styles applied to the component.
   */
  className: PropTypes.string,
  /**
   * The content of the table, normally `th`.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};
TableHead.defaultProps = {
  className: '',
  component: 'thead',
  children: '',
  theme: undefined,
};

export default TableHead;
