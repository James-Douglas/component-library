import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Callout = ({
  children,
  bgColorGrey,
}) => (
  <div className={`callout ${bgColorGrey ? 'bg-grey' : ''}`}>
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
  /**
   * Band background color
   */
  bgColorGrey: PropTypes.bool,
};

Callout.defaultProps = {
  children: 'message',
  bgColorGrey: false,
};

export default Callout;
