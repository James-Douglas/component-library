import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledContainer = styled.div`
  width: ${({ theme }) => theme.maxWidth.full};
  margin: auto;
  padding-left: ${({ theme }) => theme.spacing[16]};
  padding-right: ${({ theme }) => theme.spacing[16]};
  max-width: ${({ theme }) => theme.container.maxWidth};
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Container = ({ children, className }) => (
  <ThemeProvider theme={getTheme()}>
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  </ThemeProvider>
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
