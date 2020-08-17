import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { ManorProvider } from '@comparethemarketau/manor-provider';
import { Typography } from '@comparethemarketau/manor-typography';
import { useId } from '@comparethemarketau/manor-hooks';
import { Overlay } from '@comparethemarketau/manor-overlay';
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
  zIndex,
  theme,
}) => {
  const id = useId(propsId);
  const classNames = `
    ${size}
    ${className}
  `;
  return (
    <ManorProvider theme={theme}>
      {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} zIndex={zIndex} />}
      {visible
        && (
          <StyledAlignment visible={visible} zIndex={zIndex}>
            <StyledModal id={id} className={classNames} size={size}>
              <StyledCloseIcon className="icon-close" onClick={handleClose} onKeyPress={handleClose} aria-label="Close Modal" tabIndex="0" role="button" aria-pressed="false">
                <FontAwesomeIcon icon={faTimes} />
              </StyledCloseIcon>
              <StyledContent>
                {title && <Typography variant="h2">{title}</Typography>}
                <StyledContentChildren>{children}</StyledContentChildren>
              </StyledContent>
            </StyledModal>
          </StyledAlignment>
        )}
    </ManorProvider>
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
  /**
   * zIndex for the modal & overlay (if using)
   */
  zIndex: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  /**
   * Manor theme, if not provided the ctm theme will be used.
   */
  // eslint-disable-next-line react/forbid-prop-types
  theme: PropTypes.object,
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
  zIndex: 30,
  theme: undefined,
};

export default Modal;
