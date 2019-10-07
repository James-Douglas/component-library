import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles";

const Accordion = ({
  title,
  children
}) => (
  <div>
    <style jsx>{styles}</style>
    <div className="accordion-head">
      {title}
    </div>
    <div className="accordion-body">
      {children}
    </div>
  </div>
);

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  title: PropTypes.node,
};

Accordion.defaultProps = {
  children: "If you're in position to purchase your gas and electricity with one provider...",
  title: PropTypes.string
};

export default Accordion;
