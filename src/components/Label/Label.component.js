import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';

const StyledLabel = styled.label`
  padding-bottom: ${({ theme }) => theme.spacing[8]};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.label.color};
  width: 100%;
`;

const Label = ({
  forId, text, tooltip,
}) => {
  const {
    title, body, screenReaderLabel, placement, variant, className,
  } = tooltip;

  return (
    <StyledLabel htmlFor={forId} className="label">
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
  );
};

Label.propTypes = {
  forId: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
};

Label.defaultProps = {
  forId: null,
  text: '',
  tooltip: {},
};

export default Label;
