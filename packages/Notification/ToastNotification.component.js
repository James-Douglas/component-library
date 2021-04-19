import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNotification from './ToastNotification.styles';
import { removeToast } from './events';

const ToastNotification = ({
  trackingLabel,
  id,
  variant,
  title,
  content,
  primaryAction,
  icon,
  closeButton,
  autoClose,
}) => {
  const closeHandler = () => {
    removeToast(id);
  };

  return (
    <AnimatedNotification
      trackingLabel={trackingLabel}
      type="toast"
      id={id}
      variant={variant}
      title={title}
      content={content}
      primaryAction={primaryAction}
      icon={icon}
      closeButton={closeButton}
      handleClose={closeHandler}
      autoClose={autoClose}
    />
  );
};

ToastNotification.propTypes = {
  /**
   * A descriptive label used in tracking user interactions with this component
   */
  trackingLabel: PropTypes.string.isRequired,
  /**
   * Id of the component (a unique id is required for toasts)
   */
  id: PropTypes.string.isRequired,
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
  icon: PropTypes.bool,
  /**
   * Defines close button visibility(by default it's hidden).
   */
  closeButton: PropTypes.bool,
  /**
   * AutoClose for Toast notifications
   */
  autoClose: PropTypes.PropTypes.oneOf([
    5000,
    10000,
    15000,
    20000,
  ]),
};

ToastNotification.defaultProps = {
  title: '',
  content: '',
  primaryAction: null,
  secondaryAction: null,
  variant: 'general',
  icon: false,
  closeButton: false,
  autoClose: null,
};

export default ToastNotification;
