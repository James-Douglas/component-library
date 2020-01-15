import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledMicrocopy = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.lineHeight.snug};
`;

const Microcopy = ({
  children,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledMicrocopy>
      {children}
    </StyledMicrocopy>
  </ThemeProvider>
);

Microcopy.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Microcopy.defaultProps = {
  children: '',
};

export default Microcopy;
