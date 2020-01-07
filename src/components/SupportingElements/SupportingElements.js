import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Subscript from '../Typography/Subscript/Subscript.component';
import getTheme from '../../utils/getTheme';
import SRonly from '../Typography/SRonly/SRonly.component';

const StyledOptionalText = styled.div`
  position:absolute;
  right:0;
  padding-top: ${(props) => props.theme.spacing[8]};
  display: flex;
  flex-direction: row;
`;

const SupportingElements = ({ required, label, additionalContent }) => {
  if (required && !additionalContent) return null;
  return (
    <ThemeProvider theme={getTheme}>
      <StyledOptionalText>
        {additionalContent}
        {!required && (
          <>
            <SRonly>The ${label} field is optional</SRonly>
            <Subscript>Optional</Subscript>
          </>
        )}
      </StyledOptionalText>
    </ThemeProvider>
  );
};

SupportingElements.propTypes = {
  /**
   * Whether the field is required, if true OptionalText does not render
   */
  required: PropTypes.bool.isRequired,
  /**
   * Label for the form component
   */
  label: PropTypes.string.isRequired,
  /**
   * Any additional content to be rendered within the OptionalText container
   * (current use case - text area character count)
   */
  additionalContent: PropTypes.node,
};

SupportingElements.defaultProps = {
  additionalContent: null,
};

export default SupportingElements;
