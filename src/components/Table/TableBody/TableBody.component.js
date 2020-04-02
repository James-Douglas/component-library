import React from 'react';
import PropTypes from 'prop-types';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import StyledTableBody from './TableBody.styles';

const tablelvl2 = {
  variant: 'body',
};

const TableBody = ({
  component,
  children,
  className,
}) => {
  const Component = component || 'tbody';
  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <StyledTableBody
        as={Component}
        className={className}
      >
        {children || null}
      </StyledTableBody>
    </Tablelvl2Context.Provider>
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
};
TableBody.defaultProps = {
  className: '',
  children: '',
  component: '',
};

export default TableBody;
