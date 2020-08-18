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
  StyledSpan,
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
  closeButton,
  handleClose,
  className,
  autoClose,
  background,
}) => {
  const iconHandler = () => {
    if (handleClose) {
      handleClose();
    }
  };

  const iconVariant = notificationIcon(variant);

  useEffect(() => {
    if (autoClose && type === 'toast') {
      setTimeout(() => {
        removeToast(id);
      }, autoClose);
    }
  }, [autoClose, id, type]);

  return (
    <StyledNotification type={type} variant={variant} position={position} icon={icon} background={background} className={className}>
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
                && <Link href={primaryAction.link}><StyledFontAwesomeWrap><FontAwesomeIcon icon={faLongArrowLeft} size="1x" /></StyledFontAwesomeWrap>{primaryAction.content}</Link>}
              {(secondaryAction && type !== 'hint')
                && <Link href={secondaryAction.link}><StyledSpan><FontAwesomeIcon icon={faInfoCircleRegular} size="1x" /></StyledSpan>{secondaryAction.content}</Link>}
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
  closeButton: false,
  handleClose: null,
  className: '',
  autoClose: null,
  position: null,
  background: false,
};

export default Notification;
