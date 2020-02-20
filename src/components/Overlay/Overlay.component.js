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
  z-index: inherit;
  margin: 0;
  padding: 0;
`;

const Overlay = ({ visible, opacityLevel, handleClick }) => visible && (
  <StyledOverlay className="overlay" style={{ background: `rgba(0,0,0,${opacityLevel})` }} aria-label="overlay" tabIndex="0" role="option" aria-selected={false} onClick={handleClick} />
);

Overlay.propTypes = {
  /**
   *  Defines overlay visibility.
   */
  visible: PropTypes.bool,
  /**
   *  Defines opacity level of the background(from 0 to 1).
   */
  opacityLevel: PropTypes.number,
  /**
   * Called when the overlay is clicked
   */
  handleClick: PropTypes.func,
};

Overlay.defaultProps = {
  visible: false,
  opacityLevel: 0.7,
  handleClick: null,
};

export default Overlay;
