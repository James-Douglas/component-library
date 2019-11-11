import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const FluidContainer = ({ children, className }) => (
  <>
    <style jsx>{styles}</style>
    <div className={`container ${className}`}>
      {children}
    </div>
  </>
);

FluidContainer.propTypes = {
  /**
   * Classes to be applied to the FluidContainer element
   */
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

FluidContainer.defaultProps = {
  className: '',
  children: [],
};

export default FluidContainer;
