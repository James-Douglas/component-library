import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

const FluidContainer = ({ children, className }) => (
  <StyledContainer className={className}>
    {children}
  </StyledContainer>
);

FluidContainer.propTypes = {
  /**
   * Classes to be applied to the FluidContainer element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

FluidContainer.defaultProps = {
  className: '',
  children: [],
};

export default FluidContainer;
