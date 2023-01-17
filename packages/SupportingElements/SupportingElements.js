import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@comparethemarketau/manor-typography';
import StyledOptionalText from './SupportingElements.styles';

const SupportingElements = ({
  required, disabled, label, additionalContent, validationMessage, align,
}) => {
  if ((required && !additionalContent) || disabled || validationMessage) return null;
  const shouldAlignRight = (align === 'bottomRight' || align === 'topRight');
  const isAtBottom = (align === 'bottomRight' || align === 'bottomLeft');

  return (
    <StyledOptionalText alignRight={shouldAlignRight} bottom={isAtBottom}>
      {additionalContent}
      {!required && (
        <>
          <Typography variant="srOnly">The {label} field is optional</Typography>
          <Typography variant="caption" component="span">Optional</Typography>
        </>
      )}
    </StyledOptionalText>
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
  validationMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  /**
   * Whether the field is disabled, if true Optional Text will not be rendered even if field is required
   */
  disabled: PropTypes.bool,
  /**
   * Any additional content to be rendered within the OptionalText container
   * (current use case - text area character count)
   */
  additionalContent: PropTypes.node,
  /**
   * Define how the field should be aligned
   */
  align: PropTypes.oneOf(['bottomRight', 'bottomLeft', 'topRight', 'topLeft']),
};

SupportingElements.defaultProps = {
  additionalContent: null,
  validationMessage: null,
  disabled: false,
  align: 'bottomRight',
};

export default SupportingElements;
