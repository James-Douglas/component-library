import React from 'react';
import PropTypes from 'prop-types';
import StyledSubscript from './Subscript.styles';

const Subscript = ({
  children,
}) => (
  <StyledSubscript>
    {children}
  </StyledSubscript>
);

Subscript.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Subscript.defaultProps = {
  children: '',
};

export default Subscript;
