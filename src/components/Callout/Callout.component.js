import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Callout = ({
  children,
  bgColourGrey,
}) => (
  <div className={`callout ${bgColourGrey ? 'bg-grey' : ''}`}>
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
  bgColourGrey: PropTypes.bool,
};

Callout.defaultProps = {
  children: 'message',
  bgColourGrey: false,
};

export default Callout;
