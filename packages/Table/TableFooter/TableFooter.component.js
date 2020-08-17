import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import StyledTableFooter from './TableFooter.styles';

const tablelvl2 = {
  variant: 'footer',
};

const TableFooter = ({
  component,
  children,
  className,
  theme,
}) => {
  const Component = component || 'tfoot';
  return (
    <ManorProvider theme={theme}>
      <Tablelvl2Context.Provider value={tablelvl2}>
        <StyledTableFooter
          as={Component}
          className={className}
        >
          {children || null}
        </StyledTableFooter>
      </Tablelvl2Context.Provider>
    </ManorProvider>
  );
};

TableFooter.propTypes = {
  /**
   * The content of the table, normally `td`.
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};
TableFooter.defaultProps = {
  className: '',
  children: '',
  component: '',
  theme: undefined,
};

export default TableFooter;
