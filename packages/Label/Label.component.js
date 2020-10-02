/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Tooltip, tooltipPropTypes } from '@comparethemarketau/manor-tooltip';
import { StyledLabel, StyledLabelContainer } from './Label.styles';

const Label = ({
  id,
  htmlFor,
  text,
  tooltip,
  removeGutters,
  inFieldLabel,
  prefixContent,
  breakpoint,
  containerProps,
  className,
  ...props
}) => (
  <StyledLabelContainer
    {...containerProps}
    inFieldLabel={inFieldLabel}
    removeGutters={removeGutters}
  >
    <StyledLabel
      id={id}
      {...props}
      htmlFor={htmlFor}
      inFieldLabel={inFieldLabel}
      prefixContent={prefixContent}
      breakpoint={breakpoint}
      className={classnames('label', className)}
    >
      {text}
      {tooltip && <Tooltip {...tooltip} />}
    </StyledLabel>
  </StyledLabelContainer>
);

Label.propTypes = {
  /**
   * id for the label
   */
  id: PropTypes.string,
  /**
   * Variant
   */
  variant: PropTypes.oneOf(['default', 'compact']),
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
   * Turn margins (top and bottom) on or off
   */
  removeGutters: PropTypes.bool,
  /**
   * Hides if true, animates on with the expressive input
   */
  inFieldLabel: PropTypes.bool,
  /**
   * Content to be displayed as a prefix for the input (used in this component for the expressive input only)
   */
  prefixContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * breakpoint for the label (used in this component for the expressive input only)
   */
  breakpoint: PropTypes.string,
  /**
   * Permits additional props to be passed to the container
   */
  containerProps: PropTypes.object,
  /**
   * Custom classname(s) to be applied to the label
   */
  className: PropTypes.string,
};

Label.defaultProps = {
  id: '',
  variant: 'default',
  htmlFor: null,
  text: '',
  tooltip: {},
  inFieldLabel: false,
  prefixContent: '',
  breakpoint: null,
  removeGutters: false,
  containerProps: {},
  className: '',
};

export default Label;
