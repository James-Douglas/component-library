import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledSubscript = styled.p`
  line-height: ${(props) => props.theme.lineHeight.snug};
  font-size: ${(props) => props.theme.fontSize['2xs']};
  letter-spacing: 0.15rem;
  font-weight: ${(props) => props.theme.fontWeight.normal};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.greyDarkest};
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
  ]),
};

Subscript.defaultProps = {
  children: '',
};

export default Subscript;
