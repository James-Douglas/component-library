import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import Overlay from '../Overlay/Overlay.component';
import Container from '../Grid/Container/Container.component';
import LayerEventManager from '../../LayerEventManager';

const animateLeft = keyframes`
  from { left: -100% }
  to { left: 0 }
`;
const animateRight = keyframes`
  from { right: -100% }
  to { right: 0 }
`;
const animateTop = keyframes`
  from { top: -100% }
  to { top: 0 }
`;
const animateBottom = keyframes`
  from { bottom: -100% }
  to { bottom: 0}
`;

const StyledDrawer = styled.div`
  position: fixed;
  overflow: auto;
  margin: 0;
  height: 100%;
  ${({ theme, keyLine }) => keyLine && css`
    border-top: ${theme.drawer.borderTop};
  `}
  background: ${({ theme }) => (theme.drawer.background)};
  z-index: inherit;
  box-shadow: ${({ theme }) => theme.drawer.shadow};
  padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[4]}`};
  ${({ size, direction }) => direction === 'top' && css`
    animation-name: ${animateTop};
    height: ${size};
    width: 100%;
    top: 0;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'left' && css`
    animation-name: ${animateLeft};
    width: ${size};
    top: 0;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'bottom' && css`
    animation-name: ${animateBottom};
    width: 100%;
    height: ${size};
    bottom: 0;
    left: 0;
  `}
  ${({ size, direction }) => direction === 'right' && css`
    animation-name: ${animateRight};
    width: ${size};
    top: 0;
    right: 0;
  `}
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-play-state: running;
`;

const StyledIcon = styled.div`
  position: fixed; /* fallback for IE11 */
  position: sticky;
  float: right;
  right: ${({ theme }) => (theme.spacing[20])};
  top: ${({ theme }) => (theme.spacing[20])};
  cursor: pointer;
  z-index: inherit;
  svg {
    color: ${({ theme }) => theme.drawer.closeIcon};
    font-size: 26px;
  }
`;

const StyledDrawerCloseBase = styled.div`
  height: ${({ theme }) => (theme.spacing[12])};
  position: fixed;
  background: ${({ theme }) => (theme.drawer.background)};
  z-index: inherit;
  width: 100%;

  ${({ direction }) => direction === 'top' && css`
    width: 100%;
    animation-name: ${animateTop};
  `}
  ${({ direction }) => direction === 'bottom' && css`
    width: 100%;
    animation-name: ${animateBottom};
  `}
  ${({ theme, direction, size }) => direction === 'left' && css`
    width: calc(${size} - ${theme.spacing[8]});
    animation-name: ${animateLeft};
  `}
  ${({ direction, size }) => direction === 'right' && css`
    width: ${size};
    animation-name: ${animateRight};
  `}
`;
const StyledDrawerText = styled.div`
 padding-top: ${({ theme, closeButton }) => (closeButton ? theme.spacing[60] : theme.spacing[32])};
`;

const Drawer = ({
  id,
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
   * unique id
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
