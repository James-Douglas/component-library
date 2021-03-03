/* eslint-disable react/forbid-prop-types */
import React, {
  useRef, useState, useLayoutEffect, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPhone, faComments } from '@fortawesome/pro-regular-svg-icons';
import FocusTrap from 'focus-trap-react';
import { Container, Row, Column } from '@comparethemarketau/manor-grid';
import { throttle } from '@comparethemarketau/manor-utils';
import { ManorContext } from '@comparethemarketau/manor-provider';
import { Separator } from '@comparethemarketau/manor-separator';
import { useId } from '@comparethemarketau/manor-hooks';
import { Button } from '@comparethemarketau/manor-button';
import { Overlay } from '@comparethemarketau/manor-overlay';
import { Typography } from '@comparethemarketau/manor-typography';
import {
  StyledAlignment, StyledCloseIcon, StyledContent, StyledContentChildren,
  StyledModal, StyledModalHeader, StyledTitle, StyledSecondaryButton,
  StyledPrimaryButton, StyledContentButtons, StyledSupplementaryBar,
  StyledSupplementaryBarItem, StyledFlexContainer, StyledSupplementaryBarItemText,
  StyledTitleIcon, StyledTitleContainer, SeparatorContainer, StyledSupplementaryBarItemIcon,
  StyledLink,
} from './Modal.styles';

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

