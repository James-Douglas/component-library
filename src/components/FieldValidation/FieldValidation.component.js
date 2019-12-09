import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';

const StyledFieldValidation = styled.div`
  position: absolute;
  background: ${(props) => props.theme.colors.validationBackground};
  color: ${(props) => props.theme.colors.validationText};
  z-index: ${(props) => props.theme.zIndex['10']};
  margin-top: ${(props) => props.theme.spacing['8']}; 
  padding: ${(props) => `${props.theme.spacing['4']} ${props.theme.spacing['8']}`};
`;

const StyledMessage = styled.p`
  margin: 0;
`;

const FieldValidation = ({ message }) => {
  if (!message || !message.length) return null;
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledFieldValidation>
        <StyledMessage>{message}</StyledMessage>
      </StyledFieldValidation>
    </ThemeProvider>
  );
};

FieldValidation.propTypes = {
  /**
   * The message to display. If null or empty string, this component will not render.
   */
  message: PropTypes.string,
};

FieldValidation.defaultProps = {
  message: null,
};

export default FieldValidation;
