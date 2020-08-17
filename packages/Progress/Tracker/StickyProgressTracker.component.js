import React from 'react';
import PropTypes from 'prop-types';
import { useIsSticky } from '@comparethemarketau/manor-hooks';
import Tracker from './ProgressTracker.component';

const StickyTracker = ({
  steps, theme,
}) => {
  const isStuck = useIsSticky(60);
  return (
    <Tracker steps={steps} isSticky={isStuck} stuck={isStuck} theme={theme} />
  );
};

StickyTracker.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

StickyTracker.defaultProps = {
  steps: [{ label: 'About You', url: '#label' }],
  theme: undefined,
};

export default StickyTracker;
