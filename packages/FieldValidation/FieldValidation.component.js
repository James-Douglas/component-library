import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import {
  StyledFieldValidation,
  StyledIconWrap,
  StyledMessage,
} from './FieldValidation.styles';

const FieldValidation = ({ message, theme }) => {
  if (!message || !message.length) return null;
  return (
    <ManorProvider theme={theme}>
      <StyledFieldValidation>
        <StyledMessage>
          <StyledIconWrap>
            <FontAwesomeIcon icon={faExclamationCircle} size="xs" />
          </StyledIconWrap>
          <Typography variant="body2">{message}</Typography>
        </StyledMessage>
      </StyledFieldValidation>
    </ManorProvider>
  );
};

FieldValidation.propTypes = {
  /**
   * The message to display. If null or empty string, this component will not render.
   */
  message: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

FieldValidation.defaultProps = {
  message: null,
  theme: undefined,
};

export default FieldValidation;
