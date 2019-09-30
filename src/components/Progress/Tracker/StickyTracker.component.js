import React from 'react';
import PropTypes from 'prop-types';
import useIsSticky from '../../../hooks/useIsSticky';
import Tracker from './Tracker.component';

const StickyTracker = ({
  value,
  steps,
}) => {
  const isStuck = useIsSticky(60);
  return (
    <Tracker value={value} steps={steps} isSticky={isStuck} stuck={isStuck} />
  );
};

StickyTracker.propTypes = {
  value: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
  })),
};

StickyTracker.defaultProps = {
  value: '70',
  steps: [{ label: 'About You', url: '#label' }],
};

export default StickyTracker;
