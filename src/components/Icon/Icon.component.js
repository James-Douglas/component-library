import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ctmIcons, faIcons } from './icons';

const StyledIcon = styled.svg`
  width: 1.6rem;
  height: 1.6rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  ${(props) => props.flipH && css`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  `}
  ${(props) => props.flipV && css`
    -moz-transform: scaleY(-1);
    -o-transform: scaleY(-1);
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1);
    filter: FlipV;
    -ms-filter: "FlipV";
  `}
`;

const renderCtmIcon = (icon, size, flipV, flipH) => {
  const { viewBox } = icon;
  const inlineStyles = {
    width: `${size}rem`,
    height: `${size}rem`,
  };

  return (
    <>
      <StyledIcon
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        enableBackground={`${viewBox}`}
        className="icon"
        viewBox={viewBox}
        flipV={flipV}
        flipH={flipH}
        style={inlineStyles}
      >
        {/* eslint-disable-next-line react/no-array-index-key */}
        {icon.paths.map((path, i) => <path d={path} key={i} />)}
      </StyledIcon>
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
