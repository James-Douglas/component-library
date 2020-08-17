import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import StyledOptionalText from './SupportingElements.styles';

const SupportingElements = ({
  required, disabled, label, additionalContent, validationMessage, theme,
}) => {
  if ((required && !additionalContent) || disabled || validationMessage) return null;
  return (
    <ManorProvider theme={theme}>
      <StyledOptionalText>
        {additionalContent}
        {!required && (
          <>
            <Typography variant="srOnly">The {label} field is optional</Typography>
            <Typography variant="caption">Optional</Typography>
          </>
        )}
      </StyledOptionalText>
    </ManorProvider>
  );
};

SupportingElements.propTypes = {
  /**
   * Whether the field is required, if true the 'Optional' text does not render
   */
  required: PropTypes.bool.isRequired,
  /**
   * Label for the form component
   */
  label: PropTypes.string.isRequired,
  /**
   * Whether the field has validationMessage
   */
  validationMessage: PropTypes.string,
  /**
   * Whether the field is disabled, if true Optional Text will not be rendered even if field is required
   */
  disabled: PropTypes.bool,
  /**
   * Any additional content to be rendered within the OptionalText container
   * (current use case - text area character count)
   */
  additionalContent: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

SupportingElements.defaultProps = {
  additionalContent: null,
  validationMessage: null,
  disabled: false,
  theme: undefined,
};

export default SupportingElements;
