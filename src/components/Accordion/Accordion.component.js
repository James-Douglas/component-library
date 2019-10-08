import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from '../Icon/Icon.component';

const Accordion = ({
  title,
  children,
  show,
  size,
}) => {
  const [isShow, setIsShow] = useState(show);
  const showClass = !isShow ? 'hide' : '';
  const arrowName = isShow ? 'Top' : 'Bottom';
  const toggleTrueFalse = () => setIsShow(!isShow);
  return (
    <div className={`accordion ${showClass}`}>
      <style jsx>{styles}</style>
      <div className="accordion-head" onClick={toggleTrueFalse} onKeyUp={toggleTrueFalse} role="button">
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
};

Accordion.defaultProps = {
  children: "If you're in position to purchase your gas and electricity with one provider...",
  title: 'Position to purchase',
  show: true,
  size: 2,
};

export default Accordion;
