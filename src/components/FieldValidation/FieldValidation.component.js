import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import screens from '../../../config/screens';

const StyledFieldValidation = styled.div`
  display: inline-block;
  background: ${(props) => props.theme.colors.validationBackground};
  color: ${(props) => props.theme.colors.validationText};
  z-index: ${(props) => props.theme.zIndex['10']};
  margin-top: ${(props) => props.theme.spacing['8']};
  padding: ${(props) => `${props.theme.spacing['4']} ${props.theme.spacing['8']}`};

  @media (max-width: ${screens.xs}) {
    width: 100%;
  }
  @media (min-width: ${screens.xs}) {
    max-width: 85%;
  }
  @media (min-width: ${screens.sm}) {
    max-width: 85%;
  }
  @media (min-width: ${screens.md}) {
    max-width: 90%;
  }
`;

const StyledMessage = styled.p`
  margin: 0;
`;

const FieldValidation = ({ children, message }) => {
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

FieldValidation.defaultProps = {
  message: null,
  children: [],
};

export default FieldValidation;
