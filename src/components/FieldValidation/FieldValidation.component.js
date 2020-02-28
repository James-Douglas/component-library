import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';

const StyledFieldValidation = styled.div`
  display: table;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex['30']};
  margin-top: ${({ theme }) => theme.spacing['8']};
`;

const StyledIconWrap = styled.div`
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

const StyledMessage = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.error500};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0;
`;

const FieldValidation = ({ message }) => {
  if (!message || !message.length) return null;
  return (
    <StyledFieldValidation>
      <StyledMessage>
        <StyledIconWrap>
          <FontAwesomeIcon icon={faExclamationCircle} size="xs" />
        </StyledIconWrap>
        <span>{message}</span>
      </StyledMessage>
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
