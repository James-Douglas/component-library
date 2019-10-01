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
  const mobileClass = mobile ? 'isMobile' : '';
  return (
    <span className={`progress-icon ${activeClass} ${disabledClass} ${mobileClass}`}>
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
  disabled: true,
  active: true,
  mobile: true,
  index: 1,
};

export default ProgressIcon;
