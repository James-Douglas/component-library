import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children, className }) => (
  <div className={`${styles.container} ${styles.fixed} ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Container.defaultProps = {
  className: '',
  children: [],
};

export default Container;
