import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@comparethemarketau/manor-typography';
import { Link } from '@comparethemarketau/manor-link';
import {
  faInfoCircle as faInfoCircleRegular,
  faLongArrowLeft,
} from '@fortawesome/pro-regular-svg-icons/';
import {
  faInfoCircle,
  faCheckCircle,
  faExclamationTriangle,
  faEngineWarning,
  faTimes,
} from '@fortawesome/pro-light-svg-icons';
import {
  StyledActions,
  StyledContent,
  StyledFontAwesomeWrap,
  StyledHeading,
  StyledIcon,
  StyledNotification,
  StyledNotificationContentWrap,
  StyledNotificationImage,
  StyledActionText,
} from './Notification.styles';
import { removeToast } from './events';

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

const Notification = ({
  id,
  type,
  variant,
  position,
  title,
  content,
  primaryAction,
  secondaryAction,
  icon,
  customIcon,
  closeButton,
  handleClose,
  className,
  autoClose,
  background,
  defaultWhiteBackground,
}) => {
  const iconHandler = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const iconVariant = customIcon || notificationIcon(variant);

  const getAction = (action, isPrimary) => {
    const faIcon = isPrimary ? faLongArrowLeft : faInfoCircleRegular;

    if (!action.link) {
      return <StyledActionText onClick={action.handleClick}><StyledFontAwesomeWrap><FontAwesomeIcon icon={faIcon} size="1x" /></StyledFontAwesomeWrap>{action.content}</StyledActionText>;
    }
    return <Link href={action.link} onClick={action.handleClick}><StyledFontAwesomeWrap><FontAwesomeIcon icon={faIcon} size="1x" /></StyledFontAwesomeWrap>{action.content}</Link>;
  };

  useEffect(() => {
    if (autoClose && type === 'toast') {
      setTimeout(() => {
        removeToast(id);
      }, autoClose);
    }
  }, [autoClose, id, type]);

  return (
    <StyledNotification type={type} variant={variant} position={position} icon={icon} background={background} defaultWhiteBackground={defaultWhiteBackground} className={className}>
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
        {title
          && (
            <StyledHeading type={type} variant={variant}>
              <Typography variant="body1" component="span">{title}</Typography>
            </StyledHeading>
          )}
        <StyledContent title={title} type={type}>
          <Typography variant="body2" component="span">{content}</Typography>
        </StyledContent>
        {(primaryAction || secondaryAction)
          && (
            <StyledActions>
              {(primaryAction && type !== 'hint')
                && getAction(primaryAction, true)}
              {(secondaryAction && type !== 'hint')
                && getAction(secondaryAction, false)}
            </StyledActions>
          )}
      </StyledNotificationContentWrap>
    </StyledNotification>
  );
};

Notification.propTypes = {
  /**
   * Id of the component (generated id for toasts only)
   */
  id: PropTypes.string,
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
    handleClick: PropTypes.func,
  }),
  /**
   * Secondary action of the component
   */
  secondaryAction: PropTypes.shape({
    content: PropTypes.string,
    link: PropTypes.string,
    handleClick: PropTypes.func,
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
   * Define a custom icon
   */
  customIcon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.array, // eslint-disable-line
  }),
  /**
   * Defines close button visibility(by default it's hidden).
   */
  closeButton: PropTypes.bool,
  /**
   * Called when click close button.
   */
  handleClose: PropTypes.func,
  /**
   * Classes to be applied to the Notification component
   */
  className: PropTypes.string,
  /**
   * AutoClose for Toast notifications
   */
  autoClose: PropTypes.PropTypes.oneOf([
    5000,
    10000,
    15000,
    20000,
  ]),
  /**
   * Background color for notification - only available for hint variants
   */
  background: PropTypes.bool,
  /**
   * Default background color for notification - will default to white background
   */
  defaultWhiteBackground: PropTypes.bool,
};

Notification.defaultProps = {
  id: '',
  title: '',
  content: '',
  primaryAction: null,
  secondaryAction: null,
  type: 'inline',
  variant: 'general',
  icon: false,
  customIcon: null,
  closeButton: false,
  handleClose: null,
  className: '',
  autoClose: null,
  position: null,
  background: false,
  defaultWhiteBackground: true,
};

export default Notification;
