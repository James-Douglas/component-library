import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { useId } from '@comparethemarketau/manor-hooks';
import { Overlay } from '@comparethemarketau/manor-overlay';
import { Container } from '@comparethemarketau/manor-grid';
import {
  StyledDrawer,
  StyledDrawerCloseBase,
  StyledDrawerText,
  StyledIcon,
} from './Drawer.styles';

const Drawer = ({
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

Drawer.propTypes = {
  /**
   *  Unique identifier for the Drawer
   */
  id: PropTypes.string,
  /**
   *  Direction param play a role in how we interpret a slide's movement within a frame.
   */
  direction: PropTypes.string,
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

Drawer.defaultProps = {
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
  zIndex: 30,
};

export default Drawer;
