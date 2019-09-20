import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.module.css';

const Row = ({ classes, children }) => (
  <div className={`${styles.row} ${classes}`}>
    {children}
  </div>
);

Row.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

Row.defaultProps = {
  classes: '',
  children: [],
};

export default Row;
