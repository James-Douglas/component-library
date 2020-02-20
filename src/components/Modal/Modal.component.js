import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import Overlay from '../Overlay/Overlay.component';
import LayerEventManager from '../../LayerEventManager';

const StyledAlignment = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  pointer-events: none;
  z-index: inherit;
`;

const animateIn = keyframes`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledModal = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  z-index: inherit;
  width: ${({ size }) => {
    if (size === 'lg') {
      return '66.666667%';
    } if (size === 'md') {
      return '50%';
    }
    return '33.333333%';
  }};
  min-height: 30rem;
  height: auto;
  pointer-events: auto;
  position: relative;
  animation-name: ${animateIn};
  animation-duration: .3s;
`;

const StyledCloseIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing[20]};
  top: ${({ theme }) => theme.spacing[24]};
  cursor: pointer;
  z-index: inherit;
  opacity: 0.5;
`;

const StyledContent = styled.div`
  padding: ${({ theme }) => theme.spacing[40]};
`;

const Modal = ({
  id, visible, handleClose, size, className, children, overlay, overlayOpacity, handleOverlayClick,
}) => {
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
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </StyledCloseIcon>
                <StyledContent className="content">
                  {children}
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
   * The id of the modal
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
};

export default Modal;
