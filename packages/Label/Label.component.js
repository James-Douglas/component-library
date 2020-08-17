import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Tooltip, tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { StyledLabel, StyledLabelContainer } from './Label.styles';

const Label = ({
  htmlFor, text, tooltip, inFieldLabel, prefixContent, breakpoint, theme,
}) => {
  const {
    title, body, screenReaderLabel, placement, variant, className,
  } = tooltip;

  return (
    <ManorProvider theme={theme}>
      <StyledLabelContainer inFieldLabel={inFieldLabel}>
        <StyledLabel htmlFor={htmlFor} inFieldLabel={inFieldLabel} prefixContent={prefixContent} breakpoint={breakpoint} className="label">
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
    </ManorProvider>
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
  /**
   * Hides if true, animates on with the expressive input
   */
  inFieldLabel: PropTypes.bool,
  /**
   * Content to be displayed as a prefix for the input (used in this component for the expressive input only)
   */
  prefixContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
   * breakpoint for the label (used in this component for the expressive input only)
   */
  breakpoint: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Label.defaultProps = {
  htmlFor: null,
  text: '',
  tooltip: {},
  inFieldLabel: false,
  prefixContent: '',
  breakpoint: null,
  theme: undefined,
};

export default Label;
