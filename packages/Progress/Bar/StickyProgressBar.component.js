import React from 'react';
import PropTypes from 'prop-types';
import { useIsSticky } from '@comparethemarketau/manor-hooks';
import Bar from './ProgressBar.component';

const StickyBar = ({
  value,
}) => {
  const isStuck = useIsSticky(60);
  return (
    <Bar value={value} isSticky={isStuck} stuck={isStuck} />
  );
};

StickyBar.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

StickyBar.defaultProps = {
  value: 70,
};

export default StickyBar;
