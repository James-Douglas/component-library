/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useId } from '@comparethemarketau/manor-hooks';
import { Overlay } from '@comparethemarketau/manor-overlay';
import FocusTrap from 'focus-trap-react';
import {
  StyledAlignment, StyledModal,
} from './GenericModal.styles';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ trapFocus, focusTrapOptions, children }) => {
  if (trapFocus) {
    return (
      <FocusTrap focusTrapOptions={focusTrapOptions}>
        {children}
      </FocusTrap>
    );
  }
  return <>{children}</>;
};

const GenericModal = ({
  id: propsId,
  visible,
  className,
  children,
  overlay,
  overlayOpacity,
  handleOverlayClick,
  zIndex,
  trapFocus,
  focusTrapOptions,
}) => {
  const id = useId(propsId);
  return (
    <>
      {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} zIndex={zIndex} />}
      {visible
      && (
        <Wrapper trapFocus={trapFocus} focusTrapOptions={focusTrapOptions}>
          <StyledAlignment visible={visible} zIndex={zIndex}>
            <StyledModal id={id} className={className}>
              {children}
            </StyledModal>
          </StyledAlignment>
        </Wrapper>
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
  /**
   * Traps focus within the modal
   */
  trapFocus: PropTypes.bool,
  /**
   * Options to be passed to the focus-trap library
   * Common use case: By default the library deactivates the trap when the Escape key is pressed, for our
   * use case we likely want to disable that with focusTrapOptions: { escapeDeactivates: false }
   * https://github.com/focus-trap/focus-trap#focustrap--createfocustrapelement-createoptions
   */
  focusTrapOptions: PropTypes.object,
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
  trapFocus: false,
  focusTrapOptions: {},
};

export default GenericModal;
