import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Tracker/styles';

const ProgressIcon = ({
  disabled,
  active,
  mobile,
  index,
}) => {
  const activeClass = active ? 'active' : '';
  const disabledClass = disabled ? 'disabled' : '';
  const desktopClass = !mobile ? 'mobile' : '';
  return (
    <span className={`progress-icon ${activeClass} ${disabledClass} ${desktopClass}`}>
      <style jsx>{styles}</style>
      {index}
    </span>
  );
};


ProgressIcon.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  mobile: PropTypes.bool,
  index: PropTypes.number,
};

ProgressIcon.defaultProps = {
  disabled: false,
  active: false,
  mobile: false,
  index: 1,
};

export default ProgressIcon;
