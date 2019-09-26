import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.css';

const FluidContainer = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>
    {children}
  </div>
);

FluidContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

FluidContainer.defaultProps = {
  className: '',
  children: [],
};

export default FluidContainer;
