import React from 'react';
import PropTypes from 'prop-types';
import StyledSr from './SRonly.styles';

const SRonly = ({
  children,
}) => (
  <StyledSr>
    {children}
  </StyledSr>
);

SRonly.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

SRonly.defaultProps = {
  children: '',
};

export default SRonly;
