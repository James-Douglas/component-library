import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.css';

const Row = ({ children, className }) => (
  <div className={`${styles.row} ${className}`}>
    {children}
  </div>
);

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Row.defaultProps = {
  className: '',
  children: [],
};

export default Row;
