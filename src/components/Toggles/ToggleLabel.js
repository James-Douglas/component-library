import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledToggleLabel = styled.label`
  width: 100%;
  cursor: pointer;
  display: block;
  position: relative;
  transition : all 200ms ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.blueLight};
  }
`;

const StyledContent = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-bottom: 0;
`;

const ToggleLabel = ({ id, children }) => (
  <ThemeProvider theme={getTheme()}>
    <StyledToggleLabel htmlFor={id}>
      <StyledContent>{children}</StyledContent>
    </StyledToggleLabel>
  </ThemeProvider>
);

ToggleLabel.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]).isRequired,
};

export default ToggleLabel;
