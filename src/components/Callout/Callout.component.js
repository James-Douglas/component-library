import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Callout = ({
  children,
  type,
}) => (
  <div className={`callout ${type}`}>
    <style jsx>{styles}</style>
    {children}
  </div>
);

Callout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  type: PropTypes.oneOf(['info', 'warning']),
};

Callout.defaultProps = {
  children: 'message',
  type: 'info',
};

export default Callout;
