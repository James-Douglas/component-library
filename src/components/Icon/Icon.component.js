import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ctmIcons, faIcons } from './icons';
import styles from './styles';

const renderCtmIcon = (icon, size, flipV, flipH) => {
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

const renderFaIcon = (icon, size, flipV, flipH) => {
  const inlineStyles = {
    fontSize: `${size}rem`,
  };

  let flip;
  if (flipV && flipH) {
    flip = 'both';
  } else if (flipV) {
    flip = 'vertical';
  } else if (flipH) {
    flip = 'horizontal';
  }

  return (
    <FontAwesomeIcon icon={icon} style={inlineStyles} flip={flip} />
  );
};

const Icon = ({
  size, flipV, flipH, name,
}) => {
  const ctmIcon = ctmIcons[name];
  const faIcon = faIcons[name];
  if (ctmIcon) {
    return renderCtmIcon(ctmIcon, size, flipV, flipH);
  }
  if (faIcon) {
    return renderFaIcon(faIcon, size, flipV, flipH);
  }
  return null;
};

Icon.propTypes = {
  /**
   * Name of the icon to be rendered
   */
  name: PropTypes.string.isRequired,
  /**
   * Size of the icon (rem)
   */
  size: PropTypes.number,
  /**
   * Flips the icon vertically
   */
  flipV: PropTypes.bool,
  /**
   * Flips the icon horizontally
   */
  flipH: PropTypes.bool,
};

Icon.defaultProps = {
  size: 10,
  flipV: false,
  flipH: false,
};

export default Icon;
