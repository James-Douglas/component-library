import React from 'react';
import PropTypes from 'prop-types';
import { useIsSticky } from '@comparethemarketau/manor-hooks';
import Bar from './ProgressBar.component';

const StickyBar = ({
  value, theme,
}) => {
  const isStuck = useIsSticky(60);
  return (
    <Bar value={value} isSticky={isStuck} stuck={isStuck} theme={theme} />
  );
};

StickyBar.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

StickyBar.defaultProps = {
  value: 70,
  theme: undefined,
};

export default StickyBar;
