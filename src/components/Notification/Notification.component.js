import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faCheckCircle,
  faLongArrowLeft,
  faExclamationTriangle,
  faEngineWarning,
  faTimes,
}
  from '@fortawesome/pro-regular-svg-icons/';

const notificationIcon = (variant) => {
  switch (variant) {
    case 'success':
      return faCheckCircle;
    case 'warning':
      return faExclamationTriangle;
    case 'error':
      return faEngineWarning;
    default:
      return faInfoCircle;
  }
};

const StyledNotification = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  border-left: ${({ theme, variant }) => `${theme.spacing[4]} solid ${theme.notification[variant]}`};
  padding: ${({ theme, icon, type }) => `${theme.spacing[8]} ${theme.spacing[20]} ${theme.spacing[8]} ${(icon && type !== 'hint') ? 0 : theme.spacing[20]}`};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  position: ${({ type }) => (type === 'toast' ? 'absolute' : 'relative')};
  ${({ position, type }) => (type === 'toast' ? css`${position}: 0; right: 0;` : null)};
  ${({ theme, type }) => type === 'toast' && css`min-width: ${theme.minWidth.xs};`};
  ${({ theme, type }) => type !== 'hint' && css`box-shadow: ${theme.notification.shadow};`}
  color: ${({ theme }) => theme.colors.greyDarker};
`;

const StyledNotificationImage = styled.div`
  margin: ${({ theme }) => `0 ${theme.spacing[12]} 0 ${theme.spacing[12]}`};
  width: ${({ theme }) => theme.spacing[16]};
  svg {
    width: ${({ theme }) => theme.spacing[24]};
    height: ${({ theme }) => theme.spacing[24]};
    path {
      fill: ${({ theme, variant }) => theme.notification[variant]};
    }
  }
`;

const StyledIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing[20]}; 
  top:  ${({ theme }) => theme.spacing[16]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex[10]};
  opacity: 0.5;
`;

const StyledNotificationContentWrap = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

const StyledHeading = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  ${({ theme, type }) => type === 'hint' && css` 
    color: ${theme.colors.primary500};
    font-weight: ${theme.fontWeight.semibold};
  `};
`;

const StyledContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey800};
  width: 95%;
`;

const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

const StyledFontAwesomeWrap = styled.div`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

const StyledSpan = styled.span`
  margin-right: ${({ theme }) => theme.spacing[8]};
`;

const Notification = ({
  type,
  variant,
  position,
  title,
  content,
  primaryAction,
  secondaryAction,
  icon,
  closeButton,
  handleClose,
  className,
  autoClose,
}) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (autoClose !== null) {
      const timeout = setTimeout(() => {
        setActive(false);
      }, autoClose);
      return () => clearTimeout(timeout);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const iconHandler = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const iconVariant = notificationIcon(variant);

  return (
    <>
      {active
      && (
      <StyledNotification type={type} variant={variant} position={position} icon={icon} className={className}>
        {(closeButton && type !== 'hint') && (
        <StyledIcon onClick={iconHandler} onKeyPress={iconHandler} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </StyledIcon>
        )}
        {(icon && type !== 'hint') && (
        <StyledNotificationImage variant={variant}>
          <FontAwesomeIcon icon={iconVariant} size="lg" />
        </StyledNotificationImage>
        )}
        <StyledNotificationContentWrap>
          <StyledHeading type={type}>
            {title}
          </StyledHeading>
          <StyledContent>
            {content}
          </StyledContent>
          <StyledActions>
            {(primaryAction && type !== 'hint')
              && <a href={primaryAction.link}><StyledFontAwesomeWrap><FontAwesomeIcon icon={faLongArrowLeft} size="1x" /></StyledFontAwesomeWrap>{primaryAction.content}</a>}
            {(secondaryAction && type !== 'hint')
              && <a href={secondaryAction.link}><StyledSpan><FontAwesomeIcon icon={faInfoCircle} size="1x" /></StyledSpan>{secondaryAction.content}</a>}
          </StyledActions>
        </StyledNotificationContentWrap>
      </StyledNotification>
      )}
    </>
  );
};

Notification.propTypes = {
  /**
   * Title of the component
   */
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Content of the component
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Primary action of the component
   */
  primaryAction: PropTypes.shape({
    content: PropTypes.string,
    link: PropTypes.string,
  }),
  /**
   * Secondary action of the component
   */
  secondaryAction: PropTypes.shape({
    content: PropTypes.string,
    link: PropTypes.string,
  }),
  /**
   * Component type, inline, toast or hint
   */
  type: PropTypes.PropTypes.oneOf([
    'inline',
    'toast',
    'hint',
  ]),
  /**
   * Defines the color and type of icon for the component
   */
  variant: PropTypes.PropTypes.oneOf([
    'general',
    'success',
    'warning',
    'error',
  ]),
  /**
   * Define icon presence
   */
  position: PropTypes.PropTypes.oneOf([
    'top',
    'bottom',
  ]),
  /**
   * Define icon presence
   */
  icon: PropTypes.bool,
  /**
   *  Defines close button visibility(by default it's hidden).
   */
  closeButton: PropTypes.bool,
  /**
   *  Called when click close button.
   */
  handleClose: PropTypes.func,
  /**
   * Classes to be applied to the Notification component
   */
  className: PropTypes.string,
  /**
   * autoClose
   */
  autoClose: PropTypes.PropTypes.oneOf([
    5000,
    10000,
    15000,
    20000,
  ]),
};

Notification.defaultProps = {
  title: '',
  content: '',
  primaryAction: null,
  secondaryAction: null,
  type: 'inline',
  variant: 'general',
  icon: false,
  closeButton: false,
  handleClose: null,
  className: '',
  autoClose: null,
  position: null,

};

export default Notification;
