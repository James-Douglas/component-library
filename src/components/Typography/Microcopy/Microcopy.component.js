import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledMicrocopy = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: ${(props) => props.theme.fontSize.xs};
  line-height: ${(props) => props.theme.lineHeight.snug};
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
