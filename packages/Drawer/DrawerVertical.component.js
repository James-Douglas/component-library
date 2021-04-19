import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId, useMountEffect } from '@comparethemarketau/manor-hooks';
import { Overlay } from '@comparethemarketau/manor-overlay';
import { Container } from '@comparethemarketau/manor-grid';
import {
  StyledDrawer,
  StyledDrawerCloseBase,
  StyledDrawerText,
  StyledIcon,
} from './DrawerVertical.styles';

const DrawerVertical = ({
  trackingLabel,
  id: propsId,
  direction,
  size,
  closeButton,
  children,
  iconClassName,
  visible,
  handleClose,
  overlay,
  overlayOpacity,
  handleOverlayClick,
  keyLine,
  zIndex,
}) => {
  const id = useId(propsId);
  const drawerElement = useRef(null);
  const { trackInteraction } = useContext(ManorContext);
  const firstUpdate = useRef(true);

  // Dont track the initial mount of the drawer unless it's being mounted in the visible state
  useEffect(() => {
    if (!firstUpdate.current || visible) {
      trackInteraction(visible ? 'Show' : 'Hide', 'Drawer', direction, trackingLabel, '');
    }
  }, [visible, firstUpdate, trackInteraction, direction, trackingLabel]);

  useMountEffect(() => {
    firstUpdate.current = false;
  });

  return (
    <>
      {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} zIndex={zIndex} />}
      {visible && (
        <StyledDrawer
          size={size}
          direction={direction}
          ref={drawerElement}
          keyLine={keyLine}
          id={id}
          zIndex={zIndex}
        >
          {closeButton
            && (
              <>
                <StyledDrawerCloseBase size={size} direction={direction} />
                <StyledIcon className={`${iconClassName} icon-close`} onClick={handleClose} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false">
                  <FontAwesomeIcon icon={faTimes} />
                </StyledIcon>
              </>
            )}
          <Container>
            <StyledDrawerText direction={direction} closeButton={closeButton}>
              {children}
            </StyledDrawerText>
          </Container>
        </StyledDrawer>
      )}
    </>
  );
};

DrawerVertical.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   *  Unique identifier for the Drawer
   */
  id: PropTypes.string,
  /**
   *  Direction param to dictate where the drawer is coming from.
   */
  direction: PropTypes.oneOf(['left', 'right']),
  /**
   *  Defines height or width (depending from direction) of the slide.
   */
  size: PropTypes.string,
  /**
   *  The slide's content.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   *  Defines close button visibility(by default it's hidden).
   */
  closeButton: PropTypes.bool,
  /**
   *  Defines custom class name for close button.
   */
  iconClassName: PropTypes.string,
  /**
   *  Defines drawer visibility.
   */
  visible: PropTypes.bool,
  /**
   *  handleClose function, called when click close button.
   */
  handleClose: PropTypes.func.isRequired,
  /**
   * Render an overlay over the remainder of the screen (blocking interaction)
   */
  overlay: PropTypes.bool,
  /**
   * Defines the opacity of the overlay, if rendered. (0 to 1)
   */
  overlayOpacity: PropTypes.number,
  /**
   * Called when the overlay is clicked
   */
  handleOverlayClick: PropTypes.func,
  /**
   * Whether or not the drawer has a 'top' border
   */
  keyLine: PropTypes.bool,
  /**
   * zIndex for the Drawer & Overlay (if using)
   */
  zIndex: PropTypes.number,
};

DrawerVertical.defaultProps = {
  id: null,
  direction: 'right',
  size: '80%',
  children: '',
  closeButton: false,
  iconClassName: '',
  visible: false,
  overlay: false,
  overlayOpacity: 0.7,
  handleOverlayClick: null,
  keyLine: false,
  zIndex: 999999,
};

export default DrawerVertical;
