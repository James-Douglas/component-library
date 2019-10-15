import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../Icon/Icon.component';


const Accordion = ({
  title,
  children,
  show,
  size,
  onClickGroup,
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const visibleClass = isVisible ? '' : 'hide';
  const arrowName = isVisible ? 'Top' : 'Bottom';

  const toggleTrueFalse = () => {
    setTimeout(() => {
      if (onClickGroup) {
        onClickGroup(!isVisible);
      }
      return setIsVisible(!isVisible);
    }, 1);
  };

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  return (
    <div className={`accordion ${visibleClass}`}>
      <style jsx>{styles}</style>
      <div className="accordion-head" onClick={toggleTrueFalse} onKeyUp={toggleTrueFalse} role="button" tabIndex={0}>
        <span>
          {title}
        </span>
        <span><Icon name={`arrow${arrowName}`} size={size} /></span>
      </div>
      <div className="accordion-body">
        <div className="accordion-body-wrap">{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.node,
  show: PropTypes.bool,
  size: PropTypes.number,
  onClickGroup: PropTypes.func,
};

Accordion.defaultProps = {
  children: '',
  title: '',
  show: false,
  size: 2,
  onClickGroup: null,
};

export default Accordion;
