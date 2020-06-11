import React from 'react';
import PropTypes from 'prop-types';
import { StyledBar, StyledProgress } from './ProgressBar.styles';

const Bar = ({
  value,
  isSticky,
  stuck,
}) => (
  <StyledBar stuck={stuck} isSticky={isSticky} value={value}>
    <StyledProgress max="100" value={value} />
  </StyledBar>
);

Bar.propTypes = {
  /**
   * Percentage completed (0 - 100)
   */
  value: PropTypes.number.isRequired,
  /**
   * Determines if the bar should be sticky
   */
  isSticky: PropTypes.bool,
  /**
   * Determines if the bar is in the stuck state
   */
  stuck: PropTypes.bool,
};

Bar.defaultProps = {
  isSticky: false,
  stuck: false,
};

export default Bar;
