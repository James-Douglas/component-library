import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tablelvl2Context from '../Table/Tablelvl2Context';

const tablelvl2 = {
  variant: 'footer',
};

const StyledComponent = styled.div`
  display: table-cell;
  vertical-align: inherit;
`;

const TableFooter = ({
  component,
  children,
  className,
}) => {
  const Component = component || 'tfoot';
  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <StyledComponent
        as={Component}
        className={className}
      >
        {children || null}
      </StyledComponent>
    </Tablelvl2Context.Provider>
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
};
TableFooter.defaultProps = {
  className: '',
  children: '',
  component: '',
};

export default TableFooter;
