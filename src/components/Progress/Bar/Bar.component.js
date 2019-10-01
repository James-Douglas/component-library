import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Tracker/styles';

const Bar = ({
  value,
  backwards,
  isSticky,
  stuck,
}) => {
  const stickyClass = isSticky ? 'sticky' : '';
  const stuckClass = stuck ? 'stuck' : '';
  return (
    <div className={`progress-container ${stickyClass} ${stuckClass}`}>
      <style jsx>{styles}</style>
      <progress className={`progress ${(value === 100) ? 'complete' : ''}`} max="100" value={value} />
      <div className={`label  ${(!backwards) ? 'forwards' : ''}`} style={{ marginLeft: `${value}vw`, right: value > 10 ? '4.8rem' : '3.5rem' }}>
        {`${value}%`}
      </div>
    </div>
  );
};


Bar.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  backwards: PropTypes.bool,
  isSticky: PropTypes.bool,
  stuck: PropTypes.bool,
};

Bar.defaultProps = {
  value: 70,
  backwards: false,
  isSticky: false,
  stuck: false,
};

export default Bar;
