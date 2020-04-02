import React from 'react';
import PropTypes from 'prop-types';
import StyledOverline from './Overline.styles';

const Overline = ({
  children,
}) => (
  <StyledOverline>
    {children}
  </StyledOverline>
);

Overline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Overline.defaultProps = {
  children: '',
};

export default Overline;
