import React from 'react';
import PropTypes from 'prop-types';
import StyledMicrocopy from './Microcopy.styles';

const Microcopy = ({
  children,
}) => (
  <StyledMicrocopy>
    {children}
  </StyledMicrocopy>
);

Microcopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Microcopy.defaultProps = {
  children: '',
};

export default Microcopy;
