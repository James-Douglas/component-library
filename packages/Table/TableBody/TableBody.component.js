import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import StyledTableBody from './TableBody.styles';

const tablelvl2 = {
  variant: 'body',
};

const TableBody = ({
  component,
  children,
  className,
  theme,
}) => {
  const Component = component || 'tbody';
  return (
    <ManorProvider theme={theme}>
      <Tablelvl2Context.Provider value={tablelvl2}>
        <StyledTableBody
          as={Component}
          className={className}
        >
          {children || null}
        </StyledTableBody>
      </Tablelvl2Context.Provider>
    </ManorProvider>
  );
};

TableBody.propTypes = {
  /**
   *  'td' contents.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
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
TableBody.defaultProps = {
  className: '',
  children: '',
  component: '',
  theme: undefined,
};

export default TableBody;
