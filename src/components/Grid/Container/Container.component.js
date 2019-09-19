import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children, classes }) => (
  <div className={`${styles.container} ${styles.fixed} ${classes}`}>
    {children}
  </div>
);

Container.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

Container.defaultProps = {
  classes: '',
  children: [],
};

export default Container;
