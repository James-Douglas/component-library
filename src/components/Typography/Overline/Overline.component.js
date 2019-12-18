import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledOverline = styled.p`
  line-height: ${(props) => props.theme.lineHeight.snug};
  font-size: ${(props) => props.theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.placeholderText};
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
