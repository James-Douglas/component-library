import React from 'react';
import PropTypes from 'prop-types';
import StyledSubtitle from './Subtitle.styles';

const Subtitle = ({
  variant,
  children,
}) => (
  <StyledSubtitle variant={variant}>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Subtitle.defaultProps = {
  variant: 'primary',
  children: '',
};

export default Subtitle;
