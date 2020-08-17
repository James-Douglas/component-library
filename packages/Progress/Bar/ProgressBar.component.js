import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { StyledBar, StyledProgress } from './ProgressBar.styles';

const Bar = ({
  value,
  isSticky,
  stuck,
  theme,
}) => (
  <ManorProvider theme={theme}>
    <StyledBar stuck={stuck} isSticky={isSticky} value={value}>
      <StyledProgress max="100" value={value} />
    </StyledBar>
  </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Bar.defaultProps = {
  isSticky: false,
  stuck: false,
  theme: undefined,
};

export default Bar;
