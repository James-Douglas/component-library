import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Overlay = ({ opacityLevel, onClose }) => {
  const handleCloseSection = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="overlay" style={{ background: `rgba(0,0,0,${opacityLevel})` }} onClick={handleCloseSection} onKeyPress={handleCloseSection} tabIndex="0" role="option" aria-selected={false}>
      <style jsx>{styles}</style>
    </div>
  );
};


Overlay.propTypes = {
  /**
   *  Defines opacity level of the background(from 0 to 1).
   */
  opacityLevel: PropTypes.number,
  /**
   *  onClose function, called when click on overlay component.
   */
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  opacityLevel: 0.7,
  onClose: null,
};

export default Overlay;
