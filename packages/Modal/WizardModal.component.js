/* eslint-disable react/forbid-prop-types */
import React, {
  useRef, useState, useLayoutEffect, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faArrowLeft,
} from '@fortawesome/pro-regular-svg-icons';
import { RemoveScroll } from 'react-remove-scroll';

import { throttle } from '@comparethemarketau/manor-utils';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { useId } from '@comparethemarketau/manor-hooks';
import { Button } from '@comparethemarketau/manor-button';
import { Overlay } from '@comparethemarketau/manor-overlay';
import {
  StyledAlignment,
  StyledCloseIcon,
  StyledCloseButton,
  StyledModal,
  StyledHeader,
} from './WizardModal.styles';

const WizardModal = ({
  trackingLabel,
  id: propsId,
  dynamicHeight,
  visible,
  onClose,
  className,
  overlay,
  overlayOpacity,
  zIndex,
  children,
  goBackActionTitle,
  disableBodyScrollLock,
}) => {
  const id = useId(propsId);
  const headerBarRef = useRef(null);
  const wizardModalRef = useRef(null);
  const [headerBarHeight, setHeaderBarHeight] = useState();

  const { isDesktop, breakpoint, trackInteraction } = useContext(ManorContext);

  const classNames = `
    ${className}
  `;

  useLayoutEffect(() => {
    if (headerBarRef) {
      const handleHeaderBarResize = () => {
        if (headerBarRef.current) {
          setHeaderBarHeight(headerBarRef.current.offsetHeight);
        }
      };
      const throttledHeaderBarResize = throttle(handleHeaderBarResize, 25);
      window.addEventListener('resize', throttledHeaderBarResize);
      return () => {
        window.removeEventListener('resize', throttledHeaderBarResize);
      };
    }
    return null;
  }, [headerBarRef, headerBarHeight]);

  useEffect(() => {
    if (headerBarRef && headerBarRef.current) {
      setHeaderBarHeight(headerBarRef.current.offsetHeight);
    }
  }, [visible]);

  const closeClickHandler = () => {
    if (onClose) onClose();
    trackInteraction('Click', 'Button', 'Other', trackingLabel, 'Close');
  };

  const overlayClickHandler = () => {
    if (onClose) onClose();
    trackInteraction('Click', 'Overlay', 'Other', trackingLabel, 'Close');
  };

  const Header = () => {
    // TODO: this is not using standard manor components, need to refactor this to do so. See also: Modal.conponent.js
    const DesktopHeader = () => (
      <StyledCloseIcon
        className="icon-close"
        onClick={closeClickHandler}
        onKeyPress={closeClickHandler}
        aria-label="Close Modal"
        tabIndex="0"
        role="button"
        aria-pressed="false"
      >
        <FontAwesomeIcon icon={faTimes} />
      </StyledCloseIcon>
    );

    const MobileHeader = () => (
      <StyledCloseButton>
        <Button
          id="back-btn"
          variant="tertiary"
          handleClick={onClose}
          icon={faArrowLeft}
          trackingLabel={`Back button for ${trackingLabel}`}
          style={{ padding: 'inherit', margin: 'inherit' }}
        >
          {goBackActionTitle}
        </Button>
      </StyledCloseButton>
    );

    return (
      <StyledHeader ref={headerBarRef} desktop={isDesktop}>
        {isDesktop ? <DesktopHeader /> : <MobileHeader />}
      </StyledHeader>
    );
  };

  return (
    visible && (
      <>
        {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={overlayClickHandler} zIndex={zIndex} />}
        <RemoveScroll enabled={!disableBodyScrollLock}>
          <StyledAlignment visible={visible} zIndex={zIndex} ref={wizardModalRef}>
            <StyledModal id={id} className={classNames} desktop={isDesktop} dynamicHeight={dynamicHeight} breakpoint={breakpoint}>
              <Header />
              {children}
            </StyledModal>
          </StyledAlignment>
        </RemoveScroll>
      </>
    )
  );
};

WizardModal.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
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
  onClose: PropTypes.func,
  /**
   * To specify whether the modal should scale its height according to content size
   */
  dynamicHeight: PropTypes.bool,
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
   * zIndex for the modal & overlay (if using)
   */
  zIndex: PropTypes.number,
  /**
   * The content of the modal
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Title for the go back action button
   */
  goBackActionTitle: PropTypes.string,
  /**
   * Disable the scroll lock behavior
   */
  disableBodyScrollLock: PropTypes.bool,
};

WizardModal.defaultProps = {
  id: null,
  visible: false,
  dynamicHeight: false,
  onClose: null,
  className: '',
  overlay: true,
  overlayOpacity: 0.7,
  zIndex: 999999,
  children: null,
  goBackActionTitle: 'Back to results',
  disableBodyScrollLock: false,
};

export default WizardModal;
