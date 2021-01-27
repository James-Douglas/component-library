import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { useId } from '@comparethemarketau/manor-hooks';
import { Overlay } from '@comparethemarketau/manor-overlay';
import { Container } from '@comparethemarketau/manor-grid';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons/faChevronDown';
import classnames from 'classnames';
import {
  StyledDrawer,
  StyledDrawerCloseBase,
  StyledDrawerText,
  StyledIcon,
  StyledDrawerPreviewButton,
} from './DrawerHorizontal.styles';

const DrawerHorizontal = ({
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
  preview,
}) => {
  const id = useId(propsId);
  const drawerElement = useRef(null);
  const [visibility, setVisibility] = useState(visible);
  const [previewClicked, setPreviewClicked] = useState(preview.clicked || false);

  useEffect(() => {
    setVisibility(visible);
  }, [visible, setVisibility]);

  return (
    <>
      {overlay && <Overlay visible={visibility} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} zIndex={zIndex} />}
      <StyledDrawer
        size={size}
        direction={direction}
        ref={drawerElement}
        keyLine={keyLine}
        id={id}
        zIndex={zIndex}
        visibile={visibility}
        preview={preview}
        className={classnames(visibility && 'StyledDrawerActive', preview.visible && !previewClicked && 'StyledDrawerPreview')}
      >
        {preview.visible && (
          <StyledDrawerPreviewButton
            variant="tertiary"
            handleClick={() => {
              setVisibility(!visibility);
              setPreviewClicked(true);
            }}
            icon={faChevronDown}
            iconAlign="right"
            preview={preview}
            size={size}
          >
            {preview.buttonText}
          </StyledDrawerPreviewButton>
        )}
        {closeButton && !preview.visible && !previewClicked && (
          <>
            <StyledDrawerCloseBase size={size} direction={direction} />
            <StyledIcon className={`${iconClassName} icon-close`} onClick={handleClose} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false">
              <FontAwesomeIcon icon={faTimes} />
            </StyledIcon>
          </>
        )}
        <Container>
          <StyledDrawerText direction={direction} closeButton={closeButton} preview={preview} size={size}>
            {children}
          </StyledDrawerText>
        </Container>
      </StyledDrawer>
    </>
  );
};

DrawerHorizontal.propTypes = {
  /**
   *  Unique identifier for the Drawer
   */
  id: PropTypes.string,
  /**
   *  Direction param to dictate where the drawer is coming from.
   */
  direction: PropTypes.string,
  /**
   *  Defines height or width (depending from direction) of the slide (size in pixels).
   */
  size: PropTypes.number,
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
  /**
   * A preview of the drawer content
   */
  preview: PropTypes.shape({
    visible: PropTypes.bool, // If the preview is showing or not.
    clicked: false, // Whether to make sure we don't show the user again.
    viewArea: PropTypes.number, // Pixels of drawer to be shown.
    buttonText: PropTypes.string, // The content to put in the drawer activation button.
  }),
};

DrawerHorizontal.defaultProps = {
  id: null,
  direction: 'right',
  size: 250,
  children: '',
  closeButton: false,
  iconClassName: '',
  visible: false,
  overlay: false,
  overlayOpacity: 0.7,
  handleOverlayClick: null,
  keyLine: false,
  zIndex: 999999,
  preview: {
    visible: false, clicked: false, viewArea: 20, buttonText: 'Good to know',
  },
};

export default DrawerHorizontal;