const Modal = ({
  id: propsId,
  dynamicHeight,
  title,
  titleIcon,
  visible,
  handleClose,
  className,
  children,
  overlay,
  overlayOpacity,
  primaryActionTitle,
  secondaryActionTitle,
  handleOverlayClick,
  handlePrimaryActionClick,
  handleSecondaryActionClick,
  showSupplementaryBar,
  supplementaryBarOptions,
  zIndex,
  trapFocus,
  focusTrapOptions,
}) => {
  const id = useId(propsId);
  const headerBarRef = useRef(null);
  const supplementaryBarRef = useRef(null);
  const [headerBarHeight, setHeaderBarHeight] = useState();
  const [supplementaryBarHeight, setSupplementaryBarHeight] = useState();

  const { isDesktop } = useContext(ManorContext);
  const { showRequestCall, showChatOnline, phoneNumber } = supplementaryBarOptions;
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

  useLayoutEffect(() => {
    if (supplementaryBarRef) {
      const handleResize = () => {
        if (supplementaryBarRef.current) {
          setSupplementaryBarHeight(supplementaryBarRef.current.offsetHeight);
        }
      };
      const throttledResize = throttle(handleResize, 25);
      window.addEventListener('resize', throttledResize);
      return () => {
        window.removeEventListener('resize', throttledResize);
      };
    }
    return null;
  }, [supplementaryBarRef, supplementaryBarHeight]);

  useEffect(() => {
    if (supplementaryBarRef && supplementaryBarRef.current) {
      setSupplementaryBarHeight(supplementaryBarRef.current.offsetHeight);
    }
  }, [visible]);

  const Header = () => (
    <StyledModalHeader ref={headerBarRef} desktop={isDesktop}>
      <Container>
        <Row removeMarginBottom>
          <Column halign="center">
            <StyledTitleContainer>
              {titleIcon && (
                <StyledTitleIcon desktop={isDesktop}>
                  {titleIcon}
                </StyledTitleIcon>
              )}
              {title && (
                <StyledTitle desktop={isDesktop}>
                  <Typography variant="h2">{title}</Typography>
                </StyledTitle>
              )}
            </StyledTitleContainer>
          </Column>
          <Column cols={1} valign="flex-end" halign="center">
            <StyledCloseIcon className="icon-close" onClick={handleClose} onKeyPress={handleClose} aria-label="Close Modal" tabIndex="0" role="button" aria-pressed="false">
              <FontAwesomeIcon icon={faTimes} />
            </StyledCloseIcon>
          </Column>
        </Row>
      </Container>
    </StyledModalHeader>
  );

  const ActionButtons = () => {
    const showButtons = secondaryActionTitle || primaryActionTitle;

    if (!showButtons) {
      return null;
    }

    return (
      <StyledContentButtons>
        {secondaryActionTitle && (
          <StyledSecondaryButton>
            <Button id="secondary-btn" variant="tertiary" style={{ margin: 0, display: 'inline-block', padding: '1.2rem' }} handleClick={handleSecondaryActionClick}>{secondaryActionTitle}</Button>
          </StyledSecondaryButton>
        )}
        {primaryActionTitle && (
          <StyledPrimaryButton>
            <Button id="primary-btn" variant="primary" style={{ margin: 0, display: 'inline-block', padding: '1.2rem' }} handleClick={handlePrimaryActionClick}>{primaryActionTitle}</Button>
          </StyledPrimaryButton>
        )}
      </StyledContentButtons>
    );
  };

  const SupplementaryBar = () => {
    const showCallUs = (showRequestCall || showChatOnline) && phoneNumber;
    if (!showSupplementaryBar) {
      return null;
    }

    return (
      <StyledSupplementaryBar id="supplementary-bar" ref={supplementaryBarRef} desktop={isDesktop}>
        <Container>
          <Row removeMarginBottom>
            <Column cols={12}>
              <Typography variant="body1">Need help? Talk to one of our experts</Typography>
            </Column>
          </Row>
          <Row removeMarginBottom>
            <Column>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {showRequestCall && (
                  <StyledSupplementaryBarItem desktop={isDesktop}>
                    <StyledSupplementaryBarItemIcon>
                      <FontAwesomeIcon icon={faPhone} />
                    </StyledSupplementaryBarItemIcon>
                    <StyledSupplementaryBarItemText>
                      <Typography gutterBottom={false} component="span" variant="subtitle2">Request a call</Typography>
                    </StyledSupplementaryBarItemText>
                  </StyledSupplementaryBarItem>
                )}
                {showChatOnline && (
                  <StyledSupplementaryBarItem desktop={isDesktop}>
                    <StyledSupplementaryBarItemIcon>
                      <FontAwesomeIcon color="" icon={faComments} />
                    </StyledSupplementaryBarItemIcon>
                    <StyledSupplementaryBarItemText>
                      <Typography component="span" variant="subtitle2">Chat online</Typography>
                    </StyledSupplementaryBarItemText>
                  </StyledSupplementaryBarItem>
                )}
                {showCallUs
                  && (
                    <SeparatorContainer>
                      <Separator noSpacing type="vertical" />
                    </SeparatorContainer>
                  )}
                {phoneNumber && (
                  <StyledFlexContainer>
                    <StyledSupplementaryBarItemText>
                      <Typography gutterBottom={false} variant="body1">Call us on</Typography>
                    </StyledSupplementaryBarItemText>
                    <StyledSupplementaryBarItem desktop={isDesktop}>
                      <StyledSupplementaryBarItemIcon>
                        <FontAwesomeIcon icon={faPhone} />
                      </StyledSupplementaryBarItemIcon>
                      <StyledSupplementaryBarItemText>
                        <StyledLink href={`tel:${phoneNumber}`} target="link-target">
                          <Typography component="span" variant="subtitle2">{phoneNumber}</Typography>
                        </StyledLink>
                      </StyledSupplementaryBarItemText>
                    </StyledSupplementaryBarItem>
                  </StyledFlexContainer>
                )}
              </div>
            </Column>
          </Row>
        </Container>
      </StyledSupplementaryBar>
    );
  };

  return (
    <>
      {overlay && <Overlay visible={visible} opacityLevel={overlayOpacity} handleClick={handleOverlayClick} zIndex={zIndex} />}
      {visible
        && (
          <Wrapper trapFocus={trapFocus} focusTrapOptions={focusTrapOptions}>
            <StyledAlignment visible={visible} zIndex={zIndex}>
              <StyledModal id={id} className={classNames} desktop={isDesktop} dynamicHeight={dynamicHeight}>
                {Header()}
                <StyledContent desktop={isDesktop} modalHeaderBarHeight={headerBarHeight} showSupplementaryBar={showSupplementaryBar}>
                  <StyledContentChildren desktop={isDesktop} supplementaryBarHeight={supplementaryBarHeight} showSupplementaryBar={showSupplementaryBar}>{children}</StyledContentChildren>
                  {ActionButtons()}
                  {SupplementaryBar()}
                </StyledContent>
              </StyledModal>
            </StyledAlignment>
          </Wrapper>
        )}
    </>
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
   * Called when the overlay is clicked
   */
  handleOverlayClick: PropTypes.func,
  /**
   * Title for the primary action button
   */
  primaryActionTitle: PropTypes.string,
  /**
   * Called when the primary action is clicked
   */
  handlePrimaryActionClick: PropTypes.func,
  /**
   * Title for the secondary action button
   */
  secondaryActionTitle: PropTypes.string,
  /**
   * Called when the secondary action is clicked
   */
  handleSecondaryActionClick: PropTypes.func,
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
   * The icon to display next to the title
   */
  titleIcon: PropTypes.node,
  /**
   * zIndex for the modal & overlay (if using)
   */
  zIndex: PropTypes.number,
  /**
   * show the contact box below the modal content
   */
  showSupplementaryBar: PropTypes.bool,
  /**
   * The supplementary bar options to show
   */
  supplementaryBarOptions: PropTypes.shape({
    showRequestCall: PropTypes.bool,
    showChatOnline: PropTypes.bool,
    phoneNumber: PropTypes.string,
  }),
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

Modal.defaultProps = {
  id: null,
  visible: false,
  dynamicHeight: false,
  handleClose: null,
  className: '',
  children: '',
  overlay: false,
  overlayOpacity: 0.7,
  handleOverlayClick: null,
  primaryActionTitle: null,
  handlePrimaryActionClick: null,
  secondaryActionTitle: null,
  handleSecondaryActionClick: null,
  titleIcon: null,
  title: '',
  zIndex: 999999,
  showSupplementaryBar: false,
  supplementaryBarOptions: {
    showRequestCall: true,
    showChatOnline: true,
    phoneNumber: '',
  },
  trapFocus: false,
  focusTrapOptions: {},
};

export default Modal;
