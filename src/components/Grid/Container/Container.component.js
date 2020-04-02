import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Container.styles';

const Container = ({ children, className }) => (
  <StyledContainer className={className}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  /**
   * Classes to be applied to the container element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Container.defaultProps = {
  className: '',
  children: [],
};

export default Container;
