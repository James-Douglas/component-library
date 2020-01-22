import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import { faCheckCircle } from '@fortawesome/pro-regular-svg-icons/faCheckCircle';
import { faExclamationTriangle } from '@fortawesome/pro-regular-svg-icons/faExclamationTriangle';
import { faExclamationCircle } from '@fortawesome/pro-regular-svg-icons/faExclamationCircle';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';


const colorType = (type, colors) => {
  switch (type) {
    case 'success':
      return `${colors.secondaryDarker}`;
    case 'warning':
      return `${colors.warning}`;
    case 'danger':
      return `${colors.invalid}`;
    default:
      return `${colors.primaryLight}`;
  }
};

const iconName = (type) => {
  switch (type) {
    case 'success':
      return faCheckCircle;
    case 'warning':
      return faExclamationTriangle;
    case 'danger':
      return faExclamationCircle;
    default:
      return faInfoCircle;
  }
};

const StyledNotification = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  border-left: ${({ theme, type }) => `4px solid ${colorType(type, theme.colors)}`};
  padding: ${({ theme, icon }) => `${theme.spacing['16']} ${theme.spacing['20']} ${theme.spacing['16']} ${icon ? 0 : theme.spacing['20']}`};
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow.notification};
  color: ${({ theme }) => theme.colors.greyDarker};
`;
const StyledNotificationImage = styled.div`
  margin:  ${({ theme }) => `0 ${theme.spacing['12']} 0 ${theme.spacing['16']}`};
  svg {
    width: ${({ theme }) => theme.spacing[24]};
    height: ${({ theme }) => theme.spacing[24]};
    path {
      fill:${({ theme, type }) => `${colorType(type, theme.colors)}`};
    }
  }
`;
const StyledIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing[20]};
  top:  ${({ theme }) => theme.spacing[16]};
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex[50]}; 
  opacity: 0.5;
`;

const StyledNotificationContent = styled.div`
  width: 100%;
`;

const Notification = ({
  children,
  type,
  icon,
  closeButton,
  onClose,
  className,
}) => {
  const IconClick = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <ThemeProvider theme={getTheme()}>
      <StyledNotification type={type} icon={icon} className={className}>
        {closeButton && (
          <StyledIcon onClick={IconClick} onKeyPress={IconClick} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </StyledIcon>
        )}
        {icon && (
          <StyledNotificationImage icon={icon} type={type}>
            <FontAwesomeIcon icon={iconName(type)} size="lg" />
          </StyledNotificationImage>
        )}
        <StyledNotificationContent>
          {children}
        </StyledNotificationContent>
      </StyledNotification>
    </ThemeProvider>
  );
};


Notification.propTypes = {
  /**
   * Content of the component
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Type of the component - define color as well
   */
  type: PropTypes.PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'danger',
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
  onClose: PropTypes.func,
  /**
   * Classes to be applied to the Notification component
   */
  className: PropTypes.string,
};

Notification.defaultProps = {
  children: 'message',
  type: 'primary',
  icon: false,
  closeButton: false,
  onClose: null,
  className: '',
};

export default Notification;
