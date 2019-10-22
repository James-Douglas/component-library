import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';
import styles from './styles';

const Icon = ({
  size, flipV, flipH, name,
}) => {
  const icon = icons[name] || { viewBox: '', paths: [] };
  const { viewBox } = icon;
  const inlineStyles = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return (
    <>
      <style jsx>{styles}</style>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        enableBackground={`${viewBox}`}
        className={` 
          icon
          ${flipV ? 'flipV' : ''} 
          ${flipH ? 'flipH' : ''} 
        `}
        viewBox={viewBox}
        style={inlineStyles}
      >
        {/* eslint-disable-next-line react/no-array-index-key */}
        {icon.paths.map((path, i) => <path d={path} key={i} />)}
      </svg>
    </>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  flipV: PropTypes.bool,
  flipH: PropTypes.bool,
};

Icon.defaultProps = {
  size: 10,
  flipV: false,
  flipH: false,
};

export default Icon;
