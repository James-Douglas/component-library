import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tablelvl2Context from '../Table/Tablelvl2Context';

const tablelvl2 = {
  variant: 'body',
};

const StyledComponent = styled.div`
  display: table-row-group;
`;
const TableBody = ({
  component,
  children,
  className,
}) => {
  const Component = component || 'tbody';
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
