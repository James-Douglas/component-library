import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Container = ({ children, className }) => (
  <>
    <style jsx>{styles}</style>
    <div className={`container fixed ${className}`}>
      {children}
    </div>
  </>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Container.defaultProps = {
  className: '',
  children: [],
};

export default Container;
