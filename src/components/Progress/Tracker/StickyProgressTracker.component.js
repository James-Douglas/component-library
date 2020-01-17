import React from 'react';
import PropTypes from 'prop-types';
import useIsSticky from '../../../hooks/useIsSticky';
import Tracker from './ProgressTracker.component';

const StickyTracker = ({
  steps,
}) => {
  const isStuck = useIsSticky(60);
  return (
    <Tracker steps={steps} isSticky={isStuck} stuck={isStuck} />
  );
};

StickyTracker.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
};

StickyTracker.defaultProps = {
  steps: [{ label: 'About You', url: '#label' }],
};

export default StickyTracker;
