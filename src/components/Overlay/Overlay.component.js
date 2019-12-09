import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  margin: 0;
  padding: 0;
`;

const Overlay = ({ opacityLevel, onClose }) => {
  const handleCloseSection = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <StyledOverlay className="overlay" style={{ background: `rgba(0,0,0,${opacityLevel})` }} onClick={handleCloseSection} onKeyPress={handleCloseSection} aria-label="overlay" tabIndex="0" role="option" aria-selected={false} />
  );
};

Overlay.propTypes = {
  /**
   *  Defines opacity level of the background(from 0 to 1).
   */
  opacityLevel: PropTypes.number,
  /**
   *  onClose function, called when click on overlay component.
   */
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  opacityLevel: 0.7,
  onClose: null,
};

export default Overlay;
