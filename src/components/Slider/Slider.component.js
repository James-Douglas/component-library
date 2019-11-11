import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../Icon/Icon.component';

const Slider = ({
  direction,
  notificationSize,
  closeButton,
  children,
  iconClassName,
  show,
  onClose,
}) => {
  let slideStyle;
  const distance = !show ? `-${notificationSize}` : 0;
  if (direction === 'bottom') {
    slideStyle = {
      height: notificationSize,
      bottom: distance,
    };
  } else if (direction === 'top') {
    slideStyle = {
      height: notificationSize,
      top: distance,
    };
  } else if (direction === 'left') {
    slideStyle = {
      width: notificationSize,
      left: distance,
    };
  } else {
    slideStyle = {
      width: notificationSize,
      right: distance,
    };
  }
  const IconClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div>
      <style jsx>{styles}</style>
      <div className={`animate ${direction} ${!show ? 'shadow-none' : 'shadow-lg'}`} style={slideStyle}>
        {closeButton && <div className={`${iconClassName} icon-close`} onClick={IconClick} onKeyPress={IconClick} aria-label="Close Dialog" tabIndex="0" role="button" aria-pressed="false"><Icon name="close" size={1.6} /></div>}
        {children}
      </div>
    </div>
  );
};


Slider.propTypes = {
  /**
   *  Direction param play a role in how we interpret a slide's movement within a frame.
   */
  direction: PropTypes.string,
  /**
   *  Defines height or width (depending from direction) of the slide.
   */
  notificationSize: PropTypes.string,
  /**
   *  The slide's content.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   *  Defines close button visibility(by default it's hidden).
   */
  closeButton: PropTypes.bool,
  /**
   *  Defines custom class name for close button.
   */
  iconClassName: PropTypes.string,
  /**
   *  Defines slide visibility.
   */
  show: PropTypes.bool,
  /**
   *  onClose function, called when click close button.
   */
  onClose: PropTypes.func,
};

Slider.defaultProps = {
  direction: 'right',
  notificationSize: '80%',
  children: '',
  closeButton: false,
  iconClassName: '',
  show: false,
  onClose: null,
};

export default Slider;
