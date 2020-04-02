import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import Overlay from '../Overlay/Overlay.component';
import Container from '../Grid/Container/Container.component';
import LayerEventManager from '../../LayerEventManager';
import useId from '../../hooks/useId';

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
  trapFocus,
  closeOnEsc,
  keyLine,
}) => {
  const id = useId(propsId);
  const drawerElement = useRef(null);

  const IconClick = () => {
    handleClose();
  };

  return (
    <LayerEventManager id={id} visible={visible} handleClose={handleClose} trapFocus={trapFocus} closeOnEsc={closeOnEsc}>
      <>
        {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} />}
        {visible && (
          <StyledDrawer
            size={size}
            direction={direction}
            ref={drawerElement}
            keyLine={keyLine}
          >
            {closeButton
              && (
                <>
                  <StyledDrawerCloseBase size={size} direction={direction} />

                  <StyledIcon className={`${iconClassName} icon-close`} onClick={IconClick} onKeyPress={IconClick} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false">
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
    </LayerEventManager>
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
   * Traps focus to elements within the Drawer
   */
  trapFocus: PropTypes.bool,
  /**
   * Whether or not to close the Drawer when the user presses the `Esc` key
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Whether or not the drawer has a 'top' border
   */
  keyLine: PropTypes.bool,
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
  trapFocus: false,
  closeOnEsc: true,
  keyLine: false,
};

export default Drawer;
