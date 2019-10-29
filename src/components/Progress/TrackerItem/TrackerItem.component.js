import React from 'react';
import PropTypes from 'prop-types';

import ProgressIcon from '../ProgressIcon/ProgressIcon.component';
import styles from '../Tracker/styles';

const TrackerItem = ({
  index, mobile, label, active, disabled,
}) => (
  <>
    <style jsx>{styles}</style>
    <ProgressIcon index={index} active={active} disabled={disabled} mobile={mobile} />
    <div>{mobile ? label : ''}</div>
  </>
);

TrackerItem.propTypes = {
  index: PropTypes.number,
  mobile: PropTypes.bool,
  label: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

TrackerItem.defaultProps = {
  index: 1,
  label: 'Label',
  mobile: false,
  active: false,
  disabled: false,
};

export default TrackerItem;
