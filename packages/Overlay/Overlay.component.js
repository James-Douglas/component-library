import React from 'react';
import PropTypes from 'prop-types';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import StyledOverlay from './Overlay.styles';

const Overlay = ({
  visible, opacityLevel, handleClick, theme,
}) => visible && (
  <ManorProvider>
    <StyledOverlay
      className="overlay"
      style={{ background: `rgba(0,0,0,${opacityLevel})` }}
      aria-label="overlay"
      tabIndex="-1"
      role="option"
      aria-selected={false}
      onClick={handleClick}
    />
  </ManorProvider>
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
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
};

Overlay.defaultProps = {
  visible: false,
  opacityLevel: 0.7,
  handleClick: null,
  theme: undefined,
};

export default Overlay;
