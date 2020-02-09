import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screens from '../../../config/screens';

const StyledFieldValidation = styled.div`
  display: table;
  position: relative;
  background: ${({ theme }) => theme.colors.validationBackground};
  color: ${({ theme }) => theme.colors.invalid};
  z-index: ${({ theme }) => theme.zIndex['30']};
  margin-top: ${({ theme }) => theme.spacing['8']};
  padding: ${({ theme }) => `${theme.spacing['4']} ${theme.spacing['8']}`};

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

const FieldValidation = ({ message }) => {
  if (!message || !message.length) return null;
  return (
    <StyledFieldValidation>
      <StyledMessage>{message}</StyledMessage>
    </StyledFieldValidation>
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
