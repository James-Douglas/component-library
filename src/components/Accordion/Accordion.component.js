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
  const [isShow, setIsShow] = useState(show);
  const showClass = isShow ? '' : 'hide';
  const arrowName = isShow ? 'Top' : 'Bottom';
  const toggleTrueFalse = () => {
    if (onClickGroup) {
      onClickGroup(!isShow);
    }
    return setIsShow(!isShow);
  };
  useEffect(() => {
    setIsShow(show);
  }, [show]);
  return (
    <div className={`accordion ${showClass}`}>
      <style jsx>{styles}</style>
      <div className="accordion-head" onClick={toggleTrueFalse} onKeyUp={toggleTrueFalse} role="button" tabIndex={0}>
        <span>
          {title}
        </span>
        <span><Icon name={`arrow${arrowName}`} size={size} /></span>
      </div>
      <div className="accordion-body">
        {children}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.node,
  show: PropTypes.bool,
  size: PropTypes.number,
  onClickGroup: PropTypes.func,
};

Accordion.defaultProps = {
  children: "If you're in position to purchase your gas and electricity with one provider...",
  title: 'Position to purchase',
  show: false,
  size: 2,
  onClickGroup: null,
};

export default Accordion;
