import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  max-width: 190rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = ({ children, className }) => (
  <StyledContainer className={`container fixed ${className}`}>
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
