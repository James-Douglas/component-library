import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import Overlay from '../Overlay/Overlay.component';
import LayerEventManager from '../../LayerEventManager';
import useId from '../../hooks/useId';

import {
  StyledAlignment, StyledCloseIcon, StyledContent, StyledContentChildren, StyledModal,
} from './Modal.styles';

const Modal = ({
  id: propsId,
  title,
  visible,
  handleClose,
  size,
  className,
  children,
  overlay,
  overlayOpacity,
  handleOverlayClick,
}) => {
  const id = useId(propsId);
  const classNames = `
    ${size}
    ${className}
  `;
  return (
    <LayerEventManager id={id} visible={visible} handleClose={handleClose} trapFocus>
      <>
        {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} />}
        {visible
          && (
            <StyledAlignment visible={visible}>
              <StyledModal id={id} className={classNames} size={size}>
                <StyledCloseIcon className="icon-close" onClick={handleClose} onKeyPress={handleClose} aria-label="Close Modal" tabIndex="0" role="button" aria-pressed="false">
                  <FontAwesomeIcon icon={faTimes} />
                </StyledCloseIcon>
                <StyledContent>
                  {title && <h2>{title}</h2>}
                  <StyledContentChildren>{children}</StyledContentChildren>
                </StyledContent>
              </StyledModal>
            </StyledAlignment>
          )}
      </>
    </LayerEventManager>
  );
};

Modal.propTypes = {
  /**
   * Unique identifier for the modal
  */
  id: PropTypes.string,
  /**
   * Bool for modal opening/closing. Handled via state in the parent component
   */
  visible: PropTypes.bool,
  /**
   * Method for closing the modal. Handled via state in the parent component. Pass to an overlay (if included) to
   * close the modal on click of the overlay
   */
  handleClose: PropTypes.func,
  /**
   * Sizing of the modal. `lg`, `md` or `sm`
   */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  /**
   * Extend styles with additional classNames
   */
  className: PropTypes.string,
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
   * The child content of the Modal
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * The title text
   */
  title: PropTypes.node,
};

Modal.defaultProps = {
  id: null,
  visible: false,
  handleClose: null,
  size: 'md',
  className: '',
  children: '',
  overlay: false,
  overlayOpacity: 0.7,
  handleOverlayClick: null,
  title: '',
};

export default Modal;
