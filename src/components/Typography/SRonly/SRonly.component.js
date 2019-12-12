import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import getTheme from 'utils/getTheme';

const StyledSr = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const SRonly = ({
  children,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledSr>
      {children}
    </StyledSr>
  </ThemeProvider>
);

SRonly.propTypes = {
  children: PropTypes.string,
};

SRonly.defaultProps = {
  children: '',
};

export default SRonly;
