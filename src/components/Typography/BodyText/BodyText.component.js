import React from 'react';
import PropTypes from 'prop-types';
import StyledBodyText from './BodyText.styles';

const BodyText = ({
  variant,
  children,
}) => (
  <StyledBodyText variant={variant}>
    {children}
  </StyledBodyText>
);

BodyText.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BodyText.defaultProps = {
  variant: 'primary',
  children: '',
};

export default BodyText;
