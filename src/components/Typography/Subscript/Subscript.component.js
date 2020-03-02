import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledSubscript = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey600};
`;

const Subscript = ({
  children,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledSubscript>
      {children}
    </StyledSubscript>
  </ThemeProvider>
);

Subscript.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Subscript.defaultProps = {
  children: '',
};

export default Subscript;
