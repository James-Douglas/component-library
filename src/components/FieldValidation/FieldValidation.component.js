import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { StyledFieldValidation, StyledIconWrap, StyledMessage } from './FieldValidation.styles';

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
