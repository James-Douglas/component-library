import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledOverline = styled.p`
  line-height: ${({ theme }) => theme.lineHeight.snug};
  font-size: ${({ theme }) => theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.placeholderText};
`;

const Overline = ({
  children,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledOverline>
      {children}
    </StyledOverline>
  </ThemeProvider>
);

Overline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

Overline.defaultProps = {
  children: '',
};

export default Overline;
