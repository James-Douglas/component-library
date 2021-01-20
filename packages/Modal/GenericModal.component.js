import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { Overlay } from '@comparethemarketau/manor-overlay';
import {
  StyledAlignment, StyledModal,
} from './GenericModal.styles';

const GenericModal = ({
  id: propsId,
  visible,
  className,
  children,
  overlay,
  overlayOpacity,
  handleOverlayClick,
  zIndex,
}) => {
  const id = useId(propsId);
  return (
    <>
      {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} zIndex={zIndex} />}
      {visible
      && (
        <StyledAlignment visible={visible} zIndex={zIndex}>
          <StyledModal id={id} className={className}>
            {children}
          </StyledModal>
        </StyledAlignment>
      )}
    </>
  );
};

GenericModal.propTypes = {
  /**
   * Unique identifier for the modal
   */
  id: PropTypes.string,
  /**
   * Bool for modal opening/closing. Handled via state in the parent component
   */
  visible: PropTypes.bool,
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
   * zIndex for the modal & overlay (if using)
   */
  zIndex: PropTypes.number,
};

GenericModal.defaultProps = {
  id: null,
  visible: false,
  className: '',
  children: '',
  overlay: false,
  overlayOpacity: 0.7,
  handleOverlayClick: null,
  zIndex: 999999,
};

export default GenericModal;
