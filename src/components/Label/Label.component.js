import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';

const StyledLabelContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.label.color};
  width: 100%;
`;

const Label = ({
  htmlFor, text, tooltip,
}) => {
  const {
    title, body, screenReaderLabel, placement, variant, className,
  } = tooltip;

  return (
    <StyledLabelContainer>
      <StyledLabel htmlFor={htmlFor} className="label">
        {text}
        <Tooltip
          title={title}
          body={body}
          screenReaderLabel={screenReaderLabel}
          placement={placement}
          variant={variant}
          className={className}
        />
      </StyledLabel>
    </StyledLabelContainer>
  );
};

Label.propTypes = {
  /**
   * ID of the component the label is for
   */
  htmlFor: PropTypes.string,
  /**
   * Text for the label
   */
  text: PropTypes.string,
  /**
   * Tooltip to be displayed
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
};

Label.defaultProps = {
  htmlFor: null,
  text: '',
  tooltip: {},
};

export default Label;
