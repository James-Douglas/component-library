import React from 'react';
import PropTypes from 'prop-types';
import iconLib from './iconLib';
import styles from './Icon.module.css';

const ManorIcon = ({size = 2, flipV = false, flipH = false, ...props}) => {

  const icon = iconLib[props.name];
  const viewBox = iconLib[props.name].viewBox;
  const inlineStyles = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return (
    <svg 
      version='1.1' 
      xmlns='http://www.w3.org/2000/svg' 
      x='0px' y='0px'
      enableBackground={`${viewBox}`}
      className={` 
        ${styles.icon} 
        ${flipV ? `${styles.flipV}` : ''} 
        ${flipH ? `${styles.flipH}` : ''} 
      `}
      viewBox={viewBox}
      style={inlineStyles}
    >
      {icon.paths.map( (path, i) => {
        return <path d={path} key={i}/>
      })}
    </svg>
  )
};

ManorIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  flipV: PropTypes.string,
  flipH: PropTypes.string
};

export default ManorIcon;