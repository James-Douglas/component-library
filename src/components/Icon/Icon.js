import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';
import styles from './Icon.module.css';

const Icon = ({
  size = 2, flipV = false, flipH = false, name,
}) => {
  const icon = icons[name];
  const { viewBox } = icon;
  const inlineStyles = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      enableBackground={`${viewBox}`}
      className={` 
        ${styles.icon} 
        ${flipV ? `${styles.flipV}` : ''} 
        ${flipH ? `${styles.flipH}` : ''} 
      `}
      viewBox={viewBox}
      style={inlineStyles}
    >
      {/* eslint-disable-next-line react/no-array-index-key */}
      {icon.paths.map((path, i) => <path d={path} key={i} />)}
    </svg>
  );
};

ManorIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  flipV: PropTypes.string,
  flipH: PropTypes.string,
};

ManorIcon.defaultProps = {
  size: 10,
  flipV: false,
  flipH: false,
};

export default Icon;
