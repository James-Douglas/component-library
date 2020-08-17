import React from 'react';
import PropTypes from 'prop-types';

import ProgressIcon from '../ProgressIcon/ProgressIcon';

const TrackerItem = ({
  index, mobile, label, active, disabled, theme,
}) => (
  <>
    <ProgressIcon index={index} active={active} disabled={disabled} mobile={mobile} theme={theme} />
    <div>{mobile ? label : ''}</div>
  </>
);

TrackerItem.propTypes = {
  index: PropTypes.number,
  mobile: PropTypes.bool,
  label: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

TrackerItem.defaultProps = {
  index: 1,
  label: 'Label',
  mobile: false,
  active: false,
  disabled: false,
  theme: undefined,
};

export default TrackerItem;
