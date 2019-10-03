import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Tracker/styles';

const Bar = ({
  value,
  isSticky,
  stuck,
}) => {
  const stickyClass = isSticky ? 'sticky' : '';
  const stuckClass = stuck ? 'stuck' : '';
  const leftIndent = { marginLeft: `${value}vw`, right: value > 10 ? '4.8rem' : '3.5rem' };
  return (
    <div className={`progress-container ${stickyClass} ${stuckClass}`}>
      <style jsx>{styles}</style>
      <progress className={`progress ${(value === 100 || value === '100') ? 'complete' : ''}`} max="100" value={value} />
      <div className="label" style={leftIndent}>
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
  isSticky: PropTypes.bool,
  stuck: PropTypes.bool,
};

Bar.defaultProps = {
  value: 70,
  isSticky: false,
  stuck: false,
};

export default Bar;
