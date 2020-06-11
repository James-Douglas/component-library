import React from 'react';
import PropTypes from 'prop-types';
import StyledSr from './SROnly.styles';

const SROnly = ({
  children,
}) => (
  <StyledSr>
    {children}
  </StyledSr>
);

SROnly.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

SROnly.defaultProps = {
  children: '',
};

export default SROnly;
