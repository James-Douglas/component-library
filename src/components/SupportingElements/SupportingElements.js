import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subscript from '../Typography/Subscript/Subscript.component';
import SRonly from '../Typography/SRonly/SRonly.component';

const StyledOptionalText = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding-top: ${({ theme }) => theme.spacing[8]};
`;

const SupportingElements = ({
  required, disabled, label, additionalContent, validationMessage,
}) => {
  if ((required && !additionalContent) || disabled || validationMessage) return null;
  return (
    <StyledOptionalText>
      {additionalContent}
      {!required && (
        <>
          <SRonly>The {label} field is optional</SRonly>
          <Subscript>Optional</Subscript>
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
};

SupportingElements.defaultProps = {
  additionalContent: null,
  validationMessage: null,
  disabled: false,
};

export default SupportingElements;
